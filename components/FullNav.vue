<template>
  <nav class="top-0 z-40 bg-white sm:sticky" @keydown.escape="closeAll">
    <div :class="[showBorder ? 'border-gray-200' : 'border-transparent']" class="relative z-20 transition-colors duration-150 ease-in-out bg-white border-b">
      <div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex px-2 lg:px-0">
            <!-- extra div to add flyout click handler -->
            <div class="flex items-center h-full" @click="closeAll">
              <nuxt-link title="Lapel Pins and Coins - Home" to="/" class="flex items-center flex-shrink-0 rounded-md focus:outline-none">
                <span class="sr-only">Home</span>
                <img data-not-lazy class="block w-auto h-5 lg:hidden" src="/lapel.svg" alt="">
                <img data-not-lazy class="hidden w-auto mt-0.5 lg:block h-7" src="/lapel.svg" alt="">
              </nuxt-link>
            </div>
            <div class="hidden antialiased lg:ml-8 lg:flex">
              <!-- todo: clean up focus / active states when open -->
              <button type="button" :class="[selected === 1 ? 'border-blue-700 text-gray-900 focus:border-blue-800' : 'text-gray-500']" class="inline-flex items-center pt-1 space-x-1 text-sm font-medium leading-5 border-b-2 border-transparent group hover:text-gray-900 hover:border-gray-300 focus:border-gray-300 focus:outline-none focus:text-gray-900" @click="togglePinFlyout">
                <span>Lapel Pins</span>
                <svg :class="[selected === 1 ? 'text-gray-600' : 'text-gray-400']" class="w-5 h-5 group-hover:text-gray-500 group-focus:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <button type="button" :class="[selected === 2 ? 'border-blue-700 text-gray-900 focus:border-blue-800' : 'text-gray-500']" class="inline-flex items-center pt-1 ml-8 space-x-1 text-sm font-medium leading-5 border-b-2 border-transparent group hover:text-gray-900 hover:border-gray-300 focus:border-gray-300 focus:outline-none focus:text-gray-900" @click="toggleCoinFlyout">
                <span>Challenge Coins</span>
                <svg :class="[selected === 2 ? 'text-gray-600' : 'text-gray-400']" class="w-5 h-5 group-hover:text-gray-500 group-focus:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <nuxt-link to="/keychains" :class="[selected === 3 ? 'border-blue-700 text-gray-900 focus:border-blue-800' : 'text-gray-500']" class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                Keychains
              </nuxt-link>
              <nuxt-link to="/blog" :class="[selected === 4 ? 'border-blue-700 text-gray-900 focus:border-blue-800' : 'text-gray-500']" class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                Blog<span class="hidden xl:inline xl:ml-1"> Posts</span>
              </nuxt-link>
            </div>
          </div>
          <div class="items-center justify-end flex-1 hidden px-2 lg:ml-6 lg:flex">
            <!-- TODO: add search here (button blurs if you go to quote) -->
            <nuxt-link id="quoteButton" to="/quote" title="Quote form" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm whitespace-nowrap bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700">
              Free Quote
            </nuxt-link>
          </div>
          <div class="flex items-center space-x-2 lg:hidden">
            <nuxt-link to="/quote" class="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Free Quote
            </nuxt-link>
            <button aria-label="Menu Toggle" class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" @click="mobileOpen = !mobileOpen">
              <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  :class="[mobileOpen ? 'hidden' : 'inline-flex']"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  :class="[!mobileOpen ? 'hidden' : 'inline-flex']"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ContactButtons />
        </div>
      </div>
      <!-- <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      > -->
      <div v-show="mobileOpen" class="w-full bg-white border-t border-gray-200 lg:hidden">
        <div class="pt-2 pb-3">
          <nuxt-link to="/pins" title="Custom designed lapel pins" :class="[selected === 1 ? 'text-blue-700 border-blue-500 bg-blue-50 focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700' : 'text-gray-600 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300', 'block py-2 pl-3 pr-4 text-base font-medium transition duration-150 ease-in-out border-l-4 focus:outline-none']">
            Lapel Pins
          </nuxt-link>
          <nuxt-link to="/coins" :class="[selected === 2 ? 'text-blue-700 border-blue-500 bg-blue-50 focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700' : 'text-gray-600 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300', 'mt-1 block py-2 pl-3 pr-4 text-base font-medium transition duration-150 ease-in-out border-l-4 focus:outline-none']" title="Custom challenge coins">
            Challenge Coins
          </nuxt-link>
          <nuxt-link to="/keychains" title="Custom keychains" :class="[selected === 3 ? 'text-blue-700 border-blue-500 bg-blue-50 focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700' : 'text-gray-600 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300', 'mt-1 block py-2 pl-3 pr-4 text-base font-medium transition duration-150 ease-in-out border-l-4 focus:outline-none']">
            Keychains
          </nuxt-link>
          <nuxt-link to="/blog" title="Our weekly blog posts" :class="[selected === 4 ? 'text-blue-700 border-blue-500 bg-blue-50 focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700' : 'text-gray-600 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300', 'mt-1 block py-2 pl-3 pr-4 text-base font-medium transition duration-150 ease-in-out border-l-4 focus:outline-none']">
            Blog Posts
          </nuxt-link>
        </div>
        <!-- todo: fix padding if keeping this layout -->
        <div class="pt-4 pb-3 border-t border-gray-200">
          <!-- <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <span class="inline-block w-10 h-10 overflow-hidden bg-gray-100 border-2 border-gray-300 rounded-full">
                <svg class="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-6 text-gray-800">
                Your Account
              </div>
              <div class="text-sm font-medium leading-5 text-gray-500">
                you@example.com
              </div>
            </div>
          </div> -->
          <div class="mt-3">
            <nuxt-link to="/checkout" class="block px-4 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100">
              Checkout
            </nuxt-link>
            <nuxt-link to="/privacy" title="Privacy policy" class="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100">
              Privacy Policy
            </nuxt-link>
            <nuxt-link to="/quote" title="Quote request form" class="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100">
              Free Quote
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- </transition> -->
    </div>
    <!-- Flyout menu component v-if="pinFlyoutOpen && !coinFlyoutOpen" v-if="coinFlyoutOpen && !pinFlyoutOpen" -->
    <FlyoutBetter
      :opened="pinFlyoutOpen"
      :category="'pin'"
      :links="pinListOne"
      :links2="pinListTwo"
      :blogs="pBlogs"
      @close="pinFlyoutOpen = !pinFlyoutOpen"
    />
    <FlyoutBetter
      :opened="coinFlyoutOpen"
      :category="'coin'"
      :links="coinListOne"
      :links2="coinListTwo"
      :blogs="cBlogs"
      @close="coinFlyoutOpen = !coinFlyoutOpen"
    />
  </nav>
</template>

<script>
// import { auth } from '~/plugins/firebase.js'
import ContactButtons from '~/components/ContactButtons'
import FlyoutBetter from '~/components/FlyoutBetter'
export default {
  name: 'FullNav',
  components: {
    ContactButtons,
    FlyoutBetter
  },
  data () {
    return {
      scrollPosition: null,
      links: [
        {
          type: 'Lapel Pins',
          list1: [
            {
              title: 'Die Struck',
              ref: '/pins/die-struck'
            },
            {
              title: 'Soft Enamel',
              ref: '/pins/soft-enamel'
            },
            {
              title: 'Hard Enamel',
              ref: '/pins/hard-enamel'
            },
            {
              title: 'Silk Screen',
              ref: '/pins/silk-screen'
            },
            {
              title: 'Offset Printed',
              ref: '/pins/offset-printed'
            }
          ],
          list2: [
            {
              title: 'Lapel Pins',
              ref: '/pins',
              new: false
            },
            {
              title: 'Years of Service Pins',
              ref: '/pins/years-of-service',
              new: false
            },
            {
              title: 'Easter Pins',
              ref: '/pins/easter',
              new: true
            },
            {
              title: 'Police Pins',
              ref: '/pins/police',
              new: false
            },
            {
              title: 'Holiday Pins',
              ref: '/pins/holiday',
              new: false
            },
            {
              title: 'Rainbow Pins',
              ref: '/pins/rainbow',
              new: false
            },
            {
              title: 'Inspiration Pins',
              ref: '/pins/inspiration',
              new: false
            },
            {
              title: 'Glitter Pins',
              ref: '/pins/glitter',
              new: false
            },
            {
              title: 'Gaming Pins',
              ref: '/pins/gaming',
              new: false
            },
            {
              title: 'Medical Pins',
              ref: '/pins/medical'
            },
            {
              title: 'School Pins',
              ref: '/pins/school'
            },
            {
              title: 'Trading Pins',
              ref: '/pins/sports-trading'
            },
            {
              title: 'Food Pins',
              ref: '/pins/food'
            },
            {
              title: 'Heart Pins',
              ref: '/pins/heart',
              new: false
            },
            {
              title: 'Travel Pins',
              ref: '/pins/travel-outdoor',
              new: false
            },
            {
              title: 'Angel Pins',
              ref: '/pins/angel',
              new: false
            },
            {
              title: 'Space Pins',
              ref: '/pins/space',
              new: false
            },
            {
              title: 'Glowing Pins',
              ref: '/pins/glow-in-the-dark',
              new: false
            },
            {
              title: 'Clear Enamel Pins',
              ref: '/pins/transparent-enamel',
              new: false
            },
            {
              title: 'Star Pins',
              ref: '/pins/star',
              new: false
            },
            {
              title: 'Animal Pins',
              ref: '/pins/animal',
              new: false
            },
            {
              title: 'Safety Pins',
              ref: '/pins/safety',
              new: false
            },
            {
              title: 'Tie Pins',
              ref: '/pins/tie',
              new: false
            },
            {
              title: 'State Flag Pins',
              ref: '/pins/state-flag',
              new: false
            },
            {
              title: 'LGBTQ Pins',
              ref: '/pins/lgbtq-pride',
              new: false
            },
            {
              title: 'World Flag Pins',
              ref: '/pins/world-flag',
              new: false
            },
            {
              title: 'Fashion Pins',
              ref: '/pins/fashion',
              new: false
            },
            {
              title: 'Religious Pins',
              ref: '/pins/religious',
              new: false
            },
            {
              title: 'Public Servant Pins',
              ref: '/pins/public-servant',
              new: false
            },
            {
              title: 'American Flag Pins',
              ref: '/pins/american-flag',
              new: false
            },
            {
              title: 'TV Show Pins',
              ref: '/pins/tv-show',
              new: false
            },
            {
              title: 'Movie Pins',
              ref: '/pins/movie',
              new: false
            },
            {
              title: 'Varsity Pins',
              ref: '/pins/varsity',
              new: false
            },
            {
              title: 'Political Pins',
              ref: '/pins/political',
              new: false
            }
          ]
        },
        {
          type: 'Challenge Coins',
          list1: [
            {
              title: 'Antique Gold',
              ref: '/coins/antique-gold',
              new: false
            },
            {
              title: 'Antique Silver',
              ref: '/coins/antique-silver',
              new: false
            },
            {
              title: 'Antique Copper',
              ref: '/coins/antique-copper',
              new: false
            },
            {
              title: 'Polished Gold',
              ref: '/coins/polished-gold',
              new: false
            },
            {
              title: 'Polished Silver',
              ref: '/coins/polished-silver',
              new: false
            },
            {
              title: 'Polished Copper',
              ref: '/coins/polished-copper',
              new: false
            }

          ],
          list2: [
            {
              title: 'Challenge Coins',
              ref: '/coins'
            },
            {
              title: 'Nursing Coins',
              ref: '/coins/nursing'
            },
            {
              title: 'Fire Coins',
              ref: '/coins/fire-department'
            },
            {
              title: 'Police Coins',
              ref: '/coins/police'
            },
            {
              title: 'Military Coins',
              ref: '/coins/military'
            }
          ]
        }
      ],
      pBlogs: [
        {
          title: 'The History of Nursing Pins',
          desc: 'Nursing pins have played a vital role in healthcare for over twenty years. Learn about their interesting backstory.',
          img: '/pinblog1.jpg',
          href: '/blog/history-of-nursing-pins'
        },
        {
          title: 'A Complete History of Disney Pins',
          desc: 'An in-depth overview of the origins, changes, and loyal community behind Disney\'s famous lapel pins.',
          img: '/pinblog2.jpg',
          href: '/blog/disney-pins'
        }
      ],
      cBlogs: [
        {
          title: 'A Complete History of Challenge Coins',
          desc: 'Nursing pins have played a vital role in the military for over 80 years. Learn about their interesting backstory.',
          img: '/coinblog2.jpg',
          href: '/blog'
        },
        {
          title: 'How to Make Challenge Coins',
          desc: 'An in-depth overview of the origins, changes, and loyal community behind challenge coins - with a tutorial.',
          img: '/coinblog1.jpg',
          href: '/blog/'
        }
      ],
      mobileOpen: false,
      // dropdown
      open: false,
      // flyouts
      pinFlyoutOpen: false,
      coinFlyoutOpen: false,
      flyoutOpen: false
    }
  },
  computed: {
    showBorder () {
      if (this.selected !== 0) {
        return true
      }
      return (this.scrollPosition > 10 || this.coinFlyoutOpen || this.pinFlyoutOpen)
    },
    selected () {
      const path = this.$route?.path
      const ind = path?.lastIndexOf('/') || path?.length || 0
      const startingPath = path?.substr(0, ind) || ''
      return startingPath === '/' ? 0 : startingPath === '/pins' ? 1 : startingPath === '/coins' ? 2 : startingPath === '/keychains' ? 3 : startingPath === '/blog' ? 4 : startingPath === '/quote' ? 5 : -1
    },
    path () {
      return this.$route?.path
    },
    pinListOne () {
      return this.links[0].list1
    },
    pinListTwo () {
      return this.links[0].list2
    },
    coinListOne () {
      return this.links[1].list1
    },
    coinListTwo () {
      return this.links[1].list2
    }
  },
  watch: {
    selected (newVal, oldVal) {
      // todo: adjust timing
      if (newVal !== oldVal) {
        this.closeAll()
      }
      // blur quote button on route change
      if (newVal === 5) {
        document.getElementById('quoteButton')?.blur()
      }
      if (this.selected !== 0) {
        window.removeEventListener('scroll', this.updateScroll)
      } else {
        window.addEventListener('scroll', this.updateScroll)
      }
    },
    path (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.pinFlyoutOpen = false
        this.coinFlyoutOpen = false
        this.mobileOpen = false
      }
    }
  },
  mounted () {
    if (this.selected === 0) {
      window.addEventListener('scroll', this.updateScroll)
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    },

    closeAll () {
      this.open = false
      this.coinFlyoutOpen = false
      this.pinFlyoutOpen = false
      this.flyoutOpen = false
    },
    // TODO: fix logic
    togglePinFlyout () {
      // handle all pin only events
      this.pinFlyoutOpen = !this.pinFlyoutOpen
      if (this.coinFlyoutOpen) {
        this.coinFlyoutOpen = !this.coinFlyoutOpen
      }
    },
    toggleCoinFlyout () {
      // handle all pin only events
      this.coinFlyoutOpen = !this.coinFlyoutOpen
      if (this.pinFlyoutOpen) {
        this.pinFlyoutOpen = !this.pinFlyoutOpen
      }
    },
    testScroll (elem) {
      if (process.browser) {
        document.getElementById(elem)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        document.getElementById('phone-button')?.blur()
      }
    }
  }
  // mounted () {
  //   const user = auth.currentUser
  //   if (user != null) {
  //     // this.email = user.email
  //     // this.displayName = user.displayName
  //     this.userPhoto = user.photoURL
  //   }
  // }
}
</script>
