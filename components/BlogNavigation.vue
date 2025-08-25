<template>
  <div class="bg-gray-50 border-y border-gray-200">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between">
        <!-- Previous Article -->
        <div class="flex-1">
          <nuxt-link 
            v-if="previousArticle"
            :to="`/blog/${previousArticle.slug}`"
            class="group flex items-center max-w-md p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
          >
            <div class="flex-shrink-0 mr-4">
              <svg class="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Previous</p>
              <p class="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                {{ previousArticle.title }}
              </p>
            </div>
          </nuxt-link>
        </div>

        <!-- Back to Blog -->
        <div class="flex-shrink-0 mx-8">
          <nuxt-link 
            to="/blog"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0l-4-4m4 4l-4 4" />
            </svg>
            All Articles
          </nuxt-link>
        </div>

        <!-- Next Article -->
        <div class="flex-1 flex justify-end">
          <nuxt-link 
            v-if="nextArticle"
            :to="`/blog/${nextArticle.slug}`"
            class="group flex items-center max-w-md p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
          >
            <div class="min-w-0 flex-1 text-right">
              <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Next</p>
              <p class="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                {{ nextArticle.title }}
              </p>
            </div>
            <div class="flex-shrink-0 ml-4">
              <svg class="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogNavigation',
  props: {
    currentSlug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      previousArticle: null,
      nextArticle: null
    }
  },
  async mounted() {
    await this.loadAdjacentArticles()
  },
  methods: {
    async loadAdjacentArticles() {
      try {
        // Get all blog articles
        const { data: articles } = await $fetch('/api/_content/query', {
          params: {
            where: JSON.stringify({ _path: { $regex: '^/blog' }, _draft: { $ne: true } }),
            sort: JSON.stringify([{ date: -1 }]),
            only: JSON.stringify(['title', 'slug', '_path', 'date'])
          }
        })

        if (articles && articles.length > 0) {
          const currentIndex = articles.findIndex(article => 
            article.slug === this.currentSlug || 
            article._path.endsWith(this.currentSlug)
          )

          if (currentIndex !== -1) {
            this.previousArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null
            this.nextArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
          }
        }
      } catch (error) {
        console.error('Error loading adjacent articles:', error)
      }
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>