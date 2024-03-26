<template>
  <section ref="qfinal" class="mx-4 sm:mx-0" :class="[margin === 0 ? 'mt-14' : 'mt-8', bg === 0 ? 'bg-gray-100' : 'bg-gray-50']">
    <FloatingBanner message2="Please select an option." message="No choice is selected, please select one to continue." :show="errorNotif" @close="closeNotif" />
    <div id="quote-steps" :class="[bg === 0 ? 'shadow' : 'shadow']" class="relative z-10 mx-auto bg-white rounded-md max-w-7xl">
      <!-- card header -->
      <div class="px-4 py-5 bg-white border-b border-gray-200 sm:px-6 rounded-t-md">
        <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
          <div class="mt-4 ml-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              <span>Step {{ currentPage + 1 }}:</span> {{ pageTitle }}
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              {{ pageDesc }}
            </p>
          </div>
          <!-- :class="[pagesLength === 4 ? 'w-20' : 'w-20']" todo: show on mobile -->
          <div class="flex-shrink-0 hidden mt-4 ml-4 sm:block">
            <p class="w-20 text-sm leading-5 text-right text-gray-700">
              <span class="font-medium">{{ percentDone }}%</span>
              <!-- of
              <span class="font-medium">{{ pagesLength }}</span> -->
            </p>
            <div class="flex items-end justify-start w-full h-6 pl-2">
              <div class="w-full h-2 bg-gray-200 rounded">
                <div class="h-2 bg-green-400 rounded transition-all" :class="[option === 0 ? getPinClasses() : getCoinClasses()]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end card header, start body -->
      <transition-group
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-for="page in categories[option]" v-show="currentPage === page.ind" :key="page.pid" class="radio-wrap">
          <Iradio
            v-if="currentPage === page.ind"
            :current-page="currentPage"
            :view="viewAll"
            :small="isPackaging"
            :choices="page.data"
            :option="page.ind"
            :title="page.title"
            :quote="quote"
            @choice="updateQuote"
          />
        </div>
      </transition-group>
      <!-- end body -->
      <!-- start footer todo: justify-between always -->
      <div class="flex justify-end px-4 py-4 border-t border-gray-200 sm:justify-between sm:px-6">
        <!-- todo: show on mobile -->
        <div class="hidden text-sm leading-9 sm:block">
          <span v-if="isPlating && !viewAll" class="font-medium text-blue-600 transition duration-150 ease-in-out cursor-pointer hover:text-blue-500" @click="viewAll = true">
            Show premium <span class="hidden sm:inline-block"> options </span> →
          </span>
          <span v-if="isPlating && viewAll" class="font-medium text-blue-600 transition duration-150 ease-in-out cursor-pointer hover:text-blue-500" @click="viewAll = false">
            Hide premium <span class="hidden sm:inline-block"> options </span> →
          </span>
          <button v-if="!isPlating" class="font-medium text-blue-600 transition duration-150 ease-in-out focus:outline-none hover:text-blue-500" @click.prevent="showDetails">
            Learn more →
          </button>
        </div>
        <div class="w-auto h-auto">
          <button v-show="currentPage !== 0" class="px-4 py-2 text-sm font-medium text-blue-700 transition duration-150 ease-in-out bg-blue-100 border border-transparent rounded-md hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-200" @click.prevent="lastPage">
            Back
          </button>
          <button :class="[choiceEmpty ? 'text-gray-700 bg-gray-100 hover:bg-gray-50 active:bg-gray-200' : 'text-white bg-blue-600 hover:bg-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:bg-blue-500 active:bg-blue-600']" class="px-4 py-2 ml-2 text-sm font-medium transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm focus:outline-none" @click.prevent="[choiceEmpty ? emitNotif() : nextPage()]">
            Continue
          </button>
        </div>
      </div>
      <!-- end footer -->
    </div>
    <div v-if="hasBorder" class="hidden sm:block sm:mt-3">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>
    <DetailsModal :open="details" :page="currentPage" @close="details = false" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import DetailsModal from '~/components/DetailsModal'
import FloatingBanner from '~/components/FloatingBanner'
import Iradio from '~/components/Iradio'
export default {
  name: 'FinalQuote',
  components: {
    DetailsModal,
    FloatingBanner,
    Iradio
  },
  props: {
    bg: {
      type: Number,
      default: 0
    },
    done: {
      type: Boolean,
      default: false
    },
    margin: {
      type: Number,
      default: 0
    },
    hasBorder: {
      type: Boolean,
      default: false
    },
    option: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      details: false,
      viewAll: true,
      errorNotif: false,
      restorePoint: [
        {
          id: 1,
          sid: 'pl1',
          name: 'Polished Gold',
          src: '/quote/HPGold.png'
        },
        {
          id: 2,
          sid: 'pl2',
          name: 'Polished Silver',
          src: '/quote/HPSilver.png'
        },
        {
          id: 3,
          sid: 'pl3',
          name: 'Polished Copper',
          src: '/quote/HPCopper.png'
        },
        {
          id: 4,
          sid: 'pl4',
          name: 'Polished Nickel',
          src: '/quote/HPNickel.png'
        },
        {
          id: 5,
          sid: 'pl5',
          name: 'Black Metal',
          src: '/quote/BlackMetal.png'
        },
        {
          id: 6,
          sid: 'pl6',
          name: 'Antique Gold',
          src: '/quote/AGold.png'
        },
        {
          id: 7,
          sid: 'pl7',
          name: 'Antique Silver',
          src: '/quote/ASilver.png'
        },
        {
          id: 8,
          sid: 'pl8',
          name: 'Antique Copper',
          src: '/quote/ACopper.png'
        },
        {
          id: 9,
          sid: 'pl9',
          name: 'Dual Plated',
          src: '/quote/DualPlated.png'
        },
        {
          id: 10,
          sid: 'pl10',
          name: 'Color Coated',
          src: '/quote/ColorCoated.png'
        }
      ],
      newPoint: [
        {
          id: 1,
          sid: 'pl1',
          name: 'Polished Gold',
          src: '/quote/HPGold.png'
        },
        {
          id: 2,
          sid: 'pl2',
          name: 'Polished Silver',
          src: '/quote/HPSilver.png'
        },
        {
          id: 3,
          sid: 'pl3',
          name: 'Polished Copper',
          src: '/quote/HPCopper.png'
        },
        {
          id: 4,
          sid: 'pl4',
          name: 'Polished Nickel',
          src: '/quote/HPNickel.png'
        },
        {
          id: 9,
          sid: 'pl9',
          name: 'Dual Plated',
          src: '/quote/DualPlated.png'
        },
        {
          id: 10,
          sid: 'pl10',
          name: 'Color Coated',
          src: '/quote/ColorCoated.png'
        }
      ],
      categories: [
        [
          {
            ind: 0,
            pid: 'p1',
            desc: 'Select from a variety of pin styles, from soft enamel to die struck.',
            title: 'Production',
            pageTitle: 'Production Method',
            data:
          [
            {
              id: 0,
              sid: 'pr0',
              name: 'Die Struck',
              src: '/quote/diestruck.png'
            },
            {
              id: 1,
              sid: 'pr1',
              name: 'Soft Enamel',
              src: '/quote/softenamel.png'
            },
            {
              id: 2,
              sid: 'pr2',
              name: 'Hard Enamel',
              src: '/quote/cloisonne.png'
            },
            {
              id: 3,
              sid: 'pr3',
              name: 'Silk Screen',
              src: '/quote/silkscreen.png'
            },
            {
              id: 4,
              sid: 'pr4',
              name: 'Offset Printed',
              src: '/quote/offset2.png'
            }
          ]
          },
          {
            ind: 1,
            pid: 'p2',
            desc: 'Select from a variety of plating options.',
            title: 'Plating',
            pageTitle: 'Plating Options',
            data:
          [
            {
              id: 1,
              sid: 'pl1',
              name: 'Polished Gold',
              src: '/quote/HPGold.png'
            },
            {
              id: 2,
              sid: 'pl2',
              name: 'Polished Silver',
              src: '/quote/HPSilver.png'
            },
            {
              id: 3,
              sid: 'pl3',
              name: 'Polished Copper',
              src: '/quote/HPCopper.png'
            },
            {
              id: 4,
              sid: 'pl4',
              name: 'Polished Nickel',
              src: '/quote/HPNickel.png'
            },
            {
              id: 5,
              sid: 'pl5',
              name: 'Black Metal',
              src: '/quote/BlackMetal.png'
            },
            {
              id: 6,
              sid: 'pl6',
              name: 'Antique Gold',
              src: '/quote/AGold.png'
            },
            {
              id: 7,
              sid: 'pl7',
              name: 'Antique Silver',
              src: '/quote/ASilver.png'
            },
            {
              id: 8,
              sid: 'pl8',
              name: 'Antique Copper',
              src: '/quote/ACopper.png'
            },
            {
              id: 9,
              sid: 'pl9',
              name: 'Dual Plated',
              src: '/quote/DualPlated.png'
            },
            {
              id: 10,
              sid: 'pl10',
              name: 'Color Coated',
              src: '/quote/ColorCoated.png'
            }
          ]
          },
          {
            ind: 2,
            pid: 'p3',
            desc: 'Select your pin sizing, represented by common items.',
            title: 'Sizing',
            pageTitle: 'Pin Sizing',
            data:
          [
            {
              id: 0,
              sid: 'sz0',
              name: '0.75 inch',
              src: '/sizing/penny.png'
            },
            {
              id: 1,
              sid: 'sz1',
              name: '1.00 inch',
              src: '/sizing/quarter.png'
            },
            {
              id: 2,
              sid: 'sz2',
              name: '1.25 inch',
              src: '/sizing/50centcoin.png'
            },
            {
              id: 3,
              sid: 'sz3',
              name: '1.50 inch',
              src: '/sizing/dollarcoin.png'
            },
            {
              id: 4,
              sid: 'sz4',
              name: '1.75 inch',
              src: '/sizing/golfball.png'
            }
          ]
          },
          {
            ind: 3,
            pid: 'p4',
            desc: 'Select your pin backing, whether it\'s formal or casual.',
            title: 'Backing',
            pageTitle: 'Pin Backing',
            data:
          [
            {
              id: 0,
              sid: 'bk0',
              name: 'Butterfly Clutch',
              src: '/backings/new1.png'
            },
            {
              id: 1,
              sid: 'bk1',
              name: 'Black Rubber',
              src: '/backings/new2.png'
            },
            {
              id: 2,
              sid: 'bk2',
              name: 'Yellow Rubber',
              src: '/backings/new3.png'
            },
            {
              id: 3,
              sid: 'bk3',
              name: 'Jewelry Clutch',
              src: '/backings/new4.png'
            },
            {
              id: 4,
              sid: 'bk4',
              name: 'Deluxe Clutch',
              src: '/backings/new5.png'
            }
          ]
          },
          {
            ind: 4,
            pid: 'p5',
            desc: 'Select your pin packaging, whether it\'s formal or casual.',
            title: 'Packaging',
            pageTitle: 'Packaging Options',
            data:
          [
            {
              id: 0,
              sid: 'pk0',
              name: 'Poly Bag',
              src: '/quote/poly.jpg'
            },
            {
              id: 1,
              sid: 'pk1',
              name: 'Acrylic Case',
              src: '/quote/acryliccase.jpg'
            },
            {
              id: 2,
              sid: 'pk2',
              name: 'Velvet Bag',
              src: '/quote/velvet.jpg'
            },
            {
              id: 3,
              sid: 'pk3',
              name: 'Velvet Case',
              src: '/quote/velvetcase.jpg'
            }
          ]
          }
        ],
        // challenge coins
        [
          {
            ind: 0,
            pid: 'p0',
            desc: 'Select from a variety of challenge coin plating options.',
            title: 'Plating',
            pageTitle: 'Plating Options',
            data:
          [
            {
              id: 1,
              sid: 'pl1',
              name: 'Polished Gold',
              src: '/quote/HPGold.png'
            },
            {
              id: 2,
              sid: 'pl2',
              name: 'Polished Silver',
              src: '/quote/HPSilver.png'
            },
            {
              id: 3,
              sid: 'pl3',
              name: 'Polished Copper',
              src: '/quote/HPCopper.png'
            },
            {
              id: 4,
              sid: 'pl4',
              name: 'Polished Nickel',
              src: '/quote/HPNickel.png'
            },
            {
              id: 5,
              sid: 'pl5',
              name: 'Black Metal',
              src: '/quote/BlackMetal.png'
            },
            {
              id: 6,
              sid: 'pl6',
              name: 'Antique Gold',
              src: '/quote/AGold.png'
            },
            {
              id: 7,
              sid: 'pl7',
              name: 'Antique Silver',
              src: '/quote/ASilver.png'
            },
            {
              id: 8,
              sid: 'pl8',
              name: 'Antique Copper',
              src: '/quote/ACopper.png'
            },
            {
              id: 9,
              sid: 'pl9',
              name: 'Dual Plated',
              src: '/quote/DualPlated.png'
            },
            {
              id: 10,
              sid: 'pl10',
              name: 'Color Coated',
              src: '/quote/ColorCoated.png'
            }
          ]
          },
          {
            ind: 1,
            pid: 'p1',
            desc: 'Choose whether or not you\'d like color on your coin.',
            title: 'Color',
            pageTitle: 'Color Choice',
            data:
          [
            {
              id: 0,
              sid: 'c0',
              name: 'Color Coin',
              src: 'colorCoin.png'
            },
            {
              id: 1,
              sid: 'c1',
              name: 'No Color Coin',
              src: 'noColorCoin.png'
            }
          ]
          },
          {
            ind: 2,
            pid: 'p2',
            desc: 'Select the size of your challenge coin, represented by common items.',
            title: 'Sizing',
            pageTitle: 'Coin Sizing',
            data:
          [
            {
              id: 0,
              sid: 'sz0',
              name: '1.25 inch',
              src: '/sizing/50centcoin.png'
            },
            {
              id: 1,
              sid: 'sz1',
              name: '1.50 inch',
              src: '/sizing/dollarcoin.png'
            },
            {
              id: 2,
              sid: 'sz2',
              name: '1.75 inch',
              src: '/sizing/golfball.png'
            },
            {
              id: 3,
              sid: 'sz3',
              name: '2.00 inch',
              src: '/sizing/sodacan.png'
            },
            {
              id: 4,
              sid: 'sz4',
              name: '2.25 inch',
              src: '/sizing/poolball.png'
            },
            {
              id: 5,
              sid: 'sz5',
              name: '2.50 inch',
              src: '/sizing/tennisball.png'
            },
            {
              id: 6,
              sid: 'sz6',
              name: '2.75 inch',
              src: '/sizing/baseball.png'
            },
            {
              id: 7,
              sid: 'sz7',
              name: '3.00 inch',
              src: '/sizing/hockeypuck.png'
            }
          ]
          },
          {
            ind: 3,
            pid: 'p3',
            desc: 'Select your coin packaging, whether it\'s formal or casual.',
            title: 'Packaging',
            pageTitle: 'Packaging Options',
            data:
          [
            {
              id: 0,
              sid: 'pk0',
              name: 'Poly Bag',
              src: '/quote/poly.jpg'
            },
            {
              id: 1,
              sid: 'pk1',
              name: 'Acrylic Case',
              src: '/quote/acryliccase.jpg'
            },
            {
              id: 2,
              sid: 'pk2',
              name: 'Velvet Bag',
              src: '/quote/velvet.jpg'
            },
            {
              id: 3,
              sid: 'pk3',
              name: 'Velvet Case',
              src: '/quote/velvetcase.jpg'
            }
          ]
          }
        ],
        // keychains
        [
          {
            ind: 0,
            pid: 'p1',
            desc: 'Select from a variety of keychain styles, from soft enamel to die struck.',
            title: 'Production',
            pageTitle: 'Production Method',
            data:
          [
            {
              id: 0,
              sid: 'pr0',
              name: 'Die Struck',
              src: '/quote/diestruck.png'
            },
            {
              id: 1,
              sid: 'pr1',
              name: 'Soft Enamel',
              src: '/quote/softenamel.png'
            },
            {
              id: 2,
              sid: 'pr2',
              name: 'Hard Enamel',
              src: '/quote/cloisonne.png'
            },
            {
              id: 3,
              sid: 'pr3',
              name: 'Silk Screen',
              src: '/quote/silkscreen.png'
            },
            {
              id: 4,
              sid: 'pr4',
              name: 'Offset Printed',
              src: '/quote/offset2.png'
            }
          ]
          },
          {
            ind: 1,
            pid: 'p2',
            desc: 'Select from a variety of plating options.',
            title: 'Plating',
            pageTitle: 'Plating Options',
            data:
          [
            {
              id: 1,
              sid: 'pl1',
              name: 'Polished Gold',
              src: '/quote/HPGold.png'
            },
            {
              id: 2,
              sid: 'pl2',
              name: 'Polished Silver',
              src: '/quote/HPSilver.png'
            },
            {
              id: 3,
              sid: 'pl3',
              name: 'Polished Copper',
              src: '/quote/HPCopper.png'
            },
            {
              id: 4,
              sid: 'pl4',
              name: 'Polished Nickel',
              src: '/quote/HPNickel.png'
            },
            {
              id: 5,
              sid: 'pl5',
              name: 'Black Metal',
              src: '/quote/BlackMetal.png'
            },
            {
              id: 6,
              sid: 'pl6',
              name: 'Antique Gold',
              src: '/quote/AGold.png'
            },
            {
              id: 7,
              sid: 'pl7',
              name: 'Antique Silver',
              src: '/quote/ASilver.png'
            },
            {
              id: 8,
              sid: 'pl8',
              name: 'Antique Copper',
              src: '/quote/ACopper.png'
            },
            {
              id: 9,
              sid: 'pl9',
              name: 'Dual Plated',
              src: '/quote/DualPlated.png'
            },
            {
              id: 10,
              sid: 'pl10',
              name: 'Color Coated',
              src: '/quote/ColorCoated.png'
            }
          ]
          },
          {
            ind: 2,
            pid: 'p3',
            desc: 'Select your keychain\'s size, measured at the widest point.',
            title: 'Sizing',
            pageTitle: 'Keychain Sizing',
            data:
          [
            {
              id: 0,
              sid: 'sz0',
              name: '1.25 inch',
              src: '/sizing/50centcoin.png'
            },
            {
              id: 1,
              sid: 'sz1',
              name: '1.50 inch',
              src: '/sizing/dollarcoin.png'
            },
            {
              id: 2,
              sid: 'sz2',
              name: '1.75 inch',
              src: '/sizing/golfball.png'
            },
            {
              id: 3,
              sid: 'sz3',
              name: '2.00 inch',
              src: '/sizing/sodacan.png'
            },
            {
              id: 4,
              sid: 'sz4',
              name: '2.25 inch',
              src: '/sizing/poolball.png'
            },
            {
              id: 5,
              sid: 'sz5',
              name: '2.50 inch',
              src: '/sizing/tennisball.png'
            },
            {
              id: 6,
              sid: 'sz6',
              name: '2.75 inch',
              src: '/sizing/baseball.png'
            },
            {
              id: 7,
              sid: 'sz7',
              name: '3.00 inch',
              src: '/sizing/hockeypuck.png'
            }
          ]
          },
          {
            ind: 3,
            pid: 'p4',
            desc: 'Select your keychain\'s packaging.',
            title: 'Packaging',
            pageTitle: 'Packaging Options',
            data:
          [
            {
              id: 0,
              sid: 'pk0',
              name: 'Poly Bag',
              src: '/quote/poly.jpg'
            },
            {
              id: 1,
              sid: 'pk1',
              name: 'Acrylic Case',
              src: '/quote/acryliccase.jpg'
            },
            {
              id: 2,
              sid: 'pk2',
              name: 'Velvet Bag',
              src: '/quote/velvet.jpg'
            },
            {
              id: 3,
              sid: 'pk3',
              name: 'Velvet Case',
              src: '/quote/velvetcase.jpg'
            }
          ]
          }
        ]
      ]
    }
  },
  computed: {
    ...mapGetters('prefs', [
      'currentPage'
    ]),
    isPackaging () {
      const pages = this.categories[this.option]
      return pages[this.currentPage].title === 'Packaging'
    },
    isPlating () {
      const pages = this.categories[this.option]
      return pages[this.currentPage].title === 'Plating'
    },
    pagesLength () {
      return this.categories[this.option].length
    },
    disableAntiques () {
      return (JSON.parse(JSON.stringify(this.$store.state.quote.quote))[0].selected == "Hard Enamel")
    },
    quote () {
      const quotes = [
        JSON.parse(JSON.stringify(this.$store.state.quote.quote)),
        JSON.parse(JSON.stringify(this.$store.state.coinQuote.quoteCoin)),
        JSON.parse(JSON.stringify(this.$store.state.chainQuote.quoteChain))
      ]
      return quotes[this.option]
    },
    pageTitle () {
      const pages = this.categories[this.option]
      return pages[this.currentPage].pageTitle
    },
    pageDesc () {
      const pages = this.categories[this.option]
      return pages[this.currentPage].desc
    },
    choiceEmpty () {
      return (this.option === 0 ? this.$store.state.quote.quote[this.currentPage].selected === null : this.option === 1 ? this.$store.state.coinQuote.quoteCoin[this.currentPage].selected === null : this.$store.state.chainQuote.quoteChain[this.currentPage].selected === null)
    },
    // TODO: smarter way to do this
    percentDone () {
      return ((this.currentPage + 1) / this.pagesLength) * 100;
    }
  },
  // todo: unify
  watch: {
    choiceEmpty (newVal, oldVal) {
      // close notification if choice made
      if (!newVal) {
        this.closeNotif()
      }
    },
    currentPage (newVal, oldVal) {
      this.$emit('update', this.currentPage)
    },
    disableAntiques (newVal, oldVal) {
      // if Hard enamel is chosen, disable (or enable)
      if (newVal !== oldVal) {
        this.categories[0][1].data = this.newPoint
      }
      if (newVal === false) {
        this.categories[0][1].data = this.restorePoint
      }
    }
  },
  methods: {
    emitNotif () {
      this.$emit('notif')
    },
    showDetails () {
      this.details = true
    },
    getPinClasses () {
      const currentPage = this.currentPage
      return (currentPage === 0 ? 'w-1/5' : currentPage === 1 ? 'w-2/5' : currentPage === 2 ? 'w-3/5' : currentPage === 3 ? 'w-4/5' : 'w-full')
    },
    getCoinClasses () {
      const currentPage = this.currentPage
      return (currentPage === 0 ? 'w-1/4' : currentPage === 1 ? 'w-1/2' : currentPage === 2 ? 'w-3/4' : 'w-full')
    },
    closeNotif () {
      this.errorNotif = false
    },
    nextPage () {
      // up todo: refactor
      if (this.choiceEmpty) {
        this.errorNotif = true
      } else if ((this.currentPage < 4 && this.option === 0) || (this.currentPage < 3 && this.option >= 1)) {
        this.$store.commit('prefs/nextPage')
        this.errorNotif = false
      } else {
        this.$emit('scroll', 'design-details')
      }
    },
    lastPage () {
      // down
      if (this.currentPage !== 0) {
        this.$store.commit('prefs/lastPage')
      }
    },
    updateQuote (title, choice) {
      // Updates quote in vuex, which other components respond to
      this.quote[this.currentPage].selected = choice
      if (this.option === 0) {
        // console.log('zero')
        this.$store.commit('quote/setQuote', JSON.stringify(this.quote))
      } else if (this.option === 1) {
        // challenge coins
        // console.log('one')
        this.$store.commit('coinQuote/setQuote', JSON.stringify(this.quote))
      } else if (this.option === 2) {
        // console.log('two')
        this.$store.commit('chainQuote/setQuote', JSON.stringify(this.quote))
      }
      // auto advance like grant asked, the 'right' way
      this.nextPage()
      // console.log('vuex updated!')
    }
  }
}
</script>
