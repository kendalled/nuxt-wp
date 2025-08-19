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
              <th
                v-for="tier in headerTiers"
                :key="tier"
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                {{ tier }}
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
import baseMatrices from '~/assets/pricing/pins/base-matrices.json'
export default {
  name: 'PricingTable',
  components: {
    PricingTabs
  },
  data () {
    return {
      choices: [
        'Die Struck',
        'Soft Enamel',
        'Silk Screen',
        'Hard Enamel'
      ],
      priceSet: 0
    }
  },
  computed: {
    headerTiers () {
      return baseMatrices.quantityTiers || []
    },
    headerIndices () {
      const tiers = baseMatrices.quantityTiers || []
      return this.headerTiers.map(t => tiers.indexOf(t)).filter(i => i >= 0)
    },
    processKey () {
      return this.priceSet === 0 ? 'dieStruck' : this.priceSet === 1 ? 'softEnamel' : this.priceSet === 2 ? 'silkScreen' : 'hardEnamel'
    },
    displaySizes () {
      return (baseMatrices.sizesInches || []).map(n => Number(n))
    },
    priceList () {
      const process = baseMatrices.processes?.[this.processKey] || {}
      const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
      return this.displaySizes
        .filter(sz => {
          const key = Number(sz).toFixed(2)
          return Object.prototype.hasOwnProperty.call(process, key)
        })
        .map(sz => {
          const key = Number(sz).toFixed(2)
          const row = process[key]
          const cells = this.headerIndices.map(i => nf.format(row[i]))
          const title = `${Number(sz).toFixed(2).replace(/\.00$/, '')}''`
          return { title, data: cells }
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
