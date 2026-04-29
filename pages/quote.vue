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
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'DigitalDocument',
        name: 'Custom Item Template PDF',
        description: 'Template PDF customers can use to submit custom item details for a quote request.',
        url: 'https://lapelpinsandcoins.com/custom-item-template.pdf',
        contentUrl: 'https://lapelpinsandcoins.com/custom-item-template.pdf',
        encodingFormat: 'application/pdf',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://lapelpinsandcoins.com/quote'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Lapel Pins & Coins'
        }
      })
    }
  ]
})

onMounted(() => {
  console.log('pre-form rendering')
})
</script>
