import assert from 'node:assert/strict'
import test from 'node:test'
import { computePinEstimate } from '../utils/pricing/pins.js'
import meta from '../assets/pricing/pins/meta.json' with { type: 'json' }

function buildState({ productionSid = null, platingSid = null, sizeSid = null, backingSid = null, packagingSid = null } = {}) {
  return {
    quote: {
      quote: [
        { title: 'Production', selected: productionSid },
        { title: 'Plating', selected: platingSid },
        { title: 'Sizing', selected: sizeSid },
        { title: 'Backing', selected: backingSid },
        { title: 'Packaging', selected: packagingSid }
      ]
    }
  }
}

function twoCol(quantity) {
  return { quantity }
}

// representative parity cases
const tiers = meta.quantityTiers
const sizes = meta.uiExposedSizes
const processes = ['dieStruck', 'softEnamel', 'silkScreen', 'hardEnamel']
const processToSid = Object.fromEntries(Object.entries(meta.mappings.productionSidToProcessKey).map(([sid, key]) => [key, sid]))
const sizeToSid = Object.fromEntries(Object.entries(meta.mappings.sizeSidToInches).map(([sid, inch]) => [inch, sid]))

for (const process of processes) {
  for (const size of sizes.slice(0, 3)) {
    for (const tier of [tiers[0], tiers[3], tiers[tiers.length - 1]]) {
      const name = `${process} size ${size} tier ${tier}`
      test(`base parity: ${name}`, () => {
        const state = buildState({ productionSid: processToSid[process], sizeSid: sizeToSid[size] })
        const result = computePinEstimate(state, twoCol(tier))
        assert.equal(result.confidence, 'exact')
        assert.ok(result.perUnit > 0)
        assert.ok(result.total > 0)
        assert.equal(result.perUnit, result.breakdown.basePerUnit)
      })
    }
  }
}

test('quantity below minimum rounds up to 100-tier', () => {
  const state = buildState({ productionSid: processToSid.dieStruck, sizeSid: sizeToSid[0.75] })
  const result = computePinEstimate(state, twoCol(50))
  assert.equal(result.breakdown.tierQuantity, 100)
})

test('non-tier quantity floors to the correct tier (e.g., 350 -> 300)', () => {
  const state = buildState({ productionSid: processToSid.dieStruck, sizeSid: sizeToSid[1.0] })
  const result = computePinEstimate(state, twoCol(350))
  assert.equal(result.breakdown.tierQuantity, 300)
})

test('large quantity uses highest available tier (e.g., 3000 -> 2000 tier)', () => {
  const state = buildState({ productionSid: processToSid.softEnamel, sizeSid: sizeToSid[1.0] })
  const result = computePinEstimate(state, twoCol(3000))
  assert.equal(result.breakdown.tierQuantity, meta.quantityTiers[meta.quantityTiers.length - 1])
})

test('starting at when size missing', () => {
  const state = buildState({ productionSid: processToSid.softEnamel })
  const result = computePinEstimate(state, twoCol(100))
  assert.equal(result.confidence, 'starting_at')
  assert.ok(result.perUnit > 0)
})

test('offset printed adds setup fee once', () => {
  const state = buildState({ productionSid: processToSid.offsetPrinted, sizeSid: sizeToSid[1.0] })
  const result200 = computePinEstimate(state, twoCol(200))
  const result500 = computePinEstimate(state, twoCol(500))
  assert.ok(result200.breakdown.setupFee > 0)
  assert.ok(result500.breakdown.setupFee > 0)
  assert.equal(result200.breakdown.setupFee, result500.breakdown.setupFee)
})


