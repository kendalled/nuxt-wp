# Blog Layout Implementation Guide for Nuxt.js Projects

This guide explains how to replicate the blog layout and architecture from this project into another Nuxt.js project. The system uses Storyblok CMS for content management and Tailwind CSS for styling.

## Overview

The blog system consists of:
- **Blog listing page** (`/blog`) showing blog cards in a grid
- **Individual blog article pages** (`/blog/[slug]`) with dynamic content
- **Storyblok CMS integration** for content management
- **Modular component system** for different content layouts
- **Pagination** for blog listing
- **SEO optimization** with meta tags and structured data

## Required Dependencies

First, ensure your Nuxt.js project has these dependencies installed:

```json
{
  "dependencies": {
    "storyblok-nuxt": "^1.x.x",
    "@nuxtjs/tailwindcss": "^4.x.x"
  }
}
```

## Nuxt Configuration

Add to your `nuxt.config.js`:

```javascript
export default {
  target: 'static', // or 'server' depending on your needs
  
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  
  modules: [
    ['storyblok-nuxt', {
      accessToken: 'YOUR_STORYBLOK_ACCESS_TOKEN',
      cacheProvider: 'memory'
    }]
  ],
  
  components: true
}
```

## 1. Blog Pages Structure

### Blog Index Page (`pages/blog/index.vue`)

```vue
<template>
  <div class="min-h-screen overflow-y-hidden">
    <BlogGrid2 />
    <TailFoot :location="false" />
  </div>
</template>

<script>
import BlogGrid2 from '~/components/BlogGrid2'
import TailFoot from '~/components/TailFoot'

export default {
  components: {
    BlogGrid2,
    TailFoot
  },
  data() {
    return { total: 0, open: false }
  },
  head() {
    return {
      title: 'Blog Posts | Your Site Name',
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: 'View our latest blog posts at a glance. Expert insights and advice on your industry topics.' 
        }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://yoursite.com/blog' }
      ]
    }
  }
}
</script>

<style scoped>
.blogFooter {
  flex-shrink: 0;
}
main {
  flex: 1 0 auto;
}
</style>
```

### Individual Blog Article Page (`pages/blog/_slug.vue`)

```vue
<template>
  <div>
    <main>
      <component 
        :is="story.content.component" 
        v-if="story.content.component" 
        :key="story.content._uid" 
        :blok="story.content" 
      />
    </main>
    <Author />
    <DarkFoot />
  </div>
</template>

<script>
import Author from '~/components/Author'
import DarkFoot from '~/components/DarkFoot'
import storyblokLivePreview from '~/mixins/storyblokLivePreview'

export default {
  components: {
    Author,
    DarkFoot
  },
  mixins: [storyblokLivePreview],
  asyncData(context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    
    return context.app.$storyapi.get(`cdn/stories/blog/${context.params.slug}`, {
      version
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  data() {
    return { story: { content: {} } }
  },
  head() {
    const title = this.story.name + ' | Blog | Your Site Name'
    const description = this.story.content.teaserText || 'Read our latest blog post about ' + this.story.name
    
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: 'https://yoursite.com/blog/' + this.story.slug },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ],
      link: [
        { rel: 'canonical', href: 'https://yoursite.com/blog/' + this.story.slug }
      ]
    }
  }
}
</script>

<style>
.blog__body > p {
  @apply leading-relaxed;
  color: #374151;
}
.blog__body > h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
```

## 2. Main Blog Grid Component (`components/BlogGrid2.vue`)

```vue
<template>
  <main>
    <div class="relative px-4 pt-12 pb-20 bg-gray-50 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            From the blog
          </h1>
          <h2 class="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Weekly articles, tutorials, and guides. Don't miss out on our weekly blog updates.
          </h2>
        </div>
        
        <!-- Loading Skeleton -->
        <div v-if="showSkeletons" class="relative grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <span v-for="i in 3" :key="i" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
              <div class="object-cover w-full h-48 bg-gray-200 animate-pulse" />
            </div>
            <div class="flex flex-col justify-between flex-1 px-6 pb-6 bg-white pt-7">
              <div class="flex-1">
                <h3 class="w-1/4 h-4 mb-2 bg-gray-400 animate-pulse" />
                <div class="block">
                  <h2 class="w-1/2 h-6 mb-4 bg-gray-500 animate-pulse" />
                  <p class="w-full h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse" />
                  <p class="w-2/3 h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse" />
                  <p class="w-1/2 h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse" />
                </div>
              </div>
              <div class="flex items-center mt-6">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-gray-400 rounded-full animate-pulse" />
                </div>
                <div class="flex flex-col items-start justify-center w-full h-auto ml-3 space-y-3">
                  <p class="w-1/3 h-3 leading-relaxed bg-gray-500 animate-pulse" />
                  <p class="w-1/4 h-3 leading-relaxed bg-gray-400 animate-pulse" />
                </div>
              </div>
            </div>
          </span>
        </div>

        <!-- Blog Posts Grid -->
        <div v-else class="relative grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <span v-for="blogPost in correctSet" :key="blogPost.content.body[0].text" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
              <img class="object-cover w-full h-48" :src="blogPost.content.image" alt="">
            </div>
            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
              <div class="flex-1">
                <p class="text-sm font-medium leading-5 text-blue-600">
                  <span class="hover:underline">Blog</span>
                </p>
                <nuxt-link :to="'blog/' + blogPost.content.body[0].slug" class="block">
                  <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                    {{ blogPost.content.body[0].text }}
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    {{ blogPost.content.teaserText }}...
                  </p>
                </nuxt-link>
              </div>
              <div class="flex items-center mt-6">
                <div class="flex-shrink-0">
                  <img class="w-10 h-10 rounded-full" src="~/static/author.jpg" alt="">
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium leading-5 text-gray-900">
                    <a href="#" class="hover:underline">Author Name</a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2024-03-16">Mar 16, 2024</time>
                    <span class="mx-1">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
    <BlogFooter :selected="selected" @update="updateSelected" />
  </main>
</template>

<script>
import BlogFooter from '~/components/BlogFooter'

export default {
  name: 'BlogGrid2',
  components: {
    BlogFooter
  },
  data() {
    return {
      loaded: false,
      selected: 1,
      result: null
    }
  },
  async fetch() {
    const version = this.$nuxt.context.query._storyblok || this.$nuxt.context.isDev ? 'draft' : 'published'
    
    this.result = await this.$nuxt.context.app.$storyapi.get('cdn/stories/', {
      version,
      starts_with: 'blog'
    }).then((res) => {
      return { result: res.data }
    }).catch((res) => {
      this.$nuxt.context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  computed: {
    correctSet() {
      if (this.result) {
        const chunkArray = function (myOriginalArray, chunkSize) {
          const results = []
          const myArray = [...myOriginalArray]
          
          while (myArray.length) {
            results.push(myArray.splice(0, chunkSize))
          }
          
          return results
        }
        return chunkArray(this.result.result.stories, 3).reverse()[this.selected - 1]
      } else {
        return []
      }
    },
    showSkeletons() {
      return (this.result === null)
    }
  },
  methods: {
    updateSelected(val) {
      this.selected = val
    }
  }
}
</script>
```

## 3. Blog Content Components

### Content Only Component (`components/ContentOnly.vue`)

```vue
<template>
  <div v-editable="blok" class="w-full px-4 py-2 mx-auto prose sm:py-5 max-w-7xl sm:px-6 lg:px-8" v-html="blok.value.content" />
</template>

<script>
export default {
  props: ['blok']
}
</script>
```

### Content with Image Component (`components/ContentImage.vue`)

```vue
<template>
  <div class="w-full h-auto py-2 bg-white">
    <div v-editable="blok" class="flex flex-col w-full mx-auto max-w-7xl lg:flex-row lg:justify-between lg:pr-4">
      <!-- Desktop image -->
      <div class="items-center justify-center hidden rounded-sm lg:flex lg:w-2/5">
        <div class="hidden h-auto lg:block lg:w-full">
          <img class="object-cover w-auto h-64 mx-auto rounded" :src="blok.image" alt="Blog image">
        </div>
      </div>
      <!-- Mobile image -->
      <img class="object-cover w-auto h-64 mx-auto mb-4 lg:hidden" :src="blok.image" alt="Blog image">
      <div class="w-full px-4 prose sm:px-6 lg:px-8 lg:w-3/5 max-w-none" v-html="blok.markdown.content" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
```

### Blog Hero Component (`components/BlogHero.vue`)

```vue
<template>
  <div v-if="blok.active" v-editable="blok" class="relative flex items-center justify-center w-full h-56 mt-4 overflow-hidden bg-fixed">
    <img :src="blok.image" class="absolute object-cover w-auto h-auto bg-fixed">
  </div>
</template>

<script>
export default {
  name: 'BlogHero',
  props: ['blok']
}
</script>
```

## 4. Author Component (`components/Author.vue`)

```vue
<template>
  <section class="bg-white">
    <div class="flex flex-col justify-between max-w-screen-xl px-4 py-12 mx-auto md:flex-row sm:px-6 md:py-16 lg:px-8 lg:py-12">
      <div class="flex-col w-full md:w-1/2">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Want to learn more?
          <br>
          <span class="text-blue-600">Get started today.</span>
        </h2>
        <div class="flex mt-8">
          <div class="inline-flex rounded-md shadow">
            <a href="/contact" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:ring">
              Get started
            </a>
          </div>
          <div class="inline-flex ml-3">
            <a href="/" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-blue-700 transition duration-150 ease-in-out bg-blue-100 border border-transparent rounded-md hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring focus:border-blue-300">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div class="flex-col w-full mt-8 md:w-1/3">
        <p class="text-sm font-semibold tracking-wider text-gray-600 uppercase">
          written by
        </p>
        <div class="mt-1 sm:flex">
          <a href="#" class="flex items-center no-underline">
            <div class="flex-shrink-0">
              <img class="w-12 h-12 transition-colors duration-200 border-2 border-gray-400 rounded-full hover:border-indigo-400" src="~/static/author.jpg" alt="">
            </div>
            <div class="ml-3">
              <p class="font-semibold leading-tight text-gray-900">Author Name</p>
              <p class="text-sm leading-tight text-gray-500">Author Title</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
```

## 5. Storyblok Live Preview Mixin (`mixins/storyblokLivePreview.js`)

```javascript
export default {
  mounted() {
    const vm = this
    if (process.browser) {
      vm.$storybridge.on(['published', 'change'], (event) => {
        if (!event.slugChanged) {
          // Reload the page on save events
          this.$nuxt.$router.go({
            path: this.$nuxt.$router.currentRoute,
            force: true
          })
        }
      })
    }
  }
}
```

## 6. Component Registration (`plugins/components.js`)

```javascript
import Vue from 'vue'
import BlogHero from '@/components/BlogHero.vue'
import ContentOnly from '@/components/ContentOnly.vue'
import ContentImage from '@/components/ContentImage.vue'

Vue.component('BlogHero', BlogHero)
Vue.component('ContentOnly', ContentOnly)
Vue.component('ContentImage', ContentImage)
```

Remember to add this plugin to your `nuxt.config.js`:

```javascript
plugins: [
  {
    src: '~/plugins/components.js',
    defer: true
  }
]
```

## Implementation Steps

1. **Install dependencies** and configure Nuxt.js as shown above
2. **Set up Storyblok** with your access token
3. **Create the page structure** (`pages/blog/` directory with `index.vue` and `_slug.vue`)
4. **Add all components** to your `components/` directory
5. **Create the mixin** for Storyblok live preview
6. **Register components** with the plugins file
7. **Configure Storyblok content types** in your Storyblok space to match the component structure
8. **Style with Tailwind CSS** (ensure @tailwindcss/typography is installed for prose classes)

## Storyblok Content Structure

In Storyblok, create these content types:
- **Blog** story type with fields: `image`, `teaserText`, `body` (blocks field containing ContentOnly, ContentImage, BlogHero components)
- **ContentOnly** component with `value` (rich text field)
- **ContentImage** component with `image` (asset field) and `markdown` (rich text field)
- **BlogHero** component with `image` (asset field) and `active` (boolean field)

This structure provides a flexible, SEO-optimized blog system that can be easily adapted to any Nuxt.js project.