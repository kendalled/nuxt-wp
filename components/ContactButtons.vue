<template>
    <div class="hidden lg:ml-3 lg:-mr-1.5 lg:flex lg:items-center">
      <button aria-label="Show search bar" class="flex-shrink-0 p-1 ml-3 text-gray-400 border-2 border-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100" @click="showModal = true">
        <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            aria-label="Closes phone number"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
        </svg>
      </button>
      <div v-if="phoneOpen" class="hidden xl:flex">
        <button aria-label="Hide phone number" class="flex-shrink-0 p-1 ml-3 text-gray-400 border-2 border-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100" @click="phoneOpen = false">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            aria-label="Closes phone number"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
        <!-- todo: fix typography principles -->
        <div class="ml-2 text-base text-gray-500 font-semibold">
          <a title="Lapel Pins and Coins Phone Number" href="tel:+18004829101" class="inline-block text-base leading-9 transition-colors duration-200 hover:underline hover:text-gray-600">
            +1 (800) 482-9101
          </a>
        </div>
      </div>
      <div v-if="emailOpen" class="hidden xl:flex">
        <button aria-label="Hide email address" class="flex-shrink-0 p-1 ml-3 text-gray-400 border-2 border-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100" @click="emailOpen = false">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ><path d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" /></svg>
        </button>
        <!-- todo: fix typography principles -->
        <div class="ml-2 text-base leading-9 font-semibold text-gray-500">
          <a title="Lapel Pins and Coins email" href="mailto:info@lapelpinsandcoins.com" target="_blank" rel="nofollow" class="inline-block text-base transition-colors duration-200 hover:underline hover:text-gray-600">
            info@lapelpinsandcoins.com
          </a>
        </div>
      </div>
      <!-- phone -->
      <button v-show="bothClosed" id="phone-button" aria-label="Show phone number" class="flex-shrink-0 hidden p-1 text-gray-400 border-2 border-transparent rounded-full xl:block hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100" @click="phoneOpen = true">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        ><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      </button>
      <!-- email -->
      <button v-show="bothClosed" aria-label="Show email address" class="flex-shrink-0 hidden p-1 ml-3 text-gray-400 border-2 border-transparent rounded-full xl:block hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100" @click="emailOpen = true">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        ><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </button>
      <!-- dots -->
      <div class="relative flex-shrink-0 ml-3 -mr-1">
        <div>
          <button aria-label="Expand quick links" class="flex-shrink-0 hidden p-1 text-gray-400 border-2 border-transparent rounded-full xl:block hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100" @click="toggleOpen">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
          </button>
        </div>
        <!-- todo: simplify closing, add aria roles -->
        <transition
          enter-from-class="transform scale-95 opacity-0"
          enter-active-class="transition duration-200 ease-out"
          enter-to-class="transform scale-100 opacity-100"
          leave-from-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div
            v-if="open && readyToClose"
            v-click-outside="close"
            class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
          >
            <div class="py-1 bg-white rounded-md ring-1 ring-black ring-opacity-5" @click="close">
              <nuxt-link to="/checkout" title="Checkout" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                Checkout
              </nuxt-link>
              <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">Settings</a>
              <nuxt-link to="/login" title="Login page" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                Sign in
              </nuxt-link>
            </div>
          </div>
        </transition>
      </div>
      <SearchPalette :open="showModal" @close="showModal = false" />
    </div>
  </template>
  
  <script>
  import vClickOutside from 'click-outside-vue3'
  export default {
    name: 'ContactButtons',
    directives: {
      clickOutside: vClickOutside.directive
    },
    data () {
      return {
        showModal: false,
        emailOpen: false,
        phoneOpen: true,
        open: false,
        readyToClose: false
      }
    },
    computed: {
      bothClosed () {
        return (!this.emailOpen && !this.phoneOpen)
      }
    },
    watch: {
      open (newVal) {
        if (newVal) {
          this.readyToClose = true
        } else if (!newVal) {
          this.readyToClose = false
        }
      }
    },
    methods: {
      toggleOpen () {
        this.open = !this.open
      },
      close () {
        if (this.open && this.readyToClose) {
          this.open = false
        } else {
          this.open = true
        }
      }
    }
  }
  </script>
  