<template>
  <!-- start new -->
  <div class="relative mx-auto mt-6 mb-4 lg:mt-4 max-w-7xl sm:px-6 lg:px-8">
    <div class="mx-auto overflow-hidden rounded-lg shadow sm:max-w-8xl lg:max-w-none lg:flex">
      <div class="px-6 py-8 bg-white lg:flex-shrink-1 lg:p-12">
        <h3 class="text-2xl antialiased font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
          {{ headline }}
        </h3>
        <p class="mt-6 text-base leading-6 text-gray-500">
          {{ subheading }}
        </p>
        <div class="mt-8">
          <div class="flex items-center">
            <h4 class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-blue-600 uppercase bg-white">
              What's included
            </h4>
            <div class="flex-1 border-t-2 border-gray-200" />
          </div>
          <ul class="grid grid-cols-2 mt-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-5">
            <li class="flex items-start lg:col-span-1">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="ml-3 text-sm leading-5 text-gray-700">
                Same day quote
              </p>
            </li>
            <li class="flex items-start lg:col-span-1 lg:mt-0">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="ml-3 text-sm leading-5 text-gray-700">
                Design advice
              </p>
            </li>
            <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="ml-3 text-sm leading-5 text-gray-700">
                24/7 support
              </p>
            </li>
            <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="ml-3 text-sm leading-5 text-gray-700">
                Digital art proof
              </p>
            </li>
            <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="ml-3 text-sm leading-5 text-gray-700">
                Custom packaging
              </p>
            </li>
            <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="ml-3 text-sm leading-5 text-gray-700">
                FedEx shipping
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="px-6 py-8 text-center bg-white border-l-2 border-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
        <p class="text-lg font-medium leading-6 text-gray-900">
          Starting at
        </p>
        <div class="flex items-center justify-center mt-4 text-5xl antialiased font-extrabold leading-none text-gray-900">
          <span>
            ${{ price }}
          </span>
          <span class="ml-3 text-xl font-medium leading-7 text-gray-500">
            ea.
          </span>
        </div>
        <p class="mt-4 text-sm leading-5">
          <a href="#" class="font-medium text-gray-500 underline" @click.prevent="scrollSmooth('pricing-section')">
            Learn about our pricing policy
          </a>
        </p>
        <div class="mt-6">
          <div class="rounded-md shadow cursor-pointer">
            <nuxt-link to="/quote" title="Quote form link" class="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring" @click="showPricing = true">
              Get started
            </nuxt-link>
          </div>
        </div>
        <div class="mt-4 text-sm leading-5">
          <a href="mailto:info@lapelpinsandcoins.com" rel="nofollow" title="Shoot us an email or quote using the button below to order samples." class="font-medium text-gray-900">
            Get a sample kit
            <span class="font-normal text-gray-500">
              ($5.99)
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PinBenefits',
  props: {
    subject: {
      type: String,
      default: 'lapel pins'
    },
    headline: {
      type: String,
      default: 'Customized pins for anyone.'
    },
    subheading: {
      type: String,
      default: 'Our goal is simple: deliver great pins without breaking the bank. View our pricing chart or contact us for more information. We can work to meet any budget.'
    },
    price: {
      type: String,
      default: '2.54'
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
