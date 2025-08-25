<template>
  <div class="wrapper">
    <!-- <FullNav /> -->
    <QuoteWrapper />
    <TailFoot />
  </div>
</template>

<script setup>
import TailFoot from '~/components/TailFoot'

useSeoMeta({
  title: 'Free Quote & Design | Custom Lapel Pins & Challenge Coins',
  description: 'Get your free quote for custom lapel pins and challenge coins. Same-day response with complimentary digital artwork. Professional quality pins and coins since 1999.',
  keywords: 'free quote, custom lapel pins quote, challenge coins quote, pin pricing, coin pricing',
  ogTitle: 'Free Quote & Design | Custom Lapel Pins & Challenge Coins',
  ogDescription: 'Get your free quote for custom lapel pins and challenge coins. Same-day response with complimentary digital artwork. Professional quality pins and coins since 1999.',
  ogImage: 'https://lapelpinsandcoins.com/thumbnail3.jpg',
  ogUrl: 'https://lapelpinsandcoins.com/quote',
  ogType: 'website'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://lapelpinsandcoins.com/quote' }
  ]
})

onMounted(() => {
  console.log('pre-form rendering')
})
</script>
