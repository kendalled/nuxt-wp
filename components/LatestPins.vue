<template>
  <section class="relative mt-8 lg:ml-1 lg:mt-0">
    <!-- <div class="absolute w-full h-auto px-4 py-2 mx-auto antialiased">
      <dl class="flex flex-col justify-between w-full pt-3 space-y-2 text-gray-100 md:flex-row md:space-x-6 md:space-y-0 md:items-center">
        <div>
          <dt class="sr-only">
            Phone number
          </dt>
          <dd class="flex">
            <svg
              class="flex-shrink-0 w-6 h-6 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="ml-3">+1 (844) 395-4464</span>
          </dd>
        </div>
        <div>
          <dt class="sr-only">
            Email
          </dt>
          <dd class="flex">
            <svg
              class="flex-shrink-0 w-6 h-6 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="ml-3">info@lapelpinsandcoins.com</span>
          </dd>
        </div>
      </dl>
    </div> -->
    <div class="relative max-w-lg mx-auto lg:mx-0 lg:max-w-xl sm:h-64 lg:h-48 h-96">
      <transition-group
        enter-from-class="transform scale-95 opacity-0"
        enter-active-class="transition duration-200 ease-out"
        enter-to-class="transform scale-100 opacity-100"
        leave-from-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-to-class="transform scale-95 opacity-0"
        mode="out-in"
        @after-leave="resetPic"
      >
        <div v-for="(pin, p) in pinSet" v-show="(p === page)" :key="pin.title" class="absolute flex flex-col items-center justify-start max-w-lg px-6 py-6 bg-white rounded-md shadow-2xl lg:-mt-1 sm:mx-auto sm:flex-row lg:ml-auto lg:max-w-xl">
          <span class="relative flex items-center justify-center w-full sm:w-1/3">
            <img class="transition-colors duration-150 ease-in-out rounded-md cursor-pointer w-36 h-36 sm:mx-0 hover:bg-gray-100" :src="pin.pics[0]" :alt="pin.title">
          </span>
          <span class="w-full pt-4 sm:pt-0 sm:w-2/3 sm:pl-6">
            <div class="flex items-center justify-between w-full">
              <span class="inline-block font-semibold text-gray-700">
                {{ pin.title }}
              </span>
              <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                <!-- <svg class="mr-1.5 h-2 w-2 text-gray-400" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg> -->
                {{ pin.price }} ea.
              </span>
            </div>
            <p class="mt-2 text-gray-600">
              {{ pin.desc }} Design your own pin in minutes with our <nuxt-link to="/quote" title="Quote form" class="font-medium hover:underline">free quote</nuxt-link>.
            </p>
          </span>
        </div>
      </transition-group>
      <div class="absolute inset-y-0 left-3 sm:left-0 lg:flex lg:items-center">
        <button aria-label="Previous pin" class="w-12 h-12 p-3 mt-24 -ml-6 bg-white rounded-full shadow-lg focus:outline-none group lg:mt-0" @click="lastPage">
          <svg class="w-full h-full text-gray-500 transition-colors duration-200 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
          </svg>
        </button>
      </div>
      <div class="absolute inset-y-0 right-3 sm:right-0 lg:flex lg:items-center">
        <button aria-label="Next pin" class="w-12 h-12 p-3 mt-24 -mr-6 bg-white rounded-full shadow-lg focus:outline-none group lg:mt-0" @click="nextPage">
          <svg class="w-full h-full text-gray-500 transition-colors duration-200 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
          </svg>
        </button>
      </div>
    </div>
    <!-- <LatestPinSteps :total-steps="pinSet.length" :current-step="page" @choice="changeNum" /> -->
  </section>
</template>

<script>
export default {
  name: 'LatestPins',
  props: {
    pinSet: {
      type: Array,
      default () {
        return [
          {
            title: 'Educational Pins',
            price: '$1.99',
            pics: [
              '/pin01.png',
              '/pinback01.png'
            ],
            desc: 'Cast in polished gold with a hard enamel finish, these sleek pins honor special education instructors in elementary schools.'
          },
          {
            title: 'Festival Pins',
            price: '$1.66',
            pics: [
              '/GlitterPin.png',
              '/pinback01.png'
            ],
            desc: 'These are a perfect keepsake for remembering an event. Cast in antiqued silver with a hard enamel finish, this pin is the perfect keepsake.'
          },
          {
            title: 'Movie Pins',
            price: '$1.75',
            pics: [
              '/MoviePin.png',
              '/pinback01.png'
            ],
            desc: 'Movie pins are a perfect keepsake for friends & family. Cast in antiqued silver with a hard enamel finish, this movie pin is the perfect keepsake.'
          }
        ]
      }
    }
  },
  data () {
    return {
      currentPic: 0,
      page: 0
    }
  },
  // watch: {
  //   page (newVal) {
  //     const vm = this
  //     setTimeout(() => {
  //       vm.nextPage()
  //     }, 3500)
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.page = 1
  //   }, 2500)
  // },
  methods: {
    resetPic () {
      this.currentPic = 0
    },
    lastPage () {
      if (this.page > 0) {
        this.page -= 1
      } else {
        this.page = this.pinSet.length - 1
      }
    },
    nextPage () {
      if (this.page < this.pinSet.length - 1) {
        this.page += 1
      } else {
        this.page = 0
      }
    },
    changePic () {
      if (this.currentPic === 0) {
        this.currentPic = 1
      } else if (this.currentPic === 1) {
        this.currentPic = 0
      }
    }
  }
}
</script>
