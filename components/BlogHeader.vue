<template>
  <div class="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
    <div class="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-transparent to-indigo-900/80" />
    
    <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="text-center">
        <nuxt-link 
          to="/blog" 
          class="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors duration-200 text-sm font-medium mb-8"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </nuxt-link>
        
        <div class="space-y-4">
          <div class="flex justify-center">
            <span class="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/20">
              {{ data?.category || 'Blog' }}
            </span>
          </div>
          
          <h1 class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight max-w-4xl mx-auto">
            {{ data?.title || 'Blog Post' }}
          </h1>
          
          <p v-if="data?.description" class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {{ data.description }}
          </p>
          
          <div class="flex items-center justify-center gap-6 text-sm text-blue-200 pt-6">
            <div class="flex items-center gap-2">
              <img 
                :src="authorImage" 
                :alt="data?.author || 'Author'"
                class="w-8 h-8 rounded-full border-2 border-blue-400/20"
              >
              <span>{{ data?.author || 'Dani Bucaro' }}</span>
            </div>
            <span class="text-blue-400">•</span>
            <time>{{ formatDate(data?.date) }}</time>
            <span v-if="data?.readTime" class="text-blue-400">•</span>
            <span v-if="data?.readTime">{{ data.readTime }}</span>
          </div>
        </div>
      </div>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
        <nuxt-link 
          to="/quote"
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-900 bg-white hover:bg-blue-50 transition-colors duration-200 shadow-lg"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Get Free Quote
        </nuxt-link>
        <a 
          href="tel:+18443954464"
          class="inline-flex items-center justify-center px-6 py-3 border border-blue-400/30 text-base font-medium rounded-lg text-blue-200 hover:text-white hover:bg-blue-800/50 transition-colors duration-200"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (844) 395-4464
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogHeader',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    authorImage() {
      return this.data?.authorImage || '/dani.jpg'
    }
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return ''
      const d = new Date(dateString)
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
}
</script>

<style scoped>
.bg-grid-white\/\[0\.02\] {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
}
</style>