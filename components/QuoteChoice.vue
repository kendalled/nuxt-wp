<template>
  <div class="mx-auto mt-4 max-w-7xl md:-mt-10">
    <ResetModal2 :open="reset" @reset="resetQuote" @close="closeHandler" />
    <div class="px-4 sm:px-6 md:hidden">
      <MobileQuoteChoice :title="'Select product'" :options="optionList" @chosen="setOption" />
    </div>
    <div class="hidden px-8 max-w-7xl md:block">
      <div class="border-b border-gray-200">
        <nav aria-label="Quote options" class="flex justify-end -mb-px">
          <section id="categories">
            <button
              v-for="(option, o) in options"
              :key="option.id"
              :aria-describedby="option.id"
              :class="[o > 0 ? 'ml-8' : 'ml-0', isActive(option.title) ? 'text-blue-600 border-blue-500 focus:text-blue-800 focus:border-blue-700' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300']"
              class="inline-flex items-center px-1 py-4 text-sm font-medium leading-5 border-b-2 group focus:outline-none"
              @click="setOption(option.title)"
            >
              <!-- icon one -->
              <svg :class="[isActive(option.title) ? 'text-blue-500 group-hover:text-blue-600 group-focus:text-blue-700' : 'text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600']" class="-ml-0.5 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path v-if="o === 0" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                <path v-if="o === 1" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                <path v-if="o === 2" fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
              </svg>
              <!-- option text -->
              <span :id="option.id">{{ option.title }}</span>
            </button>
          </section>
          <!-- open products button -->

          <!-- reset quote button -->
          <button
            class="inline-flex items-center px-1 py-4 ml-8 text-sm font-medium leading-5 text-gray-500 border-b-2 border-transparent group hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 focus:outline-none"
            @click="openReset"
          >
            <svg class="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" /></svg>
            <span>Reset quote</span>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.h-nav {
  height: 53px !important;
}
</style>

<script>
import MobileQuoteChoice from '~/components/MobileQuoteChoice'
import ResetModal2 from '~/components/ResetModal2'
export default {
  name: 'QuoteChoice',
  components: {
    MobileQuoteChoice,
    ResetModal2
  },
  data () {
    return {
      optionList: [
        'Lapel Pins',
        'Challenge Coins',
        'Keychains'
      ],
      reset: false,
      options: [
        {
          title: 'Lapel Pins',
          id: 'lapel-pins'
        },
        {
          title: 'Challenge Coins',
          id: 'challenge-coins'
        },
        {
          title: 'Keychains',
          id: 'keychains'
        }
      ]
    }
  },
  computed: {
    selected () {
      return this.$store.state.prefs.prefs.choice
    }
  },
  watch: {
    selected (newVal, oldVal) {
      // show new val
      this.$emit('choice', newVal)
      // console.log('child see select change' + choice)
      // this.$emit('choice', choice)
    }
  },
  methods: {
    closeHandler () {
      this.reset = false
    },
    isActive (elem) {
      // functional!
      return (elem === this.selected)
    },
    openReset () {
      this.reset = !this.reset
    },
    resetQuote () {
      this.$emit('reset')
      this.$store.dispatch('quote/quoteReset')
      this.$store.dispatch('coinQuote/quoteCoinReset')
      this.$store.dispatch('chainQuote/quoteChainReset')
    },
    setOption (val) {
      if (this.selected !== val) {
        this.$store.commit('prefs/setPrefs', val)
        // this.$emit('choice', val.title)
      }
    }
  }
}
</script>
