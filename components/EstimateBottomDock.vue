<template>
  <div class="lg:hidden fixed inset-x-0 bottom-0 z-40">
    <div class="mx-4 mb-4 rounded-lg border border-gray-200 bg-white shadow-lg">
      <div class="p-3 flex items-center justify-between">
        <div>
          <p class="text-xs text-gray-500">Estimated Total</p>
          <p class="text-xl font-semibold text-gray-900">{{ currency(animatedTotal) }}</p>
          <p v-if="isStarting" class="text-xs text-amber-600">Starting at</p>
          <p v-if="isNone" class="text-xs text-gray-500">Select production method</p>
        </div>
        <button class="text-sm text-blue-600 hover:text-blue-500" @click="expanded = !expanded">
          <span v-if="expanded">Hide</span><span v-else>Details</span> →
        </button>
      </div>
      <div v-show="expanded" class="px-3 pb-3">
        <dl class="space-y-1 text-sm">
          <div class="flex justify-between"><dt class="text-gray-600">Per unit</dt><dd class="text-gray-900">{{ currency(perUnit) }}</dd></div>
          <div class="flex justify-between" v-if="breakdown.moldFee"><dt class="text-gray-600">Mold fee</dt><dd class="text-gray-900">{{ currency(breakdown.moldFee) }}</dd></div>
          <div class="flex justify-between" v-if="breakdown.setupFee"><dt class="text-gray-600">Setup fee</dt><dd class="text-gray-900">{{ currency(breakdown.setupFee) }}</dd></div>
        </dl>
      </div>
    </div>
  </div>
  <div class="h-24 lg:hidden" />
  <!-- spacer -->
</template>

<script>
export default {
  name: 'EstimateBottomDock',
  props: {
    estimate: {
      type: Object,
      default: () => ({ perUnit: null, total: null, breakdown: {}, confidence: 'unknown', notes: [] })
    }
  },
  data () {
    return { 
      expanded: false,
      animatedTotal: 0,
      animationId: null
    }
  },
  computed: {
    perUnit () { return this.estimate?.perUnit ?? 0 },
    total () { return this.estimate?.total ?? 0 },
    breakdown () { return this.estimate?.breakdown || {} },
    isStarting () { return this.estimate?.confidence === 'starting_at' },
    isNone () { return this.estimate?.confidence === 'none' }
  },
  watch: {
    total (newVal, oldVal) {
      this.animateToValue(newVal)
    }
  },
  mounted () {
    this.animatedTotal = this.total
  },
  methods: {
    currency (val) {
      if (typeof val !== 'number') return '$0.00'
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)
    },
    animateToValue (targetValue) {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
      }
      
      const startValue = this.animatedTotal
      const difference = targetValue - startValue
      const duration = 800 // milliseconds
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Ease out cubic for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        this.animatedTotal = startValue + (difference * easeOut)
        
        if (progress < 1) {
          this.animationId = requestAnimationFrame(animate)
        } else {
          this.animatedTotal = targetValue
          this.animationId = null
        }
      }
      
      this.animationId = requestAnimationFrame(animate)
    }
  }
}
</script>


