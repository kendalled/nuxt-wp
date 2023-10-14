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
      masterPrices: [
        {
          title: 'No Color',
          pricing: [
            {
              title: '1.50\'\'',
              data: [
                '$4.85',
                '$2.96',
                '$2.50',
                '$2.44',
                '$2.40',
                '$2.35'
              ]
            },
            {
              title: '1.75\'\'',
              data: [
                '$5.35',
                '$3.22',
                '$2.80',
                '$2.73',
                '$2.70',
                '$2.64'
              ]
            },
            {
              title: '2.0\'\'',
              data: [
                '$5.80',
                '$3.52',
                '$3.06',
                '$2.97',
                '$2.94',
                '$2.88'
              ]
            },
            {
              title: '2.25\'\'',
              data: [
                '$6.85',
                '$4.37',
                '$3.69',
                '$3.49',
                '$3.42',
                '$3.37'
              ]
            },
            {
              title: '2.5\'\'',
              data: [
                '$7.26',
                '$4.95',
                '$3.95',
                '$3.91',
                '$3.75',
                '$3.70'
              ]
            },
            {
              title: '2.75\'\'',
              data: [
                '$8.29',
                '$5.66',
                '$5.10',
                '$4.88',
                '$4.66',
                '$4.61'
              ]
            },
            {
              title: '3.0\'\'',
              data: [
                '$9.19',
                '$6.37',
                '$6.25',
                '$5.86',
                '$5.53',
                '$5.48'
              ]
            }
          ]
        },
        {
          title: 'Both Sides',
          pricing: [
            {
              title: '1.50\'\'',
              data: [
                '$5.58',
                '$3.39',
                '$3.00',
                '$2.93',
                '$2.85',
                '$2.80'
              ]
            },
            {
              title: '1.75\'\'',
              data: [
                '$6.32',
                '$3.85',
                '$3.46',
                '$3.42',
                '$3.37',
                '$3.32'
              ]
            },
            {
              title: '2.0\'\'',
              data: [
                '$7.05',
                '$4.29',
                '$3.97',
                '$3.92',
                '$3.87',
                '$3.82'
              ]
            },
            {
              title: '2.25\'\'',
              data: [
                '$7.67',
                '$4.85',
                '$4.51',
                '$4.45',
                '$4.38',
                '$4.33'
              ]
            },
            {
              title: '2.5\'\'',
              data: [
                '$8.61',
                '$5.75',
                '$5.41',
                '$5.29',
                '$5.28',
                '$5.23'
              ]
            },
            {
              title: '2.75\'\'',
              data: [
                '$9.51',
                '$6.32',
                '$6.00',
                '$5.77',
                '$5.62',
                '$5.57'
              ]
            },
            {
              title: '3.0\'\'',
              data: [
                '$10.56',
                '$6.88',
                '$6.59',
                '$6.22',
                '$5.98',
                '$5.93'
              ]
            }
          ]
        },
        {
          title: 'One Side',
          pricing: [
            {
              title: '1.50\'\'',
              data: [
                '$5.25',
                '$3.17',
                '$2.73',
                '$2.68',
                '$2.63',
                '$2.58'
              ]
            },
            {
              title: '1.75\'\'',
              data: [
                '$5.83',
                '$3.49',
                '$3.13',
                '$3.07',
                '$3.03',
                '$2.97'
              ]
            },
            {
              title: '2.0\'\'',
              data: [
                '$6.40',
                '$3.93',
                '$3.54',
                '$3.49',
                '$3.40',
                '$3.37'
              ]
            },
            {
              title: '2.25\'\'',
              data: [
                '$7.22',
                '$4.63',
                '$4.21',
                '$4.18',
                '$4.12',
                '$4.08'
              ]
            },
            {
              title: '2.5\'\'',
              data: [
                '$8.24',
                '$5.66',
                '$5.20',
                '$4.70',
                '$4.45',
                '$4.33'
              ]
            },
            {
              title: '2.75\'\'',
              data: [
                '$8.97',
                '$6.11',
                '$5.78',
                '$5.41',
                '$5.15',
                '$5.10'
              ]
            },
            {
              title: '3.0\'\'',
              data: [
                '$9.95',
                '$6.45',
                '$6.34',
                '$6.09',
                '$5.90',
                '$5.85'
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
