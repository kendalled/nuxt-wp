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
        <div v-if="showSkeletons" class="relative grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <!-- TODO: PAGINATE PROPERLY KENDALL, remove random v-ifs -->
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
                  <a href="#">
                    <div class="w-10 h-10 bg-gray-400 rounded-full animate-pulse" />
                  </a>
                </div>
                <div class="flex flex-col items-start justify-center w-full h-auto ml-3 space-y-3">
                  <!-- author -->
                  <p class="w-1/3 h-3 leading-relaxed bg-gray-500 animate-pulse" />
                  <!-- date and length -->
                  <p class="w-1/4 h-3 leading-relaxed bg-gray-400 animate-pulse" />
                </div>
              </div>
            </div>

          </span>
        </div>

        <div v-else class="relative grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <article v-for="blogPost in blogPosts" :key="blogPost.slug" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
              <img class="object-cover w-full h-48" :src="blogPost.image" :alt="blogPost.title">
            </div>
            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
              <div class="flex-1">
                <p class="text-sm font-medium leading-5 text-blue-600">
                  <span class="hover:underline">
                    Blog
                  </span>
                </p>
                <nuxt-link :to="'/blog/' + blogPost.slug" class="block">
                  <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                    {{ blogPost.title }}
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    {{ blogPost.description }}
                  </p>
                </nuxt-link>
              </div>
              <div class="flex items-center mt-6">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img class="w-10 h-10 rounded-full" src="/dani.jpg" alt="Dani Bucaro">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium leading-5 text-gray-900">
                    <a href="#" class="hover:underline">
                      {{ blogPost.author }}
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time :datetime="blogPost.date">
                      {{ formatDate(blogPost.date) }}
                    </time>
                    <span class="mx-1">
                      &middot;
                    </span>
                    <span>
                      {{ blogPost.readTime }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <!-- <PaginateIcon @update="updateSelected" /> -->
      </div>
    </div>
    <BlogFooter :selected="selected" @update="updateSelected" />
  </main>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
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
  data () {
    return {
      loaded: false,
      selected: 1,
      blogPosts: []
    }
  },
  async fetch () {
    try {
      this.blogPosts = await $content('blog')
        .sortBy('date', 'desc')
        .fetch()
    } catch (error) {
      console.error('Error fetching blog posts:', error)
    }
  },
  computed: {
    showSkeletons () {
      return this.blogPosts.length === 0
    }
  },
  methods: {
    updateSelected (val) {
      this.selected = val
    },
    formatDate (dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  }
}
</script>
