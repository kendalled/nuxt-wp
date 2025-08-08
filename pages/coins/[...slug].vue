<template>
	<div>
		<main class="bg-gray-50">
			<!-- nuxt cms content -->
			<NuxtContentWrapper>
        <ScrollingCoins />
      </NuxtContentWrapper>
			<PinBenefits />
    	<LargeTest />
    	<TailPricing :product-num="1" />
    	<TailSteps class="-mt-14" />
    	<Faq2 />
    	<TailCta />
    	<TailFoot />
		</main>
	</div>
</template>

<script setup>
const route = useRoute()

try {
  const { data: page } = await queryContent(route.path).findOne()

  if (page && page.title) {
    const seoTitle = `${page.title} | Custom Challenge Coins | Premium Quality`
    const seoDescription = page.description || `Professional ${page.title.toLowerCase()} with same-day quotes. Premium custom challenge coins crafted with 20+ years experience. Free artwork and unlimited revisions.`
    const canonicalUrl = `https://lapelpinsandcoins.com${route.path}`
    const ogImage = page.pciImg || page.img || 'https://lapelpinsandcoins.com/homeCoins.png'

    useSeoMeta({
      title: seoTitle,
      description: seoDescription,
      ogTitle: seoTitle,
      ogDescription: seoDescription,
      ogUrl: canonicalUrl,
      ogType: 'article',
      ogImage: ogImage,
      twitterCard: 'summary_large_image',
      twitterTitle: seoTitle,
      twitterDescription: seoDescription,
      twitterImage: ogImage
    })

    useHead({
      link: [
        {
          rel: 'canonical',
          href: canonicalUrl
        }
      ]
    })
  } else {
    // Fallback SEO for when content is not found
    useSeoMeta({
      title: 'Custom Challenge Coins | Premium Quality | Lapel Pins & Coins',
      description: 'Professional custom challenge coins with same-day quotes. Premium quality coins crafted with 20+ years experience. Free artwork and unlimited revisions.',
      ogUrl: `https://lapelpinsandcoins.com${route.path}`
    })
    
    useHead({
      link: [
        {
          rel: 'canonical',
          href: `https://lapelpinsandcoins.com${route.path}`
        }
      ]
    })
  }
} catch (error) {
  console.error('Error querying content:', error)
  // Fallback SEO
  useSeoMeta({
    title: 'Custom Challenge Coins | Premium Quality | Lapel Pins & Coins',
    description: 'Professional custom challenge coins with same-day quotes. Premium quality coins crafted with 20+ years experience. Free artwork and unlimited revisions.',
    ogUrl: `https://lapelpinsandcoins.com${route.path}`
  })
}
</script>
