<template>
  <div class="relative md:pt-8 lg:pt-10">
    <NewHero />
    <!-- Logo Cloud -->
    <LogoCloud />
    <ThreeFeat />
    <VideoSpot />
    <TailFeat2 />
    <SocialProof />
    <ThreeSteps />
    <SimpleTest />
    <Faq2 />
    <TailCta />
    <TailFoot />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Lapel Pins & Coins: Custom Lapel Pins in Minutes.',
  description: 'An industry leader in custom made pins since 1999. Take a look at our recent orders and place a quote to get a complimentary digital render.',
  ogUrl: 'https://lapelpinsandcoins.com'
})
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://lapelpinsandcoins.com'
    },
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ],
})
</script>
