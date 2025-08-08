<template>
  <div class="min-h-screen bg-white">
    <main class="max-w-4xl mx-auto px-4 py-8">
      <article v-if="page" class="prose prose-lg max-w-none">
        <!-- Header -->
        <header class="mb-8">
          <div class="flex items-center text-sm text-gray-500 mb-4">
            <nuxt-link to="/blog" class="hover:text-gray-700">Blog</nuxt-link>
            <span class="mx-2">/</span>
            <span>{{ page.title }}</span>
          </div>
          
          <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ page.title }}</h1>
          
          <div class="flex items-center mb-6">
            <img class="w-12 h-12 rounded-full mr-4" src="/dani.jpg" :alt="page.author">
            <div>
              <p class="text-lg font-medium text-gray-900">{{ page.author }}</p>
              <div class="flex items-center text-gray-500">
                <time :datetime="page.date">{{ formatDate(page.date) }}</time>
                <span class="mx-2">·</span>
                <span>{{ page.readTime }}</span>
              </div>
            </div>
          </div>
          
          <img v-if="page.image" class="w-full h-64 object-cover rounded-lg mb-8" :src="page.image" :alt="page.title">
        </header>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
          <nuxt-content :document="page" />
        </div>
      </article>

      <!-- Loading state -->
      <div v-else class="animate-pulse">
        <div class="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div class="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
        <div class="h-64 bg-gray-300 rounded mb-8"></div>
        <div class="space-y-3">
          <div class="h-4 bg-gray-300 rounded"></div>
          <div class="h-4 bg-gray-300 rounded w-5/6"></div>
          <div class="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
      </div>
    </main>

    <TailFoot :location="false" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content('blog', params.slug).fetch()
      return { page }
    } catch (err) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  
  head() {
    return {
      title: `${this.page.title} | Lapel Pins & Coins Blog`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.page.image
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://lapelpinsandcoins.com/blog/${this.page.slug}`
        }
      ]
    }
  },

  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style>
/* Custom prose styling for blog content */
.prose {
  @apply text-gray-800;
}

.prose h1 {
  @apply text-3xl font-bold mt-8 mb-4 text-gray-900;
}

.prose h2 {
  @apply text-2xl font-semibold mt-6 mb-3 text-gray-900;
}

.prose h3 {
  @apply text-xl font-semibold mt-4 mb-2 text-gray-900;
}

.prose p {
  @apply mb-4 leading-relaxed;
}

.prose ul, .prose ol {
  @apply mb-4 pl-6;
}

.prose li {
  @apply mb-2;
}

.prose strong {
  @apply font-semibold text-gray-900;
}

.prose a {
  @apply text-blue-600 hover:text-blue-800;
}

.prose blockquote {
  @apply border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6;
}
</style>