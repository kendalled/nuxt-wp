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
                100
              </th>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                200
              </th>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                300
              </th>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                500
              </th>
              <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                750
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
      masterPrices: [
        {
          title: 'Die Struck',
          pricing: [
            {
              title: '0.75\'\'',
              data: [
                '$2.54',
                '$2.00',
                '$1.46',
                '$1.22',
                '$1.11',
                '$1.06',
                '$0.95'
              ]
            },
            {
              title: '1.00\'\'',
              data: [
                '$2.61',
                '$2.08',
                '$1.54',
                '$1.26',
                '$1.16',
                '$1.09',
                '$0.97'
              ]
            },
            {
              title: '1.25\'\'',
              data: [
                '$2.68',
                '$2.22',
                '$1.65',
                '$1.32',
                '$1.20',
                '$1.12',
                '$1.03'
              ]
            },
            {
              title: '1.50\'\'',
              data: [
                '$2.85',
                '$2.42',
                '$1.94',
                '$1.43',
                '$1.30',
                '$1.23',
                '$1.10'
              ]
            },
            {
              title: '1.75\'\'',
              data: [
                '$3.17',
                '$2.67',
                '$2.19',
                '$1.70',
                '$1.56',
                '$1.50',
                '$1.40'
              ]
            },
            {
              title: '2.00\'\'',
              data: [
                '$3.37',
                '$2.88',
                '$2.39',
                '$1.89',
                '$1.76',
                '$1.68',
                '$1.58'
              ]
            }
          ]
        },
        {
          title: 'Soft Enamel',
          pricing: [
            {
              title: '0.75\'\'',
              data: [
                '$2.55',
                '$2.01',
                '$1.47',
                '$1.23',
                '$1.12',
                '$1.07',
                '$0.96'
              ]
            },
            {
              title: '1.00\'\'',
              data: [
                '$2.62',
                '$2.09',
                '$1.55',
                '$1.27',
                '$1.17',
                '$1.10',
                '$0.98'
              ]
            },
            {
              title: '1.25\'\'',
              data: [
                '$2.69',
                '$2.23',
                '$1.66',
                '$1.33',
                '$1.21',
                '$1.13',
                '$1.04'
              ]
            },
            {
              title: '1.50\'\'',
              data: [
                '$2.86',
                '$2.43',
                '$1.95',
                '$1.44',
                '$1.31',
                '$1.24',
                '$1.11'
              ]
            },
            {
              title: '1.75\'\'',
              data: [
                '$3.18',
                '$2.68',
                '$2.20',
                '$1.71',
                '$1.57',
                '$1.51',
                '$1.41'
              ]
            },
            {
              title: '2.00\'\'',
              data: [
                '$3.38',
                '$2.89',
                '$2.40',
                '$1.90',
                '$1.77',
                '$1.69',
                '$1.59'
              ]
            }
          ]
        },
        {
          title: 'Silk Screen',
          pricing: [
            {
              title: '0.75\'\'',
              data: [
                '$2.53',
                '$1.99',
                '$1.44',
                '$1.21',
                '$1.08',
                '$1.02',
                '$0.91'
              ]
            },
            {
              title: '1.00\'\'',
              data: [
                '$2.55',
                '$2.05',
                '$1.52',
                '$1.25',
                '$1.11',
                '$1.06',
                '$0.95'
              ]
            },
            {
              title: '1.25\'\'',
              data: [
                '$2.62',
                '$2.18',
                '$1.63',
                '$1.31',
                '$1.16',
                '$1.08',
                '$0.99'
              ]
            },
            {
              title: '1.50\'\'',
              data: [
                '$2.78',
                '$2.34',
                '$1.90',
                '$1.41',
                '$1.24',
                '$1.18',
                '$1.05'
              ]
            },
            {
              title: '1.75\'\'',
              data: [
                '$3.16',
                '$2.64',
                '$2.15',
                '$1.69',
                '$1.51',
                '$1.44',
                '$1.39'
              ]
            },
            {
              title: '2.00\'\'',
              data: [
                '$3.31',
                '$2.79',
                '$2.30',
                '$1.83',
                '$1.70',
                '$1.64',
                '$1.51'
              ]
            }
          ]
        },
        {
          title: 'Hard Enamel',
          pricing: [
            {
              title: '0.75\'\'',
              data: [
                '$2.66',
                '$2.11',
                '$1.55',
                '$1.28',
                '$1.19',
                '$1.11',
                '$1.04'
              ]
            },
            {
              title: '1.00\'\'',
              data: [
                '$2.69',
                '$2.17',
                '$1.66',
                '$1.36',
                '$1.23',
                '$1.19',
                '$1.14'
              ]
            },
            {
              title: '1.25\'\'',
              data: [
                '$2.80',
                '$2.26',
                '$1.75',
                '$1.43',
                '$1.30',
                '$1.23',
                '$1.19'
              ]
            },
            {
              title: '1.50\'\'',
              data: [
                '$3.05',
                '$2.53',
                '$2.00',
                '$1.53',
                '$1.43',
                '$1.38',
                '$1.30'
              ]
            },
            {
              title: '1.75\'\'',
              data: [
                '$3.30',
                '$2.73',
                '$2.33',
                '$1.83',
                '$1.73',
                '$1.65',
                '$1.59'
              ]
            },
            {
              title: '2.00\'\'',
              data: [
                '$3.57',
                '$3.07',
                '$2.58',
                '$2.09',
                '$1.99',
                '$1.91',
                '$1.85'
              ]
            }
          ]
        }
      ],
      priceSet: 0
    }
  },
  computed: {
    priceList () {
      return this.masterPrices[this.priceSet].pricing
    }
  },
  methods: {
    changePrices (val) {
      this.priceSet = val
    }
  }
}
</script>
