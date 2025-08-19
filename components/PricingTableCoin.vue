<template>
  <div class="relative flex flex-col max-w-screen-xl mx-auto">
    <PricingTabs :choices="choices" @selected="changePrices" />
    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Size &amp; qty
              </th>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                50
              </th>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                100
              </th>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                300
              </th>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                500
              </th>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                1000
              </th>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                2000
              </th>
              <!-- <th class="px-6 py-3 border-b border-gray-200 bg-gray-50" /> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(price, j) in priceList" :key="j" :class="[j % 2 === 0 ? 'bg-white' : 'bg-gray-50']">
              <td class="w-32 px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-nowrap">
                {{ price.title }}
              </td>
              <td v-for="data in price.data" :key="data" class="w-32 px-6 py-4 text-sm leading-5 text-gray-500 whitespace-nowrap">
                {{ data }}
              </td>
              <!-- <td class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-nowrap">
                <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import PricingTabs from '~/components/PricingTabs'
import baseMatrices from '~/assets/pricing/coins/base-matrices.json'
export default {
  name: 'PricingTableCoin',
  components: {
    PricingTabs
  },
  data () {
    return {
      choices: [
        'No Color',
        'Both Sides',
        'One Side'
      ],
      priceSet: 0,
      displaySizes: ['1.5', '1.75', '2.0', '2.25', '2.5', '2.75', '3.0'],
      displayTiers: [50, 100, 300, 500, 1000, 2000]
    }
  },
  computed: {
    tierIndices () {
      const tiers = baseMatrices.quantityTiers || []
      return this.displayTiers.map(t => tiers.indexOf(t)).filter(i => i >= 0)
    },
    headerTiers () {
      return this.displayTiers
    },
    colorKey () {
      return this.priceSet === 0 ? 'no-color' : this.priceSet === 1 ? 'both-sides' : 'one-side'
    },
    priceList () {
      const table = baseMatrices.colorOptions?.[this.colorKey] || {}
      const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
      return this.displaySizes
        .filter(sz => Object.prototype.hasOwnProperty.call(table, sz))
        .map(sz => {
          const row = table[sz]
          const cells = this.tierIndices.map(i => nf.format(row[i]))
          return { title: `${parseFloat(sz).toFixed(2).replace(/\.00$/, '')}''`, data: cells }
        })
    }
  },
  methods: {
    changePrices (val) {
      this.priceSet = val
    }
  }
}
</script>
