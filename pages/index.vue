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
  description: 'Premium custom lapel pins and challenge coins with same-day quotes. Over 20 years of experience crafting quality pins and coins. Free artwork & unlimited revisions.',
  ogTitle: 'Lapel Pins & Coins: Custom Lapel Pins in Minutes.',
  ogDescription: 'Premium custom lapel pins and challenge coins with same-day quotes. Over 20 years of experience crafting quality pins and coins. Free artwork & unlimited revisions.',
  ogUrl: 'https://lapelpinsandcoins.com',
  ogType: 'website',
  ogImage: 'https://lapelpinsandcoins.com/thumbnail3.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Lapel Pins & Coins: Custom Lapel Pins in Minutes.',
  twitterDescription: 'Premium custom lapel pins and challenge coins with same-day quotes. Over 20 years of experience crafting quality pins and coins. Free artwork & unlimited revisions.',
  twitterImage: 'https://lapelpinsandcoins.com/thumbnail3.jpg'
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
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Lapel Pins & Coins',
        url: 'https://lapelpinsandcoins.com',
        logo: 'https://lapelpinsandcoins.com/logo.png',
        sameAs: [
          'https://www.facebook.com/lapelpinsandcoins',
          'https://twitter.com/lapelpinscoins'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-844-395-4464',
          contactType: 'customer service',
          availableLanguage: 'English'
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US'
        },
        foundingDate: '1999',
        description: 'Professional custom lapel pins and challenge coins manufacturer with over 20 years experience. Specializing in soft enamel, hard enamel, and die struck pins.'
      })
    }
  ]
})
</script>
