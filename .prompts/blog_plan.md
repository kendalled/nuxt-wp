# Complete Blog Layout Conversion Plan

This document provides all HTML markup, CSS styles, and component structure needed to convert another project's blog to match the exact design and layout of this lapelpinsandcoins.com blog system.

## Architecture Overview

This blog system uses:
- **Nuxt.js 3** with Vue.js components
- **Tailwind CSS** for styling with custom configuration
- **Nuxt Content** for markdown file management
- **Storyblok CMS** integration for dynamic content
- **Component-based architecture** with reusable Vue components

## Core Blog Components Structure

### 1. Main Blog Page (`/pages/blog.vue`)

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
      title: 'Blog Posts | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'View our latest blog posts at a glance. From industry advice to quick history, we\'ve got you covered on lapel pins and other promotional goods.' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://lapelpinsandcoins.com/blog' }
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
.blog__overview {
  padding: 0 20px;
  max-width: 600px;
  margin: 40px auto 60px;
}
.blog__overview > p {
  line-height: 1.6;
}
.blog__detail-link {
  color: #000;
}
</style>
```

### 2. Blog Grid Component (`/components/BlogGrid2.vue`)

This is the main blog listing component with card-based design:

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
            Weekly articles, tutorials, and guides on the custom lapel pin and challenge coin industry. Don't miss out on our weekly blog updates.
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

        <!-- Actual Blog Cards -->
        <div v-else class="relative grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <span v-for="blogPost in correctSet" :key="blogPost.content.body[0].text" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
              <img class="object-cover w-full h-48" data-not-lazy :src="blogPost.content.image" alt="">
            </div>
            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
              <div class="flex-1">
                <p class="text-sm font-medium leading-5 text-blue-600">
                  <span class="hover:underline">
                    Blog
                  </span>
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
                  <a href="#">
                    <img class="w-10 h-10 rounded-full" src="/dani.jpg" data-not-lazy alt="">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium leading-5 text-gray-900">
                    <a href="#" class="hover:underline">
                      Dani Bucaro
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2020-03-16">
                      Mar 16, 2020
                    </time>
                    <span class="mx-1">
                      &middot;
                    </span>
                    <span>
                      6 min read
                    </span>
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

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

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
      return {
        result: res.data
      }
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

### 3. Blog Pagination Footer (`/components/BlogFooter.vue`)

```vue
<template>
  <div class="flex-col items-end w-full h-full bg-white">
    <div class="flex justify-between w-screen h-auto px-4 mx-auto mt-auto sm:px-12 max-w-7xl">
      <div class="flex flex-1 w-0">
        <a href="#" class="inline-flex items-center pt-4 pr-1 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400" @click.prevent="changeSelected(0)">
          <svg class="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Previous
        </a>
      </div>
      <div class="hidden md:flex">
        <a
          v-for="i in 3"
          :key="i"
          href="#"
          :class="[selected === i ? 'border-blue-500 text-blue-600 focus:text-blue-800 focus:border-blue-700' : 'border-transparent text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:border-gray-400']"
          class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 transition duration-150 ease-in-out border-t-2 focus:outline-none"
          @click.prevent="changeTo(i)"
        >
          {{ i }}
        </a>
        <span class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 border-t-2 border-transparent">
          ...
        </span>
        <a href="#" class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400">
          8
        </a>
      </div>
      <div class="flex justify-end flex-1 w-0">
        <a href="#" class="inline-flex items-center pt-4 pl-1 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400" @click.prevent="changeSelected(1)">
          Next
          <svg class="w-5 h-5 ml-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogFooter',
  props: {
    selected: {
      type: Number,
      default: 1
    }
  },
  methods: {
    changeSelected(way) {
      if (way === 0 && this.selected !== 1) {
        this.$emit('update', this.selected - 1)
      } else if (way === 1 && this.selected !== 3) {
        this.$emit('update', this.selected + 1)
      }
    },
    changeTo(val) {
      if (val <= 3 && val > 0) {
        this.$emit('update', val)
      }
    }
  }
}
</script>
```

## Individual Blog Article Page Structure

### 1. Dynamic Route Handler (`/pages/pins/[...slug].vue` and `/pages/coins/[...slug].vue`)

```vue
<template>
  <div>
    <main class="bg-gray-50">
      <!-- nuxt cms content -->
      <NuxtContentWrapper>
        <ScrollingPins />
      </NuxtContentWrapper>	
      <PinBenefits />
      <LargeTest />
      <TailPricing />
      <TailSteps class="-mt-14" />
      <Faq2 />
      <TailCta />
      <TailFoot />
    </main>
  </div>
</template>

<script setup>
let route = useRoute()
console.log(route)
</script>
```

### 2. Content Wrapper Component (`/components/NuxtContentWrapper.vue`)

```vue
<template>
  <ContentQuery :path="$route.path" v-if="$route.path" find="one" v-slot="{ data }">
    <ContentRenderer :value="data">
      <PinHeader :data="data" />
      <slot></slot>
      <NewColumnContent :data="data" />
      <PinContentImage :data="data"/>
    </ContentRenderer>
  </ContentQuery>
</template>
```

### 3. Article Header Component (`/components/PinHeader.vue`)

```vue
<template>
  <div class="bg-gradient-to-tr from-blue-950 to-blue-900 PinHeader">
    <VideoModal :open="showModal" @close="showModal = false" />
    <div class="px-4 py-10 mx-auto sm:py-16 max-w-7xl sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div>
          <p class="text-base font-semibold leading-6 tracking-wider text-blue-400 uppercase">
            Same-day reply
          </p>
          <h1 class="mt-2 text-3xl font-bold leading-10 text-white sm:text-4xl">
            {{ data.headline1 }}
          </h1>
          <p class="max-w-3xl mt-4 text-base leading-6 text-blue-100">
            {{ data.subHeading }}
          </p>
          <div class="flex flex-col items-start w-full mt-6 space-y-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a href="#" class="inline-flex items-start text-lg font-medium leading-6 group" @click.prevent="showModal = true">
              <svg class="flex-shrink-0 mr-3 text-blue-400 transition-colors duration-150 ease-in-out group-hover:text-blue-300 h-9 w-9" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <circle vector-effect="non-scaling-stroke" cx="12" cy="12" r="9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
              <span class="mt-1.5 text-blue-400 group-hover:text-blue-300 transition-colors ease-in-out duration-150">Watch a video overview</span>
            </a>
            <a href="tel:+18443954464" class="inline-flex items-start ml-1 text-lg font-medium leading-6 sm:ml-8 group">
              <svg class="flex-shrink-0 w-8 h-8 mr-3 text-blue-400 transition-colors duration-150 ease-in-out group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="mt-1.5 text-blue-400 group-hover:text-blue-300 transition-colors ease-in-out duration-150">+1 (844) 395-4464</span>
            </a>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="max-w-lg lg:ml-auto lg:max-w-xl">
            <a href="#" class="flex items-start px-5 py-4 text-lg font-medium leading-6 text-white transition duration-150 ease-in-out border border-blue-400 rounded-lg hover:bg-gray-800" @click.prevent="scrollSmooth('quote-steps')">
              <svg class="w-6 h-6 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Browse our plating options
              <div class="ml-auto mt-0.5 pl-4">
                <svg class="w-5 h-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </a>
            <a href="#" class="flex items-start px-5 py-3 mt-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-gray-700 rounded-lg hover:bg-gray-800">
              <svg class="mt-0.5 mr-4 h-5 w-5 text-gray-500" viewbox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
              See our unmatched pricing
            </a>
            <a href="#" class="flex items-start px-5 py-3 mt-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-gray-700 rounded-lg hover:bg-gray-800">
              <svg class="mt-0.5 mr-4 h-5 w-5 text-gray-500" viewbox="0 0 20 20" fill="currentColor">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              View our ordering process
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoModal from '~/components/VideoModal'
export default {
  name: 'PinHeader',
  components: {
    VideoModal
  },
  props: ['data'],
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    scrollSmooth(elem) {
      if (process.browser) {
        document.getElementById(elem).scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }
}
</script>
```

### 4. Article Content Component (`/components/NewColumnContent.vue`)

```vue
<template>
  <section class="overflow-hidden" style="background: linear-gradient(to bottom, #ffffff, #f9fafb);">
    <div class="relative px-4 pt-16 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
      <div class="mx-auto text-base max-w-prose lg:max-w-none">
        <p class="text-base font-semibold tracking-wide text-blue-600 uppercase leading-6">
          {{ data.teaser }}
        </p>
        <h2 class="mt-2 mb-8 text-3xl font-extrabold tracking-tight text-gray-900 leading-8 sm:text-4xl sm:leading-10">
          {{ data.headline2 }}
        </h2>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
          <!-- Decorative SVG -->
          <svg class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
            <figure>
              <div class="relative pb-7/12 lg:pb-0">
                <img
                  :src="data.img"
                  :alt="data.imgAlt"
                  width="1184"
                  height="1376"
                  style="height: 425px !important;"
                  class="lg:absolute inset-0 object-cover object-center w-full h-full bg-gray-100 rounded-lg shadow-lg lg:h-auto mt-10"
                >
              </div>
            </figure>
          </div>
        </div>
        <div>
          <div class="mx-auto text-base max-w-prose lg:max-w-none">
            <p class="mb-5 text-lg text-gray-500 leading-7">
              {{ data.grabber }}
            </p>
          </div>
          <div class="mx-auto text-gray-500 prose lg:max-w-none lg:row-start-1 lg:col-start-1">
            <p>
              {{ data.para1 }}
            </p>
            <p>
              {{ data.para2 }}
            </p>
            <p>{{ data.ulHeadline }}:</p>
            <ul>
              <li>{{ data.ex1 }}</li>
              <li>{{ data.ex2 }}</li>
              <li>{{ data.ex3 }}</li>
              <li><span>&hellip;</span> and so much more!</li>
            </ul>
            <h2>
              {{ data.headline3 }}
            </h2>
            <p>
              {{ data.para3 }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 leading-9 sm:text-4xl sm:leading-10 lg:leading-none">
            <span class="sm:hidden">Get started today.</span>
            <span class="hidden sm:block">Get started with a free quote.</span>
          </h2>
          <p class="mt-4 text-xl text-gray-500 leading-7">
            Simply describe your design and select some basic options. We'll handle the rest.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewColumnContent',
  props: ['data']
}
</script>
```

### 5. Content Image Component (`/components/PinContentImage.vue`)

```vue
<template>
  <div class="bg-gray-50">
    <section class="relative px-4 pt-6 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between w-full h-auto mx-auto rounded max-w-7xl lg:flex-row feature">
        <!-- Desktop Image -->
        <div class="items-center justify-center hidden h-auto -mt-4 lg:flex lg:w-2/5">
          <img :class="[isBig ? 'w-56 h-auto' : 'w-64 h-auto -ml-10']" :src="data.pciImg" :alt="data.pciAlt">
        </div>
        <div class="prose max-w-none lg:w-3/5">
          <h2>
            {{ data.pciHeadline }}
          </h2>
          <p>
            {{ data.pciPara1 }}
          </p>
          <p>
            {{ data.pciPara2 }}
          </p>
        </div>
        <!-- Mobile Image -->
        <div class="flex items-center justify-center w-full h-64 lg:hidden">
          <img class="object-cover w-64 h-auto mt-12 lg:hidden" :src="data.pciImg" :alt="data.pciAlt">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PinContentImage',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    isBig: {
      type: Boolean,
      default: true
    }
  }
}
</script>
```

## Content Structure (Markdown Files)

### Example Content File Structure

Content files should be placed in `/content/` directory with frontmatter like this:

```markdown
---
title: Soft Enamel Pins
description: Rachel
headline1: Soft enamel pins designed by professional artists.
subHeading: With over 20 years of experience, we make soft enamel pins more accessible than ever. Our ordering process includes free artwork and unlimited revisions. Get started in minutes with a free quote.

teaser: Most popular
headline2: Accurate designs at a low cost.
grabber: Soft enamel pins offer high-quality aesthetics with very fast production time.
img: https://images.unsplash.com/photo-1599458253790-0a01413f6db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=focalpoint&fp-x=.565&fp-y=.985&w=1184&h=1376&q=80
imgAlt: Soft enamel pins being held.
para1: When making soft enamel pins, a die is made first to stamp your design onto the metal base. After your pin has been stamped and cut, the plating process starts. Using either gold, silver, nickel, or black chrome, your design is beautifully plated and finished.
para2: Once plating is complete, the raised metal surfaces are polished to a mirror-like finish and the recessed areas are filled with colorful enamel paint. This enamel contrasts beautifully with the polished raised metal, resulting in a classic soft enamel lapel pin.
ulHeadline: Soft enamel pins are great for
ex1: Clubs
ex2: Sporting events
ex3: Fundraising campaigns
headline3: What production method should I choose?
para3: Most custom pin designs can be made into soft enamel pins, but this process often works best with designs that have minimal lines and clearly defined areas of color. These details are important because the colored areas sit slightly recessed, below the metal separations. If you're not sure which type of pin to choose, don't worry! Just ask, and we can provide suggestions from our experienced team.

pciHeadline: Why choose a soft enamel pin?
pciPara1: Custom pins are small, customizable, and easy to make. You can design them to be as classy as you need them to be, and they make for the perfect subtle fashion statement. Showing pride in your achievements or support for a certain cause or movement is easier than ever with lapel pins. They may be small, but custom pins can be huge for your fundraiser.
pciPara2: Pins are the perfect conversation starters. An attendee of your fundraiser would always have a story to tell about it, whether it's how and why they got the pin or what your organization stands for. It's a perfect way to get your brand out there and people talking about it. When it comes to selling them, pins are a perfect opportunity for a passerby to donate money to a good cause and walk away with something to show for it!
pciImg: https://a.storyblok.com/f/78493/350x350/e82e602a49/hokey-pock.png
pciAlt: Custom soft enamel pin
---

# Article Content

Your markdown content here will be processed by Nuxt Content.
```

## CSS Configuration (Tailwind)

### Required Tailwind Config (`tailwind.config.js`)

```javascript
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        'light-blue': colors.lightBlue,
        'cool-gray': colors.coolGray
      },
      typography: {},
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
```

## Color Scheme & Design System

### Primary Colors:
- **Blue shades**: `from-blue-950 to-blue-900` (gradient backgrounds)
- **Blue accent**: `text-blue-600`, `text-blue-400`, `text-blue-100`
- **Gray backgrounds**: `bg-gray-50`, `bg-gray-100`
- **Text colors**: `text-gray-900` (headings), `text-gray-500` (body)

### Typography Hierarchy:
- **Main headings**: `text-3xl font-extrabold sm:text-4xl`
- **Section headings**: `text-xl font-semibold`
- **Body text**: `text-base leading-6`
- **Small text**: `text-sm leading-5`

### Layout System:
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Grid**: `lg:grid lg:grid-cols-3 lg:gap-5` (blog listing)
- **Spacing**: Consistent padding with responsive breakpoints

### Interactive Elements:
- **Cards**: `rounded-lg shadow-lg overflow-hidden`
- **Hover states**: `hover:underline`, `hover:text-gray-700`
- **Transitions**: `transition duration-150 ease-in-out`
- **Focus states**: `focus:outline-none focus:text-gray-700`

### Responsive Design:
- **Mobile-first**: Base styles for mobile, then `sm:`, `lg:` breakpoints
- **Grid adaptation**: Single column on mobile, 3-column grid on desktop
- **Typography scaling**: Text sizes increase on larger screens
- **Image handling**: Different layouts for mobile vs desktop

## Implementation Instructions

### Step 1: Install Dependencies
```bash
npm install @nuxt/content @tailwindcss/typography @tailwindcss/forms
```

### Step 2: Setup Nuxt Content
Configure `nuxt.config.ts`:
```javascript
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    // Content configuration
  },
  css: ['~/assets/css/main.css']
})
```

### Step 3: Create Component Structure
1. Create all components in `/components/` directory
2. Set up the page routes in `/pages/`
3. Create content directory structure in `/content/`

### Step 4: Style Integration
1. Replace existing Tailwind config with provided configuration
2. Ensure Inter font is loaded
3. Add required CSS classes and animations

### Step 5: Content Migration
1. Convert existing blog posts to markdown format with required frontmatter
2. Add proper image assets to `/public/` directory
3. Update image paths and content references

### Step 6: Final Touches
1. Add skeleton loading states for better UX
2. Implement proper SEO meta tags
3. Test responsive design across all breakpoints
4. Ensure accessibility compliance

This plan provides all the necessary HTML markup, Vue components, CSS styling, and structural information needed to exactly replicate the lapelpinsandcoins.com blog design and functionality.