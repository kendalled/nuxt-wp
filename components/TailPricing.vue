<template>
  <div class="bg-gray-50">
    <div class="pt-6">
      <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 leading-9 sm:text-4xl sm:leading-10 lg:leading-none">
            Simple, honest pricing.
          </h2>
          <p class="mt-4 text-xl text-gray-500 leading-7">
            We offer low minimums and the fastest production time in the industry.
          </p>
        </div>
      </div>
    </div>
    <div id="pricing-section" class="pb-16 mt-8 bg-gray-800 sm:pb-20 lg:pb-24">
      <div class="relative">
        <div class="absolute inset-0 bg-gray-50 h-1/2" />
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- where it was -->
          <transition
            enter-active-class="transition-opacity duration-200 ease-out"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-150 ease-in"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <PricingTable v-show="!isCoin" />
          </transition>
          <transition
            enter-active-class="transition-opacity duration-200 ease-out"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-150 ease-in"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <PricingTableCoin v-if="isCoin" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PricingTable from '~/components/PricingTable'
import PricingTableCoin from '~/components/PricingTableCoin'
export default {
  name: 'TailPricing',
  components: {
    PricingTable,
    PricingTableCoin
  },
  props: {
    productNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentPage: 0
    }
  },
  computed: {
    isCoin () {
      return (this.productNum === 1)
    }
  }
}
</script>
