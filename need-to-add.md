# Features to Re-add After Reset

This document contains all the features and changes that were added after the working commit `abc5ac0` (August 19th). Each item should be added one at a time and deployed to ensure no single change breaks the Netlify deployment.

**IMPORTANT**: Test deployment after each checked item to identify any problematic changes.

## Blog System Improvements

### Phase 1: Basic Blog Structure
- [ ] **Blog Layout System** - Create new overlapped article layout with correct slugs

Create `pages/blog/[slug].vue` with this exact content:
```vue
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
```

### Phase 2: Blog Components  

- [ ] **BlogHeader Component** - Create `components/BlogHeader.vue`

**Complete BlogHeader with gradient hero design:**
```vue
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
```

- [ ] **BlogContent Component** - Create `components/BlogContent.vue`

**Complete BlogContent with 3-column layout, TOC, and sidebars - INCLUDES COMPLEX STYLING:**
```vue
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
```

### Phase 3: Blog Content
- [ ] **New Blog Article** - Add `content/blog/history-of-nursing-pins.md`

**Complete nursing pins article with full frontmatter:**
```markdown
---
title: "The History of Nursing Pins: Symbols of Dedication and Excellence"
description: "Explore the rich tradition of nursing pins, from Florence Nightingale to modern healthcare recognition."
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
author: "Dani Bucaro"
date: "2024-03-12"
readTime: "7 min read"
slug: "history-of-nursing-pins"
category: "Healthcare"
---

# The History of Nursing Pins: Symbols of Dedication and Excellence

Nursing pins represent one of the most enduring traditions in healthcare, symbolizing the dedication, professionalism, and compassionate care that define the nursing profession. These small but meaningful emblems carry a rich history that spans over a century.

## Origins of Nursing Pins

### The Florence Nightingale Legacy
The tradition of nursing pins can be traced back to Florence Nightingale and the establishment of formal nursing education. As nursing evolved from an informal caregiving role to a professional discipline, the need for recognition and identification became apparent.

### Early School Pins (1880s-1900s)
The first nursing school pins appeared in the late 1800s as nursing schools sought to:
- Identify their graduates
- Create institutional pride
- Establish professional standards
- Honor academic achievement

## Evolution Through the Decades

### The Professional Era (1900-1940)
During this period, nursing pins became standardized symbols of professional competence:
- **Design Elements**: Featured school crests, nursing symbols, and graduation years
- **Materials**: Typically made from gold or silver
- **Significance**: Represented completion of rigorous training programs
- **Tradition**: Pinning ceremonies became formal graduation events

### Wartime Service (1940s-1950s)
World War II and the Korean War elevated the status of nursing pins:
- Military nurses wore special service pins
- Red Cross and civilian hospital pins gained prominence
- Pins became symbols of wartime service and sacrifice
- International nursing recognition programs developed

### Modern Healthcare (1960s-Present)
As healthcare evolved, so did nursing pin traditions:
- Specialty nursing pins emerged
- Advanced degree recognition pins
- Hospital-specific service pins
- Achievement and milestone pins

## Types of Nursing Pins

### School Graduation Pins
- **Traditional Design**: Features school emblems and nursing symbols
- **Personalization**: Often includes graduation year and student name
- **Materials**: Gold, silver, or alternative metals
- **Significance**: Marks completion of nursing education

### Service Recognition Pins
- **Years of Service**: Milestone pins for 5, 10, 15+ years
- **Department Specific**: ICU, ER, Pediatrics, Surgery pins
- **Achievement Awards**: Excellence in patient care, leadership
- **Continuing Education**: Advanced certification recognition

### Specialty Nursing Pins
- **Clinical Specialties**: Oncology, cardiology, obstetrics
- **Advanced Practice**: Nurse practitioner, nurse anesthetist
- **Leadership Roles**: Charge nurse, supervisor, manager
- **Professional Organizations**: ANA, specialty society pins

## Design Elements and Symbolism

### Traditional Nursing Symbols
- **Lamp of Learning**: Represents Florence Nightingale's lamp
- **Red Cross**: Universal symbol of healthcare and aid
- **Caduceus**: Medical symbol (though more associated with physicians)
- **Nursing Cap**: Traditional symbol of the profession
- **Hands**: Representing caring and healing touch

### Modern Design Trends
- **Contemporary Aesthetics**: Cleaner, more minimalist designs
- **Inclusive Imagery**: Representing diversity in nursing
- **Technology Integration**: QR codes for digital portfolios
- **Sustainable Materials**: Eco-friendly manufacturing options

## The Pinning Ceremony Tradition

### Historical Significance
The nursing pinning ceremony is a time-honored tradition that:
- Marks the transition from student to professional
- Honors the heritage of nursing
- Creates a sense of belonging to the profession
- Recognizes academic achievement

### Modern Ceremonies
Today's pinning ceremonies often include:
- Recitation of nursing oaths or pledges
- Candle lighting ceremonies
- Recognition of academic excellence
- Family participation and celebration
- Faculty and alumni involvement

## Cultural Impact and Recognition

### Professional Identity
Nursing pins serve multiple functions in professional identity:
- **Immediate Recognition**: Identifies nursing professionals
- **Institutional Affiliation**: Shows educational background
- **Career Progression**: Displays advancement and specialization
- **Professional Pride**: Represents commitment to excellence

### Patient Trust
Visible nursing pins help build patient confidence by:
- Demonstrating professional credentials
- Showing institutional affiliation
- Indicating specialized training
- Building trust through recognized symbols

## Manufacturing and Design Considerations

### Quality Standards
Professional nursing pins require:
- **Durable Materials**: Metals that withstand daily wear
- **Professional Appearance**: Polished, refined finish
- **Clear Imagery**: Readable text and distinct symbols
- **Secure Attachment**: Reliable pin backs and clasps

### Customization Options
Modern nursing pins offer:
- School-specific designs and colors
- Personalized engraving options
- Multiple size and finish choices
- Specialty symbols and emblems

## Challenges and Modern Adaptations

### Infection Control
Modern healthcare environments have influenced pin design:
- **Easy Cleaning**: Smooth surfaces for sanitization
- **Minimal Crevices**: Reducing bacteria harboring areas
- **Alternative Attachments**: Magnetic or clip-on options
- **Digital Alternatives**: QR codes and digital badges

### Changing Uniform Standards
As scrubs became standard, pin traditions adapted:
- Smaller, more subtle designs
- Clip-on alternatives to traditional pins
- Badge holder integration
- Temporary adhesive options

## The Future of Nursing Pins

### Digital Integration
Emerging trends include:
- **Smart Pins**: Embedded technology for identification
- **Digital Portfolios**: QR codes linking to credentials
- **Social Media Integration**: Sharing achievements online
- **Virtual Ceremonies**: Remote pinning events

### Sustainability Initiatives
Environmental consciousness is driving:
- Recycled metal usage
- Sustainable packaging
- Local manufacturing
- Rental program options for ceremonies

## Global Nursing Pin Traditions

### International Variations
Different countries have unique traditions:
- **United Kingdom**: Royal College of Nursing pins
- **Canada**: Provincial nursing association pins
- **Australia**: State registration pins
- **International**: WHO and global health organization pins

### Cultural Significance
Nursing pins represent:
- Professional standards across cultures
- Universal commitment to patient care
- International nursing solidarity
- Cross-cultural healthcare collaboration

## Conclusion

Nursing pins continue to serve as powerful symbols of professional dedication, educational achievement, and commitment to patient care. From their origins in the Florence Nightingale era to today's high-tech healthcare environments, these small emblems carry immense significance.

As the nursing profession continues to evolve, so too will the traditions surrounding nursing pins. Whether through traditional metal pins, digital badges, or future innovations, the core purpose remains unchanged: recognizing and honoring those who dedicate their lives to caring for others.

The nursing pin tradition represents more than mere decoration—it embodies the values, heritage, and ongoing commitment of the nursing profession to excellence in patient care. For new graduates, receiving their nursing pin marks not just the end of their education, but the beginning of their lifelong commitment to the noble profession of nursing.
```

## New Pages

### Contact System
- [ ] **Contact Page** - Create `pages/contact.vue`

**Complete contact page with Netlify form integration:**
```vue
<template>
  <div>
    <div class="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
      <div class="relative max-w-7xl mx-auto">
        <!-- Background decorative elements -->
        <svg class="absolute transform translate-x-1/2 left-full" width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="contactDots1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#contactDots1)" />
        </svg>
        
        <div class="text-center">
          <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Contact Us
          </h1>
          <p class="mt-4 text-lg leading-6 text-gray-500">
            Get in touch with our team for questions about your custom pins, coins, or keychains. We're here to help bring your ideas to life.
          </p>
        </div>

        <div class="mt-20">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            
            <!-- Contact Information -->
            <div>
              <div class="max-w-md mx-auto lg:mx-0">
                <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">Get in Touch</h2>
                <p class="mt-3 text-lg text-gray-500">Have questions about your order or need design assistance? Our experienced team is ready to help.</p>
                
                <div class="mt-8 space-y-6">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">Phone</p>
                      <p class="text-sm text-gray-500">(800) 482-9101</p>
                    </div>
                  </div>
                  
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">Email</p>
                      <p class="text-sm text-gray-500">info@lapelpinsandcoins.com</p>
                    </div>
                  </div>
                  
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">Business Hours</p>
                      <p class="text-sm text-gray-500">Monday - Friday: 8 AM - 6 PM EST</p>
                    </div>
                  </div>
                  
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">Address</p>
                      <p class="text-sm text-gray-500">6566 University Blvd<br>Winter Park, FL, 32746</p>
                    </div>
                  </div>
                </div>
                
                <!-- Quick Actions -->
                <div class="mt-8 border-t border-gray-200 pt-8">
                  <h3 class="text-lg font-medium text-gray-900">Quick Actions</h3>
                  <div class="mt-4 space-y-3">
                    <NuxtLink to="/quote" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Get a Quote
                    </NuxtLink>
                    <div class="md:inline-block md:ml-4">
                      <NuxtLink to="/feedback" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Send Feedback
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="mt-12 lg:mt-0">
              <div class="max-w-lg mx-auto lg:max-w-none">
                <form name="contact" method="POST" data-netlify="true" class="grid grid-cols-1 gap-y-6">
                  <div>
                    <label for="contact_name" class="block text-sm font-medium leading-5 text-gray-700">Name *</label>
                    <div class="relative mt-1 rounded-md shadow-sm">
                      <input
                        id="contact_name"
                        type="text"
                        required
                        name="Name"
                        class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="Your full name"
                      >
                    </div>
                  </div>

                  <div>
                    <label for="contact_email" class="block text-sm font-medium leading-5 text-gray-700">Email *</label>
                    <div class="relative mt-1 rounded-md shadow-sm">
                      <input
                        id="contact_email"
                        type="email"
                        required
                        name="Email"
                        class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="your@email.com"
                      >
                    </div>
                  </div>

                  <div>
                    <label for="contact_phone" class="block text-sm font-medium leading-5 text-gray-700">Phone</label>
                    <div class="relative mt-1 rounded-md shadow-sm">
                      <input
                        id="contact_phone"
                        type="tel"
                        name="Phone"
                        class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="(555) 123-4567"
                      >
                    </div>
                  </div>

                  <div>
                    <label for="contact_subject" class="block text-sm font-medium leading-5 text-gray-700">Subject *</label>
                    <div class="relative mt-1 rounded-md shadow-sm">
                      <select
                        id="contact_subject"
                        required
                        name="Subject"
                        class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      >
                        <option value="">Select a topic</option>
                        <option value="Quote Question">Quote Question</option>
                        <option value="Order Status">Order Status</option>
                        <option value="Design Help">Design Help</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Billing Question">Billing Question</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label for="contact_message" class="block text-sm font-medium leading-5 text-gray-700">Message *</label>
                    <div class="relative mt-1 rounded-md shadow-sm">
                      <textarea
                        id="contact_message"
                        required
                        name="Message"
                        rows="5"
                        class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700"
                    >
                      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TailFoot class="mt-12 border-t border-gray-200"/>
  </div>
</template>

<script>
import TailFoot from '~/components/TailFoot'

export default {
  name: 'Contact',
  components: { TailFoot },
  layout: 'blank',
  data() {
    return { showSuccess: false }
  },
  mounted() {
    if (this.$route.query.success === 'true') {
      this.showSuccess = true
    }
  },
  head() {
    return {
      title: 'Contact Us | Lapel Pins & Coins',
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Contact Lapel Pins & Coins for questions about custom pins, coins, and keychains. Call (800) 207-9872 or use our contact form. We\'re here to help with your custom orders.' 
        },
        { name: 'keywords', content: 'contact, custom pins, custom coins, keychains, support, help, customer service' }
      ],
      link: [
        { rel: 'canonical', href: 'https://lapelpinsandcoins.com/contact' }
      ]
    }
  }
}
</script>
```

## UI/UX Improvements

### Safety and Error Handling
- [ ] **Optional Chaining Updates** - Add null-safe operators throughout components
  - Add `?.` operators to prevent null reference errors: `data?.title`, `data?.image`, `data?.author`
  - Add fallback values using `|| 'default'` pattern: `data?.author || 'Dani Bucaro'`
  - Update components: BlogContent, BlogHeader, FullNav, FloatingBanner

### Navigation Improvements  
- [ ] **Navigation Link Fixes** - Update `components/FullNav.vue`
  - **SPECIFIC FIX**: Change line with `to="privacy"` to `to="/privacy"` (add missing slash)
  - Ensure all navigation links use absolute paths starting with `/`

### Banner Updates
- [ ] **FloatingBanner Component** - Update `components/FloatingBanner.vue`
  - **SPECIFIC CHANGE**: Replace Facebook messenger link `<a target="_blank" href="https://m.me/LapelPinsCoins">` 
  - **WITH**: `<NuxtLink to="/contact">`
  - **TEXT CHANGE**: Update text from "Need help?" to "Contact our support team."

### Form Enhancements  
- [ ] **Quote System Updates** - Update `components/QuoteWrapper.vue`
  - Add null-safe operators for coin pricing checks
  - Improve validation and error handling for quote calculations

## Configuration Files

### Git Configuration
- [ ] **Gitignore Updates** - Update `.gitignore`
  - Add this line at the end: 
  ```
  # Prompts  
  .prompts
  ```

## Testing Strategy

For each item above:
1. ✅ **Check the box** when implementing the feature
2. 🚀 **Deploy immediately** to Netlify after each change  
3. ✅ **Verify deployment succeeds** before moving to next item
4. 🔄 **If deployment fails**, revert that specific change and note the issue
5. 📝 **Document any problematic changes** for later investigation

## Deployment Commands

After each change:
```bash
git add .
git commit -m "feat: add [specific feature name]"
git push origin main
```

Check Netlify deployment status before proceeding to next item.

## Rollback Strategy

If any feature breaks deployment:
```bash
git revert HEAD  # Revert the problematic commit
git push origin main  # Deploy the revert
```

Then investigate the specific issue before attempting to re-add that feature.

## Notes

- **CRITICAL**: Do NOT upgrade Nuxt version - keep at working version
- **CRITICAL**: Do NOT add Nitro netlify preset to `nuxt.config.ts` 
- Start with simpler features first (gitignore, navigation fixes)
- Save complex features (blog system) for last
- Each deployment should be small and isolated
- All code above is the EXACT implementation that was working

## Current Status

✅ **Reset to working state** - `abc5ac0` (August 19th)  
⏳ **Ready to begin re-adding features** - Start with first unchecked item above