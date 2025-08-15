<template>
  <div class="hidden lg:block fixed bottom-6 right-6 z-40">
    <!-- Show button when estimator is hidden -->
    <button 
      v-if="!isVisible && showButton"
      type="button"
      @click="isVisible = true"
      class="mb-2 px-3 py-2 bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm font-medium flex items-center gap-2"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      Price Estimate
    </button>
    
    <!-- Estimator Panel -->
    <transition
      enter-active-class="transition-all duration-200 ease-out transform-gpu"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-150 ease-in transform-gpu"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-2 scale-95"
      @after-leave="onAfterLeave"
      @before-enter="onBeforeEnter"
    >
      <aside v-show="isVisible" class="w-72 rounded-lg border border-gray-200 bg-white shadow-xl relative">
        <!-- Close button in top right -->
        <button 
          type="button"
          @click="isVisible = false"
          class="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-150"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div class="p-4 border-b border-gray-100">
          <h3 class="text-sm font-medium text-gray-700">Estimated Total</h3>
          <div class="mt-1 flex items-baseline justify-between">
            <p class="text-3xl font-semibold text-gray-900">{{ currency(animatedTotal) }}</p>
            <p class="text-sm text-gray-500">{{ perUnitLabel }}</p>
          </div>
          <p v-if="isStarting" class="mt-1 text-xs text-amber-600">Starting at — selections incomplete</p>
          <p v-if="isNone" class="mt-1 text-xs text-gray-500">Select production method to see pricing</p>
        </div>
        <div class="p-4">
          <button v-if="!isNone" type="button" class="text-sm text-blue-600 hover:text-blue-500" @click="expanded = !expanded">
            <span v-if="expanded">Hide breakdown</span>
            <span v-else>Show breakdown</span>
            <span class="ml-1">→</span>
          </button>
          <dl v-show="expanded && !isNone" class="mt-3 space-y-2 text-sm">
            <div class="flex justify-between" v-if="breakdown.tierQuantity"><dt class="text-gray-600">Tier</dt><dd class="text-gray-900">{{ breakdown.tierQuantity }}+</dd></div>
            <div class="flex justify-between"><dt class="text-gray-600">Base</dt><dd class="text-gray-900">{{ currency(breakdown.basePerUnit) }} /ea</dd></div>
            <div class="flex justify-between" v-if="breakdown.platingPerUnit"><dt class="text-gray-600">Plating</dt><dd class="text-gray-900">+{{ currency(breakdown.platingPerUnit) }} /ea</dd></div>
            <div class="flex justify-between" v-if="breakdown.backingPerUnit"><dt class="text-gray-600">Backing</dt><dd class="text-gray-900">+{{ currency(breakdown.backingPerUnit) }} /ea</dd></div>
            <div class="flex justify-between" v-if="breakdown.packagingPerUnit"><dt class="text-gray-600">Packaging</dt><dd class="text-gray-900">+{{ currency(breakdown.packagingPerUnit) }} /ea</dd></div>
            <div class="flex justify-between" v-if="breakdown.moldFee"><dt class="text-gray-600">Mold fee</dt><dd class="text-gray-900">{{ currency(breakdown.moldFee) }}</dd></div>
            <div class="flex justify-between" v-if="breakdown.setupFee"><dt class="text-gray-600">Setup fee</dt><dd class="text-gray-900">{{ currency(breakdown.setupFee) }}</dd></div>
          </dl>
          <p v-if="notes && notes.length" class="mt-3 text-xs text-gray-500">{{ notes[0] }}</p>
        </div>
      </aside>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'EstimateSidebar',
  props: {
    estimate: {
      type: Object,
      default: () => ({ perUnit: null, total: null, breakdown: {}, confidence: 'unknown', notes: [] })
    }
  },
  data () {
    return { 
      expanded: false,
      isVisible: true,
      showButton: false,
      animatedTotal: 0,
      animationId: null
    }
  },
  computed: {
    perUnit () { return this.estimate?.perUnit ?? 0 },
    total () { return this.estimate?.total ?? 0 },
    breakdown () { return this.estimate?.breakdown || {} },
    notes () { return this.estimate?.notes || [] },
    isStarting () { return this.estimate?.confidence === 'starting_at' },
    isNone () { return this.estimate?.confidence === 'none' },
    perUnitLabel () { return this.perUnit ? `${this.currency(this.perUnit)} /ea` : '' }
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
      const duration = 600 // reduced duration
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Ease out quad for smoother performance
        const easeOut = 1 - Math.pow(1 - progress, 2)
        
        this.animatedTotal = startValue + (difference * easeOut)
        
        if (progress < 1) {
          this.animationId = requestAnimationFrame(animate)
        } else {
          this.animatedTotal = targetValue
          this.animationId = null
        }
      }
      
      this.animationId = requestAnimationFrame(animate)
    },
    onAfterLeave () {
      // Show button after card animation completes
      this.showButton = true
    },
    onBeforeEnter () {
      // Hide button when card starts to appear
      this.showButton = false
    }
  }
}
</script>


