# Custom Quantity Input Replacement Plan

## Overview
Replace the existing quantity dropdown with a direct number input field that accepts any custom quantity above minimum thresholds (50 for coins, 100 for pins) and calculates pricing using the appropriate tier breakpoints from the pricing tables.

## Current System Analysis

**Existing Quantity System:**
- Fixed dropdown options: 100, 200, 300, 400, 500, 600, 700, 800, 900, Custom (1000+)
- Custom quantity system already partially implemented
- Pricing tiers defined in `assets/pricing/pins/base-matrices.json`
- Quantity tiers: [100, 200, 300, 500, 750, 1000, 2000]
- Current custom implementation uses 1000+ tier for all custom quantities

**Current Implementation Status:**
- `TwoColForm.vue` has custom quantity UI already implemented
- `QuoteWrapper.vue` has custom quantity handling logic
- Custom quantities use fixed 1000-tier pricing
- Validation set to minimum 1001

## Revised Implementation Plan

### Phase 1: Replace Dropdown with Direct Input

**1.1 Remove CustomSelect Component**
- Replace `CustomSelect` with direct number input field
- Remove dependency on predefined quantity options
- Eliminate dropdown interface entirely

**1.2 Create New Quantity Input Component**
- Single number input field for all quantities
- Dynamic minimum based on product type:
  - Pins/Keychains: minimum 100
  - Coins: minimum 50
- Real-time validation and pricing updates
- Clear, accessible labeling

**1.3 Update UI Layout**
```vue
<!-- Replace current dropdown + conditional input with: -->
<div class="quantity-input-container">
  <label for="quantity">Quantity</label>
  <input 
    id="quantity" 
    v-model.number="quantity"
    type="number" 
    :min="minimumQuantity"
    :placeholder="`Minimum ${minimumQuantity}`"
  />
  <p class="help-text">Minimum {{ minimumQuantity }} pieces</p>
</div>
```

### Phase 2: Dynamic Minimum Quantities

**2.1 Product-Based Minimums**
- Pins: 100 minimum
- Coins: 50 minimum  
- Keychains: 100 minimum
- Dynamic validation based on selected product type

**2.2 Update Validation Logic**
```javascript
computed: {
  minimumQuantity() {
    return this.productType === 'coins' ? 50 : 100;
  },
  quantityError() {
    if (!this.quantity) return 'Quantity is required';
    if (this.quantity < this.minimumQuantity) {
      return `Minimum quantity is ${this.minimumQuantity}`;
    }
    return null;
  }
}
```

### Phase 3: Smart Pricing Tier Logic

**3.1 Tier-Based Pricing Calculation**
- Use actual breakpoints from `base-matrices.json`
- Find the appropriate tier for any given quantity

**3.2 Pricing Logic Enhancement**
```javascript
function findPricingTier(quantity, tiers = [100, 200, 300, 500, 750, 1000, 2000]) {
  // Find the highest tier that doesn't exceed the quantity
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (quantity >= tiers[i]) {
      return tiers[i];
    }
  }
  // If below all tiers, use the lowest tier
  return tiers[0];
}

function calculatePrice(quantity, basePrices) {
  const tier = findPricingTier(quantity);
  const tierIndex = tiers.indexOf(tier);
  const unitPrice = basePrices[tierIndex];
  return {
    tier,
    unitPrice,
    total: quantity * unitPrice
  };
}
```

**3.3 Examples of New Pricing Logic**
- Quantity 150 → Uses 100-tier pricing
- Quantity 550 → Uses 500-tier pricing  
- Quantity 1500 → Uses 1000-tier pricing
- Quantity 3000 → Uses 2000-tier pricing (highest available)
- Quantity 75 (coins) → Uses 100-tier pricing (lowest available)

**4.1 Remove Existing Custom Quantity Logic**
- Simplify `TwoColForm.vue` data structure
- Remove `isCustomQuantity`, `customQuantity` fields  
- Remove conditional custom input UI
- Clean up validation logic

**4.2 Update Data Model**
- Single `quantity` field (number instead of string)
- Product type awareness for minimums
- Simplified validation logic

### Phase 5: Pricing System Integration

**5.1 Update Pricing Calculation**
- Modify `utils/pricing/pins.js` to use tier-based logic
- Remove fixed "1000+" tier assumption
- Implement dynamic tier finding algorithm

**5.2 Support Multiple Product Types**
- Extend pricing logic for coins (50+ minimum)
- Maintain existing pin pricing (100+ minimum)
- Add keychain support if needed

### Phase 6: Estimator Updates

**6.1 Real-time Pricing Display**
- Update `EstimateBottomDock.vue` for any quantity
- Update `EstimateSidebar.vue` breakdown display
- Show which pricing tier is being used

**6.2 Enhanced Breakdown Display**
```javascript
// Example breakdown display
{
  quantity: 350,
  pricingTier: 300,
  perUnit: 1.54,
  total: 539.00,
  message: "Pricing based on 300+ tier"
}
```

## Technical Implementation Details

### New Component Structure
```
TwoColForm.vue
└── Quantity Input
    ├── Direct number input
    ├── Dynamic minimum validation
    ├── Real-time pricing updates
    └── Tier-based calculation
```

### Updated Data Flow
1. User enters any quantity directly
2. Validation runs (minimum based on product type)
3. Pricing system finds appropriate tier
4. Unit price calculated from tier
5. Total = quantity × tier_unit_price
6. Estimator updates with breakdown
7. Form submission includes quantity

### Validation Rules
- **Pins/Keychains:** Minimum 100
- **Coins:** Minimum 50
- **Maximum:** Reasonable business limit (e.g., 100,000)
- **Type:** Positive integers only
- **Real-time:** Validate on input change

### Enhanced Pricing Logic
```javascript
function calculatePricing(quantity, productType, basePrices) {
  const minimums = { pins: 100, coins: 50, keychains: 100 };
  const tiers = [100, 200, 300, 500, 750, 1000, 2000];
  
  // Validate minimum
  if (quantity < minimums[productType]) {
    throw new Error(`Minimum ${minimums[productType]} for ${productType}`);
  }
  
  // Find pricing tier
  const tier = findPricingTier(quantity, tiers);
  const tierIndex = tiers.indexOf(tier);
  const unitPrice = basePrices[tierIndex];
  
  return {
    quantity,
    tier,
    unitPrice,
    total: quantity * unitPrice,
    savings: quantity > tier ? calculateSavings(quantity, tier, unitPrice) : 0
  };
}
```

## User Experience Flow

**Simplified Flow:**
1. User enters desired quantity directly
2. System validates minimum requirements
3. Real-time pricing updates as user types
4. Clear indication of pricing tier being used
5. Submit quote with exact quantity

**Benefits:**
- No dropdown limitations
- Immediate pricing feedback
- Transparent tier-based pricing
- Better mobile experience
- Reduced clicks/interactions

## Error Handling

**Validation Errors:**
- Below minimum: "Minimum quantity for [product] is [min]"
- Non-numeric: "Please enter a valid number"
- Empty field: "Quantity is required"
- Too large: "Maximum quantity is 100,000"

**Pricing Display:**
- Show current tier: "Pricing based on 300+ tier"
- Highlight savings: "Save $X by ordering Y more"
- Clear cost breakdown in estimator

## Implementation Checklist

### Phase 1: UI Replacement
- [ ] Replace CustomSelect with direct number input
- [ ] Add dynamic minimum validation
- [ ] Update styling to match existing design
- [ ] Add helpful text/labels
- [ ] Test mobile responsiveness

### Phase 2: Data Flow
- [ ] Simplify data structure (remove custom quantity fields)
- [ ] Update validation logic for product-based minimums
- [ ] Clean up unnecessary conditional logic
- [ ] Test data emission to parent components

### Phase 3: Pricing System
- [ ] Implement tier-finding algorithm
- [ ] Update pricing calculation functions
- [ ] Add support for coins (50+ minimum)
- [ ] Test pricing accuracy across all scenarios

### Phase 4: Estimator Integration
- [ ] Update estimator components for new data structure
- [ ] Add tier information to breakdown display
- [ ] Test real-time pricing updates
- [ ] Ensure animation/transition smoothness

### Phase 5: Testing & Polish
- [ ] Unit tests for tier-finding logic
- [ ] Integration tests for pricing accuracy
- [ ] User testing for UX improvements
- [ ] Cross-browser and device testing
- [ ] Performance optimization

## Files to Modify

**Primary Files:**
- `components/TwoColForm.vue` - Replace dropdown with input
- `utils/pricing/pins.js` - Update pricing calculation logic
- `components/QuoteWrapper.vue` - Simplify data handling
- `components/EstimateBottomDock.vue` - Update display logic
- `components/EstimateSidebar.vue` - Add tier breakdown

**Remove/Simplify:**
- `components/CustomSelect.vue` - May no longer be needed
- Custom quantity conditional UI in TwoColForm
- Complex custom quantity validation logic

## Success Criteria

1. **Simplicity:** Single input field for all quantities
2. **Flexibility:** Any quantity above minimums accepted
3. **Transparency:** Clear tier-based pricing display
4. **Accuracy:** Correct pricing calculations for all scenarios
5. **Performance:** Fast, responsive pricing updates
6. **Accessibility:** Clear validation and error messages

## Pricing Examples

**Pins (100+ minimum):**
- 75 → Error: "Minimum quantity for pins is 100"
- 150 → Uses 100-tier pricing
- 350 → Uses 300-tier pricing
- 1200 → Uses 1000-tier pricing

**Coins (50+ minimum):**
- 25 → Error: "Minimum quantity for coins is 50"
- 75 → Uses 100-tier pricing (lowest available)
- 250 → Uses 200-tier pricing
- 1500 → Uses 1000-tier pricing

## Future Enhancements

- **Smart Suggestions:** "Order 50 more to reach next tier and save $X"
- **Bulk Discounts:** Additional discounts for very large orders
- **Price History:** Show price per unit across different quantities
- **Favorites:** Save commonly ordered quantities