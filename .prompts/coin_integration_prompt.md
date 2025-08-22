# Coin Pricing Integration Prompt

## Objective
Integrate coin pricing calculations into the existing price estimator system so that the EstimateSidebar.vue and EstimateBottomDock.vue components work seamlessly with coin quotes, matching the existing pin pricing architecture.

## Current Architecture Analysis
The codebase has a well-established pricing system in `/utils/pricing/pins.js` that follows this pattern:
```javascript
basePrice + surcharges + orderFees = total
```

Key components:
- **EstimateSidebar.vue** & **EstimateBottomDock.vue**: Product-agnostic estimation displays
- **Pin pricing data structure**: `/assets/pricing/pins/` with base-matrices.json, surcharges.json, meta.json, order-fees.json
- **Money utilities**: `/utils/pricing/money.js` for currency formatting and rounding
- **Existing coin store**: `/store/coinQuote.js` manages coin selections

## Implementation Requirements

### 1. Create Coin Pricing Utility (`/utils/pricing/coins.js`)
Create a coin pricing calculation system that mirrors the pin system structure with:
- `computeCoinEstimate(coinQuote)` function (equivalent to `computePinEstimate`)
- Quantity tier interpolation (same logic as pins)
- Base pricing lookup by size, color option, and quantity
- Surcharge calculations for plating, add-ons, and packaging
- Integration with existing money utilities

### 2. Create Coin Pricing Data Structure (`/assets/pricing/coins/`)

#### **base-matrices.json**
Structure the three pricing tables from coin_pricing.md:
```json
{
  "no-color": {
    "1.5": [5.32, 3.27, 3.01, 2.80, 2.74, 2.68, 2.57, 2.46, 2.29],
    "1.75": [6.03, 3.60, 3.28, 3.10, 3.04, 2.98, 2.92, 2.84, 2.79],
    // ... all sizes
  },
  "one-side": {
    "1.5": [5.76, 3.56, 3.26, 3.04, 2.98, 2.92, 2.82, 2.65, 2.57],
    // ... all sizes
  },
  "both-sides": {
    "1.5": [6.20, 3.71, 3.39, 3.28, 3.23, 3.12, 2.90, 2.68, 2.46],
    // ... all sizes
  }
}
```

#### **surcharges.json**
```json
{
  "plating": {
    "antique-gold": { "type": "per-coin", "cost": 0.60 },
    "antique-copper": { "type": "per-coin", "cost": 0.30 },
    "antique-silver": { "type": "per-coin", "cost": 0.35 },
    "dual-plating": { "type": "per-side-per-coin", "cost": 0.70 }
  },
  "addons": {
    "edge-numbering": { "type": "per-coin", "cost": 0.65 },
    "sequential-numbering": { "type": "per-side", "cost": 0.25 },
    "cutouts": { "type": "per-cutout", "cost": 0.15 },
    "epoxy-dome": { "type": "per-side", "cost": 0.35 },
    "offset-print": { "type": "flat-rate", "cost": 100 },
    "glow-in-dark": { "type": "per-side", "cost": 0.25 },
    "silk-screen": { "type": "per-side", "cost": 19 }
  },
  "packaging": {
    "poly-bag": { "type": "per-coin", "cost": 0 },
    "acrylic-case": { "type": "per-coin", "cost": 1.00 },
    "velvet-bag": { "type": "per-coin", "cost": 0.60 },
    "velvet-case": { "type": "per-coin", "cost": 4.00 }
  }
}
```

#### **meta.json**
```json
{
  "quantityTiers": [50, 100, 200, 300, 500, 1000, 2000, 3000, 5000],
  "sizes": ["1.5", "1.75", "2.0", "2.25", "2.5", "2.75", "3.0", "3.25", "3.5", "3.75", "4.0"],
  "colorOptions": {
    "no-color": "no-color",
    "one-side": "one-side", 
    "both-sides": "both-sides"
  },
  "sizeLabels": {
    "1.5": "1.5\"",
    "1.75": "1.75\"",
    // ... etc
  }
}
```

#### **order-fees.json**
```json
{
  "3d-mold": {
    "note": "Use pin mold pricing structure",
    "reference": "pins/order-fees.json"
  }
}
```

### 3. Integration Points

#### **Update EstimateSidebar.vue & EstimateBottomDock.vue**
- Detect product type (pin vs coin) from current route or store state
- Call appropriate pricing function (`computePinEstimate` or `computeCoinEstimate`)
- Display coin-specific breakdown items (plating, color option, add-ons, packaging)

#### **Update store/coinQuote.js**
- Ensure compatibility with the new pricing calculation system
- Map coin quote selections to pricing function parameters

#### **Replace PricingTableCoin.vue**
- Remove hardcoded pricing tables
- Use dynamic pricing from the new coin pricing data structure
- Maintain existing UI but populate with calculated prices

### 4. Calculation Logic Requirements

#### **Base Price Calculation**
1. Determine color option from coin quote (no-color/one-side/both-sides)
2. Get base price matrix for the color option
3. Interpolate between quantity tiers (same method as pins)
4. Look up price by coin size

#### **Surcharge Calculation**
1. **Plating surcharges**: Apply per-coin or per-side-per-coin costs
2. **Add-on surcharges**: Handle different pricing types:
   - Per-coin: multiply by quantity
   - Per-side: multiply by quantity and applicable sides
   - Flat-rate: add once regardless of quantity
   - Per-cutout: multiply by number of cutouts and quantity
3. **Packaging surcharges**: Apply per-coin packaging costs

#### **3D Mold Integration**
- Reference existing pin mold fee structure from `/assets/pricing/pins/order-fees.json`
- Apply same calculation logic as pin 3D molds

#### **Quantity Interpolation**
Use the same interpolation logic as pins:
- Find adjacent quantity tiers
- Calculate proportional pricing between tiers
- Handle edge cases (below minimum, above maximum)

### 5. Testing & Validation

#### **Price Accuracy**
- Verify calculated prices match the source pricing tables exactly
- Test interpolation at various quantities between tiers
- Validate all surcharge calculations

#### **UI Integration**
- Ensure estimate sidebar/dock displays coin pricing breakdown
- Test responsive behavior on mobile (EstimateBottomDock)
- Verify animated price updates work with coin estimates

#### **Edge Cases**
- Handle missing coin selections gracefully
- Test with maximum and minimum quantities
- Validate behavior with multiple add-ons selected

### 6. Data Migration

#### **Pricing Table Updates**
- Remove hardcoded pricing from PricingTableCoin.vue
- Populate tables dynamically from coin pricing data
- Maintain existing quantity tier display (50, 100, 300, 500, 1000, 2000)

## Success Criteria
1. **Functional Integration**: Coin quotes display live pricing in EstimateSidebar/EstimateBottomDock
2. **Price Accuracy**: All calculations match coin_pricing.md data exactly
3. **Consistent Architecture**: Coin pricing follows same patterns as pin pricing
4. **Maintainable Data**: All pricing stored in JSON files, not hardcoded
5. **3D Mold Integration**: 3D mold fees calculated using existing pin structure
6. **Quantity Interpolation**: Smooth pricing between quantity tiers
7. **Complete Add-on Support**: All add-ons from coin_pricing.md implemented

## Implementation Order
1. Create coin pricing data files (base-matrices.json, surcharges.json, meta.json, order-fees.json)
2. Implement `/utils/pricing/coins.js` with `computeCoinEstimate` function
3. Update EstimateSidebar.vue and EstimateBottomDock.vue for coin support
4. Update PricingTableCoin.vue to use dynamic pricing
5. Test integration and validate price accuracy
6. Handle edge cases and error scenarios