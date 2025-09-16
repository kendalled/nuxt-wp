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
import { useRoute } from 'vue-router'
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
useHead({
  title: data.value?.title ? `${data.value.title} | Lapel Pins & Coins Blog` : 'Blog Article | Lapel Pins & Coins',
  meta: [
    { hid: 'description', name: 'description', content: data.value?.description || 'Read our latest blog post about custom lapel pins, challenge coins, and promotional products.' },
    { hid: 'og:title', property: 'og:title', content: data.value?.title || 'Blog Article' },
    { hid: 'og:description', property: 'og:description', content: data.value?.description || 'Read our latest blog post' },
    { hid: 'og:image', property: 'og:image', content: data.value?.image || '/thumbnail.png' },
    { hid: 'og:type', property: 'og:type', content: 'article' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<style scoped>
</style>


