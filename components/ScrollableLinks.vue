<template>
    <div class="w-auto space-y-5">
      <h3 class="text-sm font-medium leading-5 tracking-wide text-gray-500 uppercase">
        {{ title }} <span v-if="expanded" class="tracking-normal text-gray-400 lowercase transition-colors duration-150 cursor-pointer hover:text-gray-500" @click="expanded = false">(see less)</span>
      </h3>
      <ul :class="[(expanded && needScroll) ? 'overflow-y-scroll' : 'overflow-y-hidden']" class="absolute h-full pt-3 -mx-3 -mb-3 space-y-6 rounded-md w-72 max-h-60" style="top: 3.5rem">
        <li v-for="(link, l) in compLinks" :key="link.ref" class="flow-root rounded-md">
          <nuxt-link :title="(link.title === 'Lapel Pins' ? 'Custom lapel pins' : link.title)" :to="link.ref" class="flex items-center p-3 -my-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
            <svg
              class="flex-shrink-0 w-6 h-6 text-gray-400"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path v-if="l === 0" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              <path v-if="l === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              <path v-if="l === 2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              <path v-if="l === 3" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              <path v-if="l >= 4" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{{ link.title }}</span>
            <span v-if="link.new" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-blue-100 text-blue-800">
              New
            </span>
          </nuxt-link>
          <!-- <span v-if="link.new" class="absolute top-0 right-0 block h-3.5 w-3.5 transform -translate-y-0 translate-x-0 rounded-full text-white shadow-solid bg-red-400"></span> -->
        </li>
      </ul>
      <div v-if="(!expanded && needScroll)" class="z-50 flex items-end h-56 text-sm font-medium leading-7">
        <button class="absolute z-50 -mt-0.5 text-blue-600 transition duration-150 ease-in-out focus:outline-none hover:underline hover:text-blue-500 focus:ring-blue" @click="toggleExpanded">
          View all {{ title }} &rarr;
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ScrollableLinks',
    props: {
      links: {
        type: Array,
        default () {
          return []
        }
      },
      title: {
        type: String,
        default: 'categories'
      }
    },
    data () {
      return {
        expanded: false
      }
    },
    computed: {
      compLinks () {
        return (this.expanded || !this.needScroll ? this.links : this.links.slice(0, 4))
      },
      needScroll () {
        return (this.links.length > 5)
      }
    },
    methods: {
      toggleExpanded () {
        this.expanded = !this.expanded
      }
    }
  }
  </script>
  