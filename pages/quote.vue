<template>
  <div class="wrapper">
    <!-- <FullNav /> -->
    <QuoteWrapper />
    <TailFoot />
  </div>
</template>

<script>
// import { auth } from '~/plugins/firebase'
// import QuoteWrapper from '~/components/QuoteWrapper'
import TailFoot from '~/components/TailFoot'
export default {
  name: 'Quote',
  components: {
    TailFoot
  },
  head () {
    return {
      title: 'Free Quote & Design | Custom Lapel Pins & Challenge Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'Get your free quote for custom lapel pins and challenge coins. Same-day response with complimentary digital artwork. Professional quality pins and coins since 1999.' },
        { name: 'keywords', content: 'free quote, custom lapel pins quote, challenge coins quote, pin pricing, coin pricing' },
        { property: 'og:title', content: 'Free Quote & Design | Custom Lapel Pins & Challenge Coins' },
        { property: 'og:description', content: 'Get your free quote for custom lapel pins and challenge coins. Same-day response with complimentary digital artwork. Professional quality pins and coins since 1999.' },
        { property: 'og:image', content: 'https://lapelpinsandcoins.com/thumbnail3.jpg' },
        { property: 'og:url', content: 'https://lapelpinsandcoins.com/quote' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'canonical', href: 'https://lapelpinsandcoins.com/quote' }
      ]
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters.getUser
    }
  },
  mounted () {
    // test if runs correctly
    // if (!this.loggedIn) {
    //   auth.signInAnonymously().catch(function (error) {
    //   // Handle Errors here.
    //     const errorCode = error.code
    //     console.log(errorCode)
    //   // ...
    //   })
    //   console.log('no user, anon created')
    // }
    console.log('pre-form rendering')
  }
}
</script>
