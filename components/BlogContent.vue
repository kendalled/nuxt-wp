<template>
  <article class="relative">
    <!-- Featured Image -->
    <div v-if="data?.image" class="relative -mt-16 mb-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          <img 
            :src="data.image" 
            :alt="data?.title || 'Blog post'" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </div>

    <!-- Article Content with Sidebars -->
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          
          <!-- Left Sidebar - Table of Contents -->
          <div class="hidden lg:block lg:col-span-3">
            <div class="sticky top-8">
              <!-- Back to Blog -->
              <div class="mb-6">
                <nuxt-link 
                  to="/blog" 
                  class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to blog home
                </nuxt-link>
              </div>

              <!-- Table of Contents -->
              <div v-if="tableOfContents.length > 0" class="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 class="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                  <svg class="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Table of contents
                </h2>
                <nav>
                  <ul class="space-y-3">
                    <li v-for="heading in tableOfContents" :key="heading.id">
                      <a 
                        :href="`#${heading.id}`"
                        :class="[
                          'block text-sm transition-colors duration-200 hover:text-blue-600',
                          heading.level === 2 ? 'text-gray-900 font-medium' : 'text-gray-600 pl-4'
                        ]"
                      >
                        {{ heading.text }}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <!-- Share Section -->
              <div class="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 class="text-sm font-semibold text-gray-900 mb-4">Share</h3>
                <div class="flex gap-3">
                  <a 
                    :href="shareUrls.twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    title="Share on Twitter"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a 
                    :href="shareUrls.facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    title="Share on Facebook"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    :href="shareUrls.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    title="Share on LinkedIn"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-6">
            <!-- Enhanced Article Content -->
            <div class="prose prose-lg prose-blue max-w-none">
              <ContentRenderer v-if="data" :value="data" />
            </div>

            <!-- Article Footer -->
            <div class="mt-16 pt-8 border-t border-gray-200">
              <div class="flex items-center">
                <img 
                  :src="authorImage" 
                  :alt="data?.author || 'Author'"
                  class="w-12 h-12 rounded-full border-2 border-gray-200"
                >
                <div class="ml-4">
                  <h3 class="text-sm font-semibold text-gray-900">{{ data?.author || 'Dani Bucaro' }}</h3>
                  <p class="text-sm text-gray-600">Content Specialist</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Sidebar - CTA -->
          <div class="hidden lg:block lg:col-span-3">
            <div class="sticky top-8 space-y-6">
              <!-- Try Free CTA -->
              <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl">
                <div class="text-center">
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Try Lapel Pins & Coins<br>for free
                  </h3>
                  <p class="text-sm text-gray-600 mb-6">
                    Click below to get your free quote and see why thousands trust us with their custom pins and coins.
                  </p>
                  <nuxt-link 
                    to="/quote"
                    class="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Get Free Quote →
                  </nuxt-link>
                </div>
              </div>

              <!-- Contact CTA -->
              <div class="p-6 bg-white border border-gray-200 rounded-2xl">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                <div class="space-y-3">
                  <a 
                    href="tel:+18443954464"
                    class="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                  >
                    <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div class="text-sm font-medium text-gray-900">Call Us</div>
                      <div class="text-xs text-gray-500">(844) 395-4464</div>
                    </div>
                  </a>
                  
                  <nuxt-link 
                    to="/feedback"
                    class="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                  >
                    <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <div>
                      <div class="text-sm font-medium text-gray-900">Send Message</div>
                      <div class="text-xs text-gray-500">Get support</div>
                    </div>
                  </nuxt-link>
                </div>
              </div>

              <!-- Popular Products -->
              <div class="p-6 bg-white border border-gray-200 rounded-2xl">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Popular Products</h3>
                <div class="space-y-3">
                  <nuxt-link 
                    to="/pins"
                    class="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div class="text-sm font-medium text-gray-900">Custom Lapel Pins</div>
                    <div class="text-xs text-gray-500">Starting at $0.79 each</div>
                  </nuxt-link>
                  <nuxt-link 
                    to="/coins"
                    class="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div class="text-sm font-medium text-gray-900">Challenge Coins</div>
                    <div class="text-xs text-gray-500">Starting at $2.49 each</div>
                  </nuxt-link>
                  <nuxt-link 
                    to="/keychains"
                    class="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div class="text-sm font-medium text-gray-900">Custom Keychains</div>
                    <div class="text-xs text-gray-500">Starting at $1.29 each</div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogContent',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tableOfContents: []
    }
  },
  computed: {
    authorImage() {
      return this.data?.authorImage || '/dani.jpg'
    },
    shareUrls() {
      const url = encodeURIComponent(window?.location?.href || '')
      const title = encodeURIComponent(this.data?.title || '')
      
      return {
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
      }
    }
  },
  mounted() {
    this.generateTableOfContents()
  },
  methods: {
    generateTableOfContents() {
      if (process.client) {
        const articleContent = document.querySelector('.prose')
        if (articleContent) {
          const headings = articleContent.querySelectorAll('h2, h3')
          this.tableOfContents = Array.from(headings).map((heading, index) => {
            const id = heading.id || `heading-${index}`
            if (!heading.id) {
              heading.id = id
            }
            return {
              id,
              text: heading.textContent,
              level: parseInt(heading.tagName.charAt(1))
            }
          })
        }
      }
    }
  }
}
</script>

<style>
/* Clean Typography Styles - PRESERVE ALL STYLING */
.prose-blue h1 { @apply text-3xl font-bold text-gray-900 mb-3 mt-0; }
.prose-blue h2 { @apply text-2xl font-bold text-gray-900 mb-6 mt-12; }
.prose-blue h3 { @apply text-xl font-semibold text-gray-900 mb-4 mt-10; }
.prose-blue h4 { @apply text-lg font-semibold text-gray-900 mb-3 mt-8; }
.prose-blue p { @apply text-gray-700 leading-7 mb-6 text-base; }
.prose-blue a { @apply text-gray-700 hover:text-gray-900 font-medium no-underline hover:underline transition-all duration-200; }
.prose-blue ul { @apply mb-8 mt-6; }
.prose-blue ol { @apply mb-8 mt-6; }
.prose-blue li { @apply mb-2 text-gray-700 leading-7; }
.prose-blue ul > li { @apply pl-2; }
.prose-blue ol > li { @apply pl-2; }
.prose-blue li > p { @apply mb-2; }
.prose-blue blockquote { @apply border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 rounded-r-lg; }
.prose-blue blockquote p { @apply text-blue-900 font-medium italic mb-0 text-base; }
.prose-blue img { @apply rounded-lg shadow-lg my-10; }
.prose-blue code { @apply bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono; }
.prose-blue pre { @apply bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-8; }
.prose-blue pre code { @apply bg-transparent text-gray-100 p-0; }
.prose-blue strong { @apply font-semibold text-gray-900; }
.prose-blue em { @apply italic text-gray-700; }
.prose-blue > * + * { margin-top: 0; }
.prose-blue > p + p { @apply mt-6; }
.prose-blue > h2 + p { @apply mt-6; }
.prose-blue > h3 + p { @apply mt-4; }
</style>