<template>
  <div class="hiddenInputs">
    <input id="production" v-model="production" type="hidden" name="Production">
    <input id="plating" v-model="plating" type="hidden" name="Plating">
    <input id="sizing" v-model="sizing" type="hidden" name="Sizing">
    <input id="color" v-model="color" type="hidden" name="Coin Color Y/N">
    <input id="backing" v-model="backing" type="hidden" name="Backing">
    <input id="packaging" v-model="packaging" type="hidden" name="Packaging">
  </div>
</template>

<script>
export default {
  name: 'HiddenInputs',
  props: {
    product: {
      type: String,
      default: 'Lapel Pins'
    }
  },
  computed: {
    quote () {
      return (this.product === 'Lapel Pins' ? this.$store.state.quote.quote : this.product === 'Challenge Coins' ? this.$store.state.coinQuote.quoteCoin : this.$store.state.chainQuote.quoteChain)
    },
    production () {
      return (this.product === 'Lapel Pins' ? this.$store.state.quote.quote[0].selected : this.product === 'Challenge Coins' ? 'None' : this.$store.state.chainQuote.quoteChain[0].selected)
    },
    plating () {
      return (this.product === 'Lapel Pins' ? this.$store.state.quote.quote[1].selected : this.product === 'Challenge Coins' ? this.$store.state.coinQuote.quoteCoin[0].selected : this.$store.state.chainQuote.quoteChain[1].selected)
    },
    sizing () {
      return (this.product === 'Lapel Pins' ? this.$store.state.quote.quote[2].selected : this.product === 'Challenge Coins' ? this.$store.state.coinQuote.quoteCoin[2].selected : this.$store.state.chainQuote.quoteChain[2].selected)
    },
    color () {
      return (this.product === 'Challenge Coins' ? this.$store.state.quote.quote[1].selected : 'Not a Coin')
    },
    backing () {
      return (this.product === 'Lapel Pins' ? this.$store.state.quote.quote[3].selected : 'Not a pin')
    },
    packaging () {
      return (this.product === 'Lapel Pins' ? this.$store.state.quote.quote[4].selected : this.product === 'Challenge Coins' ? this.$store.state.coinQuote.quoteCoin[3].selected : this.$store.state.chainQuote.quoteChain[3].selected)
    }
  },
  watch: {
    production (newVal, oldVal) {
      if (newVal !== null) {
        this.setValue(newVal, 'production')
      }
    },
    plating (newVal, oldVal) {
      if (newVal !== null) {
        this.setValue(newVal, 'plating')
      }
    },
    sizing (newVal, oldVal) {
      if (newVal !== null) {
        this.setValue(newVal, 'sizing')
      }
    },
    color (newVal, oldVal) {
      if (newVal !== null) {
        this.setValue(newVal, 'color')
      }
    },
    backing (newVal, oldVal) {
      if (newVal !== null) {
        this.setValue(newVal, 'backing')
      }
    },
    packaging (newVal, oldVal) {
      if (newVal !== null) {
        this.setValue(newVal, 'packaging')
      }
    }
  },
  methods: {
    setValue (value, title) {
      const data = value
      if (process.browser) {
        document.getElementById(title).value = data
      }
    }
  }
}
</script>
