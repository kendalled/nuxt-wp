<template>
  <NuxtLayout>
    <article class="bg-white">
      <header class="relative isolate pt-16 sm:pt-24">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nuxt-link to="/blog" class="text-sm text-blue-600 hover:text-blue-500">← Back to blog</nuxt-link>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ data?.title }}</h1>
          <p v-if="data?.description" class="mt-3 text-lg leading-7 text-gray-600">{{ data.description }}</p>
          <div class="mt-4 flex items-center text-sm text-gray-500">
            <span>{{ formatDate(data?.date) }}</span>
            <span v-if="data?.readTime" class="mx-2">•</span>
            <span v-if="data?.readTime">{{ data.readTime }}</span>
            <span v-if="data?.author" class="mx-2">•</span>
            <span v-if="data?.author">{{ data.author }}</span>
          </div>
        </div>

        <div v-if="data?.image" class="relative mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div class="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10">
            <img :src="data.image" :alt="data.title" class="h-72 w-full object-cover sm:h-96" />
          </div>
        </div>
      </header>

      <!-- Overlap effect: content rises up under the image -->
      <div class="relative -mt-10 sm:-mt-16">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div class="rounded-xl bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5">
            <ContentRenderer v-if="data" :value="data" />
          </div>
        </div>
      </div>

      <footer class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <nuxt-link to="/blog" class="text-blue-600 hover:text-blue-500">← Read more articles</nuxt-link>
      </footer>
    </article>
  </NuxtLayout>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const { data } = await useAsyncData('blog-article', async () => {
  const slug = route.params.slug
  const path = Array.isArray(slug) ? ['/blog', ...slug].join('/') : `/blog/${slug}`
  const q = await queryContent(path).findOne()
  return q
})

function formatDate (dateString) {
  if (!dateString) return ''
  const d = new Date(dateString)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>