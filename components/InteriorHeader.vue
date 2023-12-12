<template>
  <div class="bg-gray-800">
    <VideoModal :open="showModal" @close="showModal = false" />
    <div class="px-4 py-10 mx-auto sm:py-16 max-w-7xl sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div>
          <!-- Free quote &amp; artwork -->
          <p class="text-base font-semibold leading-6 tracking-wider text-blue-400 uppercase">
            Same-day reply
          </p>
          <h1 class="mt-2 text-3xl font-semibold leading-10 text-white sm:text-4xl">
            {{ headline }}
          </h1>
          <p class="max-w-3xl mt-4 text-base leading-6 text-gray-400">
            {{ subheading }}
          </p>
          <div class="flex flex-col items-start w-full mt-6 space-y-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a href="#" class="inline-flex items-start text-lg font-medium leading-6 group" @click.prevent="showModal = true">
              <svg class="flex-shrink-0 mr-3 text-blue-400 transition-colors duration-150 ease-in-out group-hover:text-blue-300 h-9 w-9" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <circle
                  vector-effect="non-scaling-stroke"
                  cx="12"
                  cy="12"
                  r="9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              <span class="mt-1.5 text-blue-400 group-hover:text-blue-300 transition-colors ease-in-out duration-150">Watch a video overview</span>
            </a>
            <a href="tel:+18004829101" class="inline-flex items-start ml-1 text-lg font-medium leading-6 sm:ml-8 group" title="Phone number">
              <svg class="flex-shrink-0 w-8 h-8 mr-3 text-blue-400 transition-colors duration-150 ease-in-out group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span class="mt-1.5 text-blue-400 group-hover:text-blue-300 transition-colors ease-in-out duration-150">+1 (800) 482-9101</span>
            </a>
          </div>
        </div>
        <LatestPins v-if="newLayout" />
        <div v-else class="mt-8 lg:mt-0">
          <div class="max-w-lg lg:ml-auto lg:max-w-xl">
            <a href="#" class="flex items-start px-5 py-4 text-lg font-medium leading-6 text-white transition duration-150 ease-in-out border border-blue-400 rounded-lg hover:bg-gray-800" @click.prevent="scrollSmooth('quote-steps')">
              <svg class="w-6 h-6 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span class="hidden sm:block">{{ choices[0].desk }}</span>
              <span class="block sm:hidden">{{ choices[0].mobile }}</span>
              <div class="ml-auto mt-0.5 pl-4">
                <svg class="w-5 h-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </a>
            <a href="#" class="flex items-start px-5 py-3 mt-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-gray-700 rounded-lg hover:bg-gray-800" @click.prevent="scrollSmooth('pricing-section')">
              <svg class="mt-0.5 mr-4 h-5 w-5 text-gray-500" textviewbox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
              <span class="hidden sm:block">{{ choices[1].desk }}</span>
              <span class="block sm:hidden">{{ choices[1].mobile }}</span>
              <div class="ml-auto mt-0.5 pl-4">
                <svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </a>
            <a href="#" class="flex items-start px-5 py-3 mt-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-gray-700 rounded-lg hover:bg-gray-800" @click.prevent="scrollSmooth('order-steps')">
              <svg class="mt-0.5 mr-4 h-5 w-5 text-gray-500" textviewbox="0 0 20 20" fill="currentColor">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <span class="hidden sm:block">{{ choices[2].desk }}</span>
              <span class="block sm:hidden">{{ choices[2].mobile }}</span>
              <div class="ml-auto mt-0.5 pl-4">
                <svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoModal from '~/components/VideoModal'
import LatestPins from '~/components/LatestPins'
export default {
  name: 'InteriorHeader',
  components: {
    VideoModal,
    LatestPins
  },
  props: {
    newLayout: {
      type: Boolean,
      default: false
    },
    headline: {
      type: String,
      default: 'Headline'
    },
    subheading: {
      type: String,
      default: 'Subheading goes here.'
    },
    choices: {
      type: Array,
      default () {
        return [
          {
            desk: 'Browse our various pin styles',
            mobile: 'Browse our pin styles'
          },
          {
            desk: 'See our industry leading pricing',
            mobile: 'See our unmatched pricing'
          },
          {
            desk: 'View our streamlined ordering process',
            mobile: 'View our ordering process'
          }
        ]
      }
    }
  },
  data () {
    return {
      currentPic: 0,
      pics: [
        '/pin01.png',
        'pinback01.png'
      ],
      showModal: false
    }
  },
  methods: {
    scrollSmooth (elem) {
      if (process.browser) {
        document.getElementById(elem).scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }
}
</script>
