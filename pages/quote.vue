<template>
  <div class="wrapper">
    <FullNav />
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
      title: 'Free Quote Request | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'Lapel Pins and Coins makes getting a Quote simple. Design your own custom lapel pin or challenge coin! Great for Military, Sports Pins, and Hobbyists alike.' }
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
