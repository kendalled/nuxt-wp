<template>
  <div class="min-h-screen bg-gray-100">
    <FloatingBanner message="You have not completed your design options - please finish the steps at the top of the page." message2="Please complete the quote at the top" :show="errorNotif" @close="closeNotif" />
    <FloatingBanner message="You have incomplete contact information - fill out any empty fields to finish your quote." message2="Please complete your contact information" :show="errorNotifTwo" @close="closeNotifTwo" />

    <!-- old nav spot -->
    <div class="py-10">
      <header>
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 class="pb-1 text-2xl font-bold leading-tight text-gray-900 border-b border-gray-200 md:text-3xl md:pb-0 md:border-b-0">
            Free Quote Request
          </h1>
        </div>
        <QuoteChoice @choice="selectProduct" @reset="resetQuote" />
      </header>
      <main>
        <form
          netlify
          ref="quoteForm"
          name="Quote Request"
          class="mx-auto max-w-7xl sm:px-6 lg:px-8"
          method="POST"
          enctype="multipart/form-data"
          action="/thanks"
        >
          <!-- Replace with your content -->
          <input type="hidden" name="form-name" value="Quote Request" />
          <!-- <input type="hidden" name="_next" value="https://lapelpinsandcoins.com/thanks"> -->
          <input id="product" v-model="product" type="hidden" name="Product">
          <HiddenInputs :product="product" />
          <input
            v-if="isPin"
            type="hidden"
            name="Estimated Per Unit"
            :value="estimate && estimate.perUnit != null ? estimate.perUnit : ''"
          >
          <input
            v-if="isPin"
            type="hidden"
            name="Estimated Total"
            :value="estimate && estimate.total != null ? estimate.total : ''"
          >
          <FinalQuote
            :done="doneFirst"
            :margin="1"
            :has-border="true"
            :option="option"
            @scroll="testScroll"
            @update="updatePage"
            @notif="errorNotif = true"
          />
          <TwoColForm
            :class="[!doneFirst ? 'opacity-50' : 'opacity-100']"
            class="transition-opacity duration-300 ease-in-out"
            :greyed="!doneFirst"
            :product="option"
            @info="doneSecond = true"
            @changed="updateData"
            @submitted="submitHandler"
            @scroll="testScroll"
            @need="errorNotifTwo = true"
          />
          <EstimateSidebar v-if="estimatorEnabled" :estimate="estimate" />
          <EstimateBottomDock v-if="estimatorEnabled" :estimate="estimate" />
          <!-- /End replace -->
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { fireDb } from '~/plugins/firebase'
import FloatingBanner from '~/components/FloatingBanner'
import HiddenInputs from '~/components/HiddenInputs'
import FinalQuote from '~/components/FinalQuote'
import TwoColForm from '~/components/TwoColForm'
import QuoteChoice from '~/components/QuoteChoice'
import EstimateSidebar from '~/components/EstimateSidebar'
import EstimateBottomDock from '~/components/EstimateBottomDock'
import { computePinEstimate } from '~/utils/pricing/pins'
export default {
  name: 'QuoteWrapper',
  components: {
    FloatingBanner,
    HiddenInputs,
    FinalQuote,
    TwoColForm,
    QuoteChoice,
    EstimateSidebar,
    EstimateBottomDock
  },
  data () {
    return {
      doneSecond: false,
      isGray: true,
      errorNotif: false,
      errorNotifTwo: false,
      currentPage: 0,
      dropOpen: false,
      twoColData: {
        quantity: 100,
        // state: 'Select a State',
        country: 'US',
        description: '',
        referenceFiles: [],
        // zip: '',
        email: '',
        phone: '',
        name: ''
        // address: ''
      },
      estimate: { perUnit: null, total: null, breakdown: {}, confidence: 'unknown', notes: [] },
      _estimateTimer: null
    }
  },
  computed: {
    product () {
      return this.$store.state.prefs.prefs.choice
    },
    quote () {
      return {
        choices: [
          ...this.correctChoices
        ],
        customerData: this.twoColData,
        active: true,
        category: this.product,
        // customer: this.$store.state.user.id,
        cost: 0,
        sentArtist: false,
        deadline: {
          nanoseconds: 0,
          seconds: this.secondsUTC
        },
        status: -2,
        // id: 'project-' + this.$store.state.user.id
      }
    },
    secondsUTC () {
      const now = new Date()
      return (Math.round(now.getTime() / 1000))
    },
    correctChoices () {
      return (this.product === 'Lapel Pins' ? this.$store.state.quote.quote : this.product === 'Challenge Coins' ? this.$store.state.coinQuote.quoteCoin : this.$store.state.chainQuote.quoteChain)
    },
    ...mapGetters('quote', [
      'pinDone'
    ]),
    ...mapGetters('coinQuote', [
      'coinDone'
    ]),
    ...mapGetters('chainQuote', [
      'chainDone'
    ]),
    option () {
      // detects type of quote for final quote
      const pin = this.isPin
      const coin = this.isCoin
      return (pin ? 0 : coin ? 1 : 2)
    },
    isPin () {
      return this.product === 'Lapel Pins'
    },
    isCoin () {
      return this.product === 'Challenge Coins'
    },
    isChain () {
      return this.product === 'Keychains'
    },
    lastPage () {
      return (this.product === 'Lapel Pins' ? 4 : 3)
    },
    doneFirst () {
      const status = (this.product === 'Lapel Pins' ? 0 : this.product === 'Challenge Coins' ? 1 : 2)
      return (status === 0 ? this.pinDone : status === 1 ? this.coinDone : this.chainDone)
    },
    estimatorEnabled () {
      return this.$config?.public?.showEstimator !== false && this.option === 0
    }
  },
  watch: {
    // TODO: two?
    errorNotif (newVal, oldVal) {
      if (process.browser && newVal) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
    },
    '$store.state.quote.quote': {
      deep: true,
      handler () {
        this.scheduleEstimate()
      }
    },
    'twoColData.quantity': {
      handler () {
        this.scheduleEstimate()
      }
    }
  },
  methods: {
    scheduleEstimate () {
      if (this.option !== 0) return
      if (this._estimateTimer) clearTimeout(this._estimateTimer)
      this._estimateTimer = setTimeout(() => {
        try {
          const est = computePinEstimate(this.$store.state, this.twoColData)
          this.estimate = est
        } catch (e) {
          console.error('Estimate computation failed:', e)
        }
      }, 150)
    },
    updateData (val) {
      this.twoColData = val
      this.scheduleEstimate()
    },
    closeNotif () {
      this.errorNotif = false
    },
    closeNotifTwo () {
      this.errorNotifTwo = false
    },
    submitHandler () {
      if (this.doneFirst) {
        // this.addProject()
        this.$refs.quoteForm.submit()
      } else {
        this.errorNotif = true
      }
    },
    // addProject () {
    //   const id = 'project-' + (this.$store.state.user.id)
    //   console.log('adding quote!')
    //   const quote = this.quote
    //   // db reference
    //   const collectionRef = fireDb.collection('Projects')
    //   // sets in firestore
    //   try {
    //     collectionRef.doc(id).set(quote)
    //   } catch (error) {
    //     alert(error)
    //   }
    //   console.log('updated firestore??')
    // },
    resetQuote () {
      this.$store.commit('prefs/resetPage')
    },
    updatePage (val) {
      this.currentPage = val
      this.errorNotif = false
      this.scheduleEstimate()
    },
    selectProduct (val) {
      this.$store.commit('prefs/resetPage')
      this.scheduleEstimate()
    },
    testScroll (elem) {
      if (process.browser) {
        document.getElementById(elem).scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }
  ,
  mounted () {
    this.scheduleEstimate()
  }
}
</script>

<style scoped>
.duration-400 {
  transition-duration: 400ms;
}
</style>
