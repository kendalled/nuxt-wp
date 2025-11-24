<template>
  <NuxtLayout>
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Header -->
      <BlogHeader :data="data" />
      
      <!-- Main Article Content -->
      <BlogContent :data="data" />
      
      <!-- Article Navigation -->
      <BlogNavigation :current-slug="currentSlug" />
      
      <!-- CTA Section -->
      <BlogCTA :article-type="articleType" />
      
      <!-- Footer -->
      <TailFoot />
    </div>
  </NuxtLayout>
</template>

<script setup>
import BlogHeader from '~/components/BlogHeader'
import BlogContent from '~/components/BlogContent'
import BlogNavigation from '~/components/BlogNavigation'
import BlogCTA from '~/components/BlogCTA'
import TailFoot from '~/components/TailFoot'

const route = useRoute()

const { data } = await useAsyncData('blog-article', async () => {
  // Nuxt Content v2 — fetch by path
  const slug = route.params.slug
  const path = Array.isArray(slug) ? ['/blog', ...slug].join('/') : `/blog/${slug}`
  const q = await queryContent(path).findOne()
  return q
})

// Computed values for components
const currentSlug = computed(() => {
  const slug = route.params.slug
  return Array.isArray(slug) ? slug[slug.length - 1] : slug
})

const articleType = computed(() => {
  if (!data.value?.title) return 'general'
  const title = data.value.title.toLowerCase()
  if (title.includes('pin') || title.includes('lapel')) return 'pins'
  if (title.includes('coin') || title.includes('challenge')) return 'coins'
  if (title.includes('keychain')) return 'keychains'
  return 'general'
})

// SEO Meta
useSeoMeta({
  title: data.value?.title ? `${data.value.title} | Lapel Pins & Coins Blog` : 'Blog Article | Lapel Pins & Coins',
  description: data.value?.description || 'Read our latest blog post about custom lapel pins, challenge coins, and promotional products.',
  ogTitle: data.value?.title || 'Blog Article',
  ogDescription: data.value?.description || 'Read our latest blog post',
  ogImage: data.value?.image || '/thumbnail.png',
  ogType: 'article',
  ogUrl: `https://lapelpinsandcoins.com${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: data.value?.title || 'Blog Article',
  twitterDescription: data.value?.description || 'Read our latest blog post',
  twitterImage: data.value?.image || '/thumbnail.png'
})

// Article structured data
useHead({
  link: [
    { rel: 'canonical', href: `https://lapelpinsandcoins.com${route.path}` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.value?.title || 'Blog Article',
        description: data.value?.description || 'Read our latest blog post about custom lapel pins, challenge coins, and promotional products.',
        image: data.value?.image ? `https://lapelpinsandcoins.com${data.value.image}` : 'https://lapelpinsandcoins.com/thumbnail.png',
        datePublished: data.value?.date || new Date().toISOString(),
        dateModified: data.value?.dateModified || data.value?.date || new Date().toISOString(),
        author: {
          '@type': 'Organization',
          name: 'Lapel Pins & Coins',
          url: 'https://lapelpinsandcoins.com'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Lapel Pins & Coins',
          url: 'https://lapelpinsandcoins.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://lapelpinsandcoins.com/logo.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://lapelpinsandcoins.com${route.path}`
        }
      })
    }
  ]
})
</script>

<style scoped>
</style>


