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
  data () {
    return {
      // Mapping SID codes to user-friendly names
      sidToNameMapping: {
        // Production methods
        'pr0': 'Die Struck',
        'pr1': 'Soft Enamel',
        'pr2': 'Hard Enamel',
        'pr3': 'Silk Screen',
        'pr4': 'Offset Printed',
        // Plating options
        'pl1': 'Polished Gold',
        'pl2': 'Polished Silver',
        'pl3': 'Polished Copper',
        'pl4': 'Polished Nickel',
        'pl5': 'Black Metal',
        'pl6': 'Antique Gold',
        'pl7': 'Antique Silver',
        'pl8': 'Antique Copper',
        'pl9': 'Dual Plated',
        'pl10': 'Color Coated',
        // Sizing options
        'sz0': '0.75 inch',
        'sz1': '1.00 inch',
        'sz2': '1.25 inch',
        'sz3': '1.50 inch',
        'sz4': '1.75 inch',
        'sz5': '2.00 inch',
        'sz6': '2.25 inch',
        'sz7': '2.50 inch',
        'sz8': '2.75 inch',
        'sz9': '3.00 inch',
        // Backing options
        'bk0': 'Butterfly Clutch',
        'bk1': 'Black Rubber',
        'bk2': 'Yellow Rubber',
        'bk3': 'Jewelry Clutch',
        'bk4': 'Deluxe Clutch',
        // Packaging options
        'pk0': 'Poly Bag',
        'pk1': 'Acrylic Case',
        'pk2': 'Velvet Bag',
        'pk3': 'Velvet Case',
        // Color options for challenge coins
        'c0': 'Full Color Coin',
        'c1': 'No Color Coin'
      }
    }
  },
  computed: {
    quote () {
      return (this.product === 'Lapel Pins' ? this.$store.state.quote.quote : this.product === 'Challenge Coins' ? this.$store.state.coinQuote.quoteCoin : this.$store.state.chainQuote.quoteChain)
    },
    production () {
      const selected = (this.product === 'Lapel Pins' ? this.$store.state.quote.quote[0].selected : this.product === 'Challenge Coins' ? 'None' : this.$store.state.chainQuote.quoteChain[0].selected)
      return this.mapSidToName(selected)
    },
    plating () {
      const selected = (this.product === 'Lapel Pins' ? this.$store.state.quote.quote[1].selected : this.product === 'Challenge Coins' ? this.$store.state.coinQuote.quoteCoin[0].selected : this.$store.state.chainQuote.quoteChain[1].selected)
      return this.mapSidToName(selected)
    },
    sizing () {
      const selected = (this.product === 'Lapel Pins' ? this.$store.state.quote.quote[2].selected : this.product === 'Challenge Coins' ? this.$store.state.coinQuote.quoteCoin[2].selected : this.$store.state.chainQuote.quoteChain[2].selected)
      return this.mapSidToName(selected)
    },
    color () {
      const selected = (this.product === 'Challenge Coins' ? this.$store.state.coinQuote.quoteCoin[1].selected : 'Not a Coin')
      return this.mapSidToName(selected)
    },
    backing () {
      const selected = (this.product === 'Lapel Pins' ? this.$store.state.quote.quote[3].selected : 'Not a pin')
      return this.mapSidToName(selected)
    },
    packaging () {
      const selected = (this.product === 'Lapel Pins' ? this.$store.state.quote.quote[4].selected : this.product === 'Challenge Coins' ? this.$store.state.coinQuote.quoteCoin[3].selected : this.$store.state.chainQuote.quoteChain[3].selected)
      return this.mapSidToName(selected)
    }
  },
  methods: {
    mapSidToName (value) {
      // If value is null/undefined or already a display name, return as is
      if (!value || typeof value !== 'string') {
        return value
      }
      // If it's a SID code, map it to display name, otherwise return original
      return this.sidToNameMapping[value] || value
    },
    setValue (value, title) {
      const data = value
      if (process.browser) {
        document.getElementById(title).value = data
      }
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
  }
}
</script>
