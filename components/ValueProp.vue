<template>
    <section class="relative mt-8 lg:ml-1 lg:mt-0">
    <div class="relative max-w-lg mx-auto lg:mx-0 lg:max-w-xl sm:h-64 lg:h-48 h-96">
      <!-- todo: fix mode -->
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
        <div v-for="(pin, p) in pinSet" v-show="(p === page)" :key="pin.title" class="absolute flex flex-col w-full items-center justify-start max-w-lg px-6 py-6 bg-white rounded-md shadow-2xl lg:-mt-1 sm:mx-auto sm:flex-row lg:ml-auto lg:max-w-xl">
          <span class="relative flex items-center justify-center w-full sm:w-1/3">
            <NuxtImg class="transition-colors duration-150 ease-in-out rounded-md cursor-pointer w-36 h-36 sm:mx-0 hover:bg-gray-100" format="webp" :src="pin.pics[0]" :alt="pin.title" />
          </span>
          <span class="w-full pt-4 sm:pt-0 sm:w-2/3 sm:pl-6">
            <img class="absolute top-3 right-3 opacity-100" style="height: 5.5rem; width: 5.5rem;" src="/30percent.svg" />
            <div class="space-y-5">
              <span class="flex items-start lg:col-span-1 lg:mt-0">
                <div class="flex-shrink-0">
                  <svg class="mr-2 w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 36 36" aria-hidden="true" role="img" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/><path fill="#FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"/></svg>
                </div>
                <p class="ml-3 font-medium text-gray-600">
                  <span class="font-semibold">Free</span> same-day artwork
                </p>
              </span>
              <span class="flex items-start lg:col-span-1 lg:mt-0">
                  <div class="flex-shrink-0">
                      <svg class="mr-2 w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 36 36" aria-hidden="true" role="img" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/><path fill="#FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"/></svg>
                  </div>
                <p class="ml-3 font-medium text-gray-600">
                  <span class="font-semibold">Free</span> FedEx shipping
                </p>
              </span>
              <span class="flex items-start lg:col-span-1 lg:mt-0">
                <div class="flex-shrink-0">
                  <svg class="mr-2 w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 36 36" aria-hidden="true" role="img" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/><path fill="#FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"/></svg>
                </div>
                <p class="ml-3 font-medium text-gray-600">
                  <span class="font-semibold">Unlimited</span> revisions on all orders
                </p>
              </span>
            </div>
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

  <style scoped>
    .st0 {
          fill:#FF9E18;
        }
	  .st2{
      fill:#FFF7ED;
    }
    </style>

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
  