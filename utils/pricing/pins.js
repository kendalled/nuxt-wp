import baseMatrices from '../../assets/pricing/pins/base-matrices.json' with { type: 'json' }
import surcharges from '../../assets/pricing/pins/surcharges.json' with { type: 'json' }
import meta from '../../assets/pricing/pins/meta.json' with { type: 'json' }
import orderFees from '../../assets/pricing/pins/order-fees.json' with { type: 'json' }
import { roundHalfUp, safeNumber } from './money.js'

function coerceQuantityToTier(quantity) {
  const qty = Number.parseInt(quantity, 10)
  const tiers = meta.quantityTiers || []
  if (!Number.isFinite(qty) || tiers.length === 0) return { tierQuantity: tiers[0], isBelowMinimum: true }
  const minTier = tiers[0]
  if (qty <= minTier) return { tierQuantity: minTier, isBelowMinimum: qty < minTier }
  for (let i = 0; i < tiers.length; i += 1) {
    if (qty <= tiers[i]) return { tierQuantity: tiers[i], isBelowMinimum: false }
  }
  // Above max: use max tier
  return { tierQuantity: tiers[tiers.length - 1], isBelowMinimum: false }
}

function resolveProcessKeyFromSid(productionSid) {
  const mapping = meta.mappings?.productionSidToProcessKey || {}
  return mapping[productionSid] || null
}

function resolveSizeInchesFromSid(sizeSid) {
  const mapping = meta.mappings?.sizeSidToInches || {}
  return mapping[sizeSid] || null
}

function getBasePerUnit(processKey, sizeInches, tierQuantity) {
  const process = baseMatrices.processes?.[processKey]
  if (!process) return null
  const sizeKey = (typeof sizeInches === 'number') ? sizeInches.toFixed(2).replace(/\.00$/, '') : String(sizeInches)
  // Accept keys like "1.5" or "1.50"; normalize to two or standard
  const sizeVariants = [
    String(sizeInches),
    sizeInches?.toFixed ? sizeInches.toFixed(2) : null,
    sizeInches?.toFixed ? sizeInches.toFixed(1) : null
  ].filter(Boolean)
  const actualSizeKey = sizeVariants.find(k => Object.prototype.hasOwnProperty.call(process, k)) || sizeKey
  const row = process[actualSizeKey]
  if (!Array.isArray(row)) return null
  const tierIndex = (meta.quantityTiers || []).indexOf(tierQuantity)
  if (tierIndex < 0) return null
  return safeNumber(row[tierIndex], null)
}

function getPerUnitSurcharges(platingSid, backingSid, packagingSid) {
  const platingKey = meta.mappings?.platingSidToKey?.[platingSid]
  const backingKey = meta.mappings?.backingSidToKey?.[backingSid]
  const packagingKey = meta.mappings?.packagingSidToKey?.[packagingSid]

  let platingPerUnit = 0
  if (platingKey) {
    const p = surcharges.plating?.[platingKey]
    if (p?.pricingModel === 'per_side_per_unit') {
      const perSideCents = safeNumber(p.perSideCents, 0)
      const sides = safeNumber(p.defaultSideCount ?? meta.policies?.dualPlatedDefaultSideCount ?? 1, 1)
      platingPerUnit = (perSideCents * sides) / 100
    } else {
      platingPerUnit = safeNumber((p?.perUnitCents || 0) / 100, 0)
    }
  }

  const backingPerUnit = backingKey ? safeNumber((surcharges.backing?.[backingKey]?.perUnitCents || 0) / 100, 0) : 0
  const packagingPerUnit = packagingKey ? safeNumber((surcharges.packaging?.[packagingKey]?.perUnitCents || 0) / 100, 0) : 0

  return { platingPerUnit, backingPerUnit, packagingPerUnit }
}

function computeMoldFee(sizeInches, quantity) {
  const waiverQty = orderFees.moldFees?.waiver?.minQuantityForWaiver || Infinity
  if (quantity >= waiverQty) return 0
  const rules = orderFees.moldFees?.rules || []
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

export function computePinEstimate(vuexState, twoColData) {
  // Read selections safely
  const steps = Array.isArray(vuexState?.quote?.quote) ? vuexState.quote.quote : []
  const getSelectedSid = (title) => (steps.find(s => s.title === title)?.selected || null)
  const productionSid = getSelectedSid('Production')
  const platingSid = getSelectedSid('Plating')
  const sizeSid = getSelectedSid('Sizing')
  const backingSid = getSelectedSid('Backing')
  const packagingSid = getSelectedSid('Packaging')

  // If no production method is selected, return zero estimate
  if (!productionSid) {
    return {
      perUnit: 0,
      total: 0,
      breakdown: {},
      confidence: 'none',
      notes: ['Select production method to see estimate']
    }
  }

  const rawQuantity = twoColData?.quantity || '100'
  const quantityParsed = rawQuantity === '1000+' ? 1000 : Number.parseInt(rawQuantity, 10)
  const { tierQuantity, isBelowMinimum } = coerceQuantityToTier(quantityParsed)

  // Resolve inputs
  const processKey = resolveProcessKeyFromSid(productionSid)
  const sizeInches = resolveSizeInchesFromSid(sizeSid)

  // Determine base per-unit with fallbacks for "starting at"
  let resolvedProcess = processKey
  if (!resolvedProcess) {
    // cheapest process fallback: pick first key by explicit priority
    const priority = ['dieStruck', 'softEnamel', 'silkScreen', 'hardEnamel', 'offsetPrinted']
    resolvedProcess = priority.find(p => baseMatrices.processes?.[p]) || null
  }

  let resolvedSize = sizeInches
  if (typeof resolvedSize !== 'number') {
    const smallest = (meta.uiExposedSizes || meta.supportedSizes || []).sort((a, b) => a - b)[0]
    resolvedSize = smallest
  }

  const basePerUnit = getBasePerUnit(resolvedProcess, resolvedSize, tierQuantity)

  // If still missing base price, return minimal safe response
  if (basePerUnit == null) {
    return {
      perUnit: null,
      total: null,
      breakdown: {},
      confidence: 'unknown',
      notes: ['Pricing data unavailable for selection']
    }
  }

  const { platingPerUnit, backingPerUnit, packagingPerUnit } = getPerUnitSurcharges(platingSid, backingSid, packagingSid)
  const perUnit = roundHalfUp(basePerUnit + platingPerUnit + backingPerUnit + packagingPerUnit, meta.rounding?.perUnit || 2)

  // Order-level fees
  const moldFee = computeMoldFee(resolvedSize, quantityParsed)
  // setupFeePerOrder is stored in dollars in base-matrices.json
  const setupFee = (resolvedProcess === 'offsetPrinted') ? safeNumber(baseMatrices.processes?.offsetPrinted?.setupFeePerOrder || 0, 0) : 0

  const total = roundHalfUp(perUnit * quantityParsed + moldFee + setupFee, meta.rounding?.total || 2)

  const breakdown = {
    process: resolvedProcess,
    sizeInches: resolvedSize,
    tierQuantity,
    quantity: quantityParsed,
    basePerUnit,
    platingPerUnit,
    backingPerUnit,
    packagingPerUnit,
    moldFee,
    setupFee
  }

  const confidence = (!processKey || !sizeInches) ? 'starting_at' : 'exact'
  const notes = []
  if (isBelowMinimum) notes.push('Minimum pricing tier is 100 units; smaller runs priced at 100-tier.')

  return { perUnit, total, breakdown, confidence, notes }
}


