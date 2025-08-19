import baseMatrices from '../../assets/pricing/coins/base-matrices.json' with { type: 'json' }
import surcharges from '../../assets/pricing/coins/surcharges.json' with { type: 'json' }
import meta from '../../assets/pricing/coins/meta.json' with { type: 'json' }
import pinOrderFees from '../../assets/pricing/pins/order-fees.json' with { type: 'json' }
import { roundHalfUp, safeNumber } from './money.js'

function coerceQuantityToTier(quantity) {
  const qty = Number.parseInt(quantity, 10)
  const tiers = meta.quantityTiers || []
  if (tiers.length === 0) return { tierQuantity: 0, isBelowMinimum: true }
  if (!Number.isFinite(qty) || qty <= 0) return { tierQuantity: tiers[0], isBelowMinimum: true }
  const minTier = tiers[0]
  if (qty <= minTier) return { tierQuantity: minTier, isBelowMinimum: qty < minTier }
  for (let i = tiers.length - 1; i >= 0; i -= 1) {
    if (qty >= tiers[i]) return { tierQuantity: tiers[i], isBelowMinimum: false }
  }
  return { tierQuantity: minTier, isBelowMinimum: true }
}

function resolveColorKeyFromSid(colorSid) {
  const mapping = meta.mappings?.colorSidToKey || {}
  return mapping[colorSid] || null
}

function resolveNominalSizeInchesFromSid(sizeSid) {
  const mapping = meta.mappings?.sizeSidToInchesNominal || {}
  return mapping[sizeSid] ?? null
}

function resolveNearestSupportedSize(requestedSize, colorKey) {
  if (typeof requestedSize !== 'number') return null
  const options = baseMatrices.colorOptions?.[colorKey]
  if (!options) return null
  const keys = Object.keys(options).map(k => parseFloat(k)).filter(n => Number.isFinite(n))
  if (!keys.length) return null
  let nearest = keys[0]
  let minDiff = Math.abs(keys[0] - requestedSize)
  for (let i = 1; i < keys.length; i += 1) {
    const diff = Math.abs(keys[i] - requestedSize)
    if (diff < minDiff) {
      nearest = keys[i]
      minDiff = diff
    }
  }
  return nearest
}

function getBasePerUnit(colorKey, sizeInches, tierQuantity) {
  const table = baseMatrices.colorOptions?.[colorKey]
  if (!table) return null
  const sizeKey = (typeof sizeInches === 'number') ? sizeInches.toFixed(2).replace(/\.00$/, '') : String(sizeInches)
  const sizeVariants = [
    String(sizeInches),
    sizeInches?.toFixed ? sizeInches.toFixed(2) : null,
    sizeInches?.toFixed ? sizeInches.toFixed(1) : null
  ].filter(Boolean)
  const actualSizeKey = sizeVariants.find(k => Object.prototype.hasOwnProperty.call(table, k)) || sizeKey
  const row = table[actualSizeKey]
  if (!Array.isArray(row)) return null
  const tierIndex = (meta.quantityTiers || []).indexOf(tierQuantity)
  if (tierIndex < 0) return null
  return safeNumber(row[tierIndex], null)
}

function getPerUnitSurcharges(platingSid, packagingSid) {
  const platingKey = meta.mappings?.platingSidToKey?.[platingSid]
  const packagingKey = meta.mappings?.packagingSidToKey?.[packagingSid]

  let platingPerUnit = 0
  if (platingKey) {
    const p = surcharges.plating?.[platingKey]
    if (p?.type === 'per-side-per-coin') {
      const sideCount = safeNumber(meta.policies?.dualPlatingSideCountDefault ?? 2, 2)
      platingPerUnit = safeNumber(p.cost, 0) * sideCount
    } else if (p?.type === 'per-coin') {
      platingPerUnit = safeNumber(p.cost, 0)
    }
  }

  let packagingPerUnit = 0
  if (packagingKey) {
    const pkg = surcharges.packaging?.[packagingKey]
    if (pkg?.type === 'per-coin') {
      packagingPerUnit = safeNumber(pkg.cost, 0)
    }
  }

  return { platingPerUnit, packagingPerUnit }
}

function computeMoldFee(sizeInches, quantity) {
  const waiverQty = pinOrderFees.moldFees?.waiver?.minQuantityForWaiver || Infinity
  if (quantity >= waiverQty) return 0
  const rules = pinOrderFees.moldFees?.rules || []
  for (const rule of rules) {
    if (typeof rule.exactSizeInches === 'number' && rule.exactSizeInches === sizeInches) {
      return safeNumber(rule.feeCents, 0) / 100
    }
    if (typeof rule.maxSizeInches === 'number' && sizeInches <= rule.maxSizeInches) {
      return safeNumber(rule.feeCents, 0) / 100
    }
  }
  return 0
}

export function computeCoinEstimate(vuexState, twoColData) {
  const steps = Array.isArray(vuexState?.coinQuote?.quoteCoin) ? vuexState.coinQuote.quoteCoin : []
  const getSelectedSid = (title) => (steps.find(s => s.title === title)?.selected || null)
  const platingSid = getSelectedSid('Plating')
  const colorSid = getSelectedSid('Color')
  const sizeSid = getSelectedSid('Sizing')
  const packagingSid = getSelectedSid('Packaging')

  // Require plating selection before showing any estimate
  if (!platingSid) {
    return {
      perUnit: 0,
      total: 0,
      breakdown: {},
      confidence: 'none',
      notes: ['Select plating to see estimate']
    }
  }

  const rawQuantity = twoColData?.quantity ?? meta.policies?.minQuantity ?? (meta.quantityTiers?.[0] ?? 50)
  const parsed = Number.parseInt(String(rawQuantity), 10)
  const quantityParsed = (Number.isFinite(parsed) && parsed > 0)
    ? parsed
    : (meta.policies?.minQuantity ?? (meta.quantityTiers?.[0] ?? 50))
  const { tierQuantity, isBelowMinimum } = coerceQuantityToTier(quantityParsed)

  let colorKey = resolveColorKeyFromSid(colorSid)
  if (!colorKey) {
    // choose a safe default for starting price
    colorKey = 'no-color'
  }

  const nominalSize = resolveNominalSizeInchesFromSid(sizeSid)
  // If nominal does not exist in pricing table, resolve to nearest supported size for the selected color
  let resolvedSize = nominalSize
  if (typeof resolvedSize !== 'number') {
    // pick smallest supported size for UI
    const keys = Object.keys(baseMatrices.colorOptions?.[colorKey] || {}).map(k => parseFloat(k)).filter(n => Number.isFinite(n))
    resolvedSize = keys.sort((a, b) => a - b)[0]
  }
  const nearestSize = resolveNearestSupportedSize(resolvedSize, colorKey)
  const basePerUnit = getBasePerUnit(colorKey, nearestSize, tierQuantity)

  if (basePerUnit == null) {
    return {
      perUnit: null,
      total: null,
      breakdown: {},
      confidence: 'unknown',
      notes: ['Pricing data unavailable for selection']
    }
  }

  const { platingPerUnit, packagingPerUnit } = getPerUnitSurcharges(platingSid, packagingSid)
  const perUnit = roundHalfUp(basePerUnit + platingPerUnit + packagingPerUnit, meta.rounding?.perUnit || 2)

  const moldFee = computeMoldFee(nearestSize, quantityParsed)
  const total = roundHalfUp(perUnit * quantityParsed + moldFee, meta.rounding?.total || 2)

  const breakdown = {
    colorKey,
    sizeInches: nearestSize,
    tierQuantity,
    quantity: quantityParsed,
    basePerUnit,
    platingPerUnit,
    packagingPerUnit,
    moldFee
  }

  const hasExactSelections = Boolean(colorSid && sizeSid)
  const confidence = hasExactSelections ? 'exact' : 'starting_at'
  const notes = []
  if (isBelowMinimum) notes.push(`Minimum pricing tier is ${meta.quantityTiers?.[0] || 50} units; smaller runs priced at ${meta.quantityTiers?.[0] || 50}-tier.`)

  return { perUnit, total, breakdown, confidence, notes }
}


