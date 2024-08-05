<template>
    <!-- TODO: fix for seo -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div v-show="opened" :ref="category" v-click-outside="vcoConfig" class="absolute inset-x-0 z-20 hidden transform shadow-lg md:block">
        <div class="absolute inset-0 flex">
          <div class="w-1/2 bg-white" />
          <div class="w-1/2 bg-gray-50" />
        </div>
        <div class="relative grid grid-cols-1 mx-auto overflow-y-hidden max-w-7xl lg:grid-cols-2" style="max-height: 24rem;">
          <nav class="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
            <ScrollableLinks :links="links2" />
            <ScrollableLinks v-if="links.length > 5" :title="category + ' types'" :links="links" />
            <div v-else class="space-y-5">
              <h3 class="text-sm font-medium leading-5 tracking-wide text-gray-500 uppercase">
                {{ category }} types
              </h3>
              <ul class="space-y-6">
                <li v-for="(link, l) in links" :key="l" class="flow-root">
                  <nuxt-link :to="link.ref" class="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-400"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <!-- todo: make not horrendous -->
                      <path v-if="l === 0" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      <path v-if="l === 1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      <path v-if="l === 2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      <path v-if="l === 3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      <path v-if="l === 4" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{{ link.title }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </nav>
          <div class="px-4 py-8 space-y-6 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
            <div class="space-y-6">
              <h3 class="text-sm font-medium leading-5 tracking-wide text-gray-500 uppercase">
                From the blog
              </h3>
              <ul class="space-y-6">
                <li v-for="post in blogs" :key="post.href" class="flow-root">
                  <nuxt-link :to="post.href" class="flex p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 sm:space-x-8">
                    <div class="flex-shrink-0 hidden sm:block">
                      <NuxtImg class="object-cover w-32 h-20 rounded-md" format="webp" :src="post.img" alt="" />
                    </div>
                    <div class="flex-1 w-0 space-y-1">
                      <h4 class="text-base font-medium leading-6 text-gray-900 truncate">
                        {{ post.title }}
                      </h4>
                      <p class="text-sm leading-5 text-gray-500">
                        {{ post.desc }}
                      </p>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="text-sm font-medium leading-5">
              <nuxt-link to="/blog" class="text-blue-600 transition duration-150 ease-in-out hover:text-blue-500">
                View all posts &rarr;
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  import vClickOutside from 'click-outside-vue3'
  import ScrollableLinks from '~/components/ScrollableLinks'
  export default {
    name: 'FlyoutBetter',
    directives: {
      clickOutside: vClickOutside.directive
    },
    components: {
      ScrollableLinks
    },
    props: {
      opened: {
        type: Boolean,
        default: false
      },
      category: {
        type: String,
        default: 'pin'
      },
      links: {
        type: Array,
        default () {
          return [
            {
              title: 'Hard Enamel',
              ref: '/pins/hard-enamel'
            },
            {
              title: 'Soft Enamel',
              ref: '/pins/soft-enamel'
            },
            {
              title: 'Die Struck',
              ref: '/pins/die-struck'
            },
            {
              title: 'Offset Printed',
              ref: '/pins/offset-printed'
            },
            {
              title: 'Silk Screen',
              ref: '/pins/silk-screen'
            }
          ]
        }
      },
      links2: {
        type: Array,
        default () {
          return [
            {
              title: 'Military Pins',
              ref: '/pins/military'
            },
            {
              title: 'Nursing Pins',
              ref: '/pins/medical'
            },
            {
              title: 'Sports Pins',
              ref: '/pins/sports-trading'
            },
            {
              title: 'School Pins',
              ref: '/pins/school'
            },
            {
              title: 'Gaming Pins',
              ref: '/pins/gaming'
            }
          ]
        }
      },
      blogs: {
        type: Array,
        default () {
          return [
            {
              title: 'The History of Nursing Pins',
              desc: 'Nursing pins have played a vital role in healthcare for over twenty years. Learn about their interesting backstory.',
              img: '/pinblog1.jpg',
              href: '/blog/history-of-nursing-pins'
            },
            {
              title: 'A Complete History of Disney Pins',
              desc: 'An in-depth overview of the origins, changes, and loyal community behind Disney\'s famous lapel pins.',
              img: '/pinblog2.jpg',
              href: '/blog/disney-pins'
            }
          ]
        }
      }
    },
    data () {
      return {
        openFlyout: false
      }
    },
    computed: {
      vcoConfig () {
        return {
          handler: this.close,
          events: ['click'],
          // activate / deactivate click-outside directive dynamically
          isActive: this.openFlyout
        }
      }
    },
    watch: {
      opened (newVal) {
        this.openFlyout = newVal
      },
      openFlyout (newVal) {
        this.$emit('toggled', newVal)
      }
    },
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
  </script>
  