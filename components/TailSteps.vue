<template>
  <section id="order-steps" class="w-full h-auto bg-gray-800">
    <div class="px-4 pt-8 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <p class="text-base antialiased font-semibold leading-6 tracking-wide text-orange-400 uppercase lg:text-center">
        ordering process
      </p>
      <h2 class="max-w-3xl mt-2 text-2xl antialiased font-semibold leading-8 text-white font-display sm:text-3xl sm:leading-9 lg:max-w-4xl lg:text-4xl lg:leading-10 lg:mx-auto lg:text-center ">
        The easiest way to get professional, custom designed {{ subject }} shipped to your doorstep.
      </h2>

      <div class="max-w-6xl mx-auto mt-8 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:mt-16">
        <div class="flex items-start px-4 py-6 bg-white rounded-md shadow group">
          <div class="flex-shrink-0">
            <span class="antialiased h-8 w-8 pt-0.5 bg-orange-200 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-orange-600">1</span>
          </div>
          <div class="ml-4">
            <p class="text-lg font-medium leading-6 text-gray-700 transition-colors duration-150 group-hover:text-gray-900">
              Submit a quote request
            </p>
            <p class="max-w-xl mt-1 text-base font-normal leading-6 text-gray-500 lg:mt-2">
              To receive your free quote, start by describing your design or providing reference files on the quote form. Our artists will get to work in no time.
            </p>
          </div>
        </div>
        <div class="flex items-start px-4 py-6 bg-white rounded-md shadow group">
          <div class="flex-shrink-0">
            <span class="antialiased h-8 w-8 pt-0.5 bg-orange-200 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-orange-600">2</span>
          </div>
          <div class="ml-4">
            <p class="text-lg font-medium leading-6 text-gray-700 transition-colors duration-150 group-hover:text-gray-900">
              Review the design
            </p>
            <p class="max-w-xl mt-1 text-base font-normal leading-6 text-gray-500 lg:mt-2">
              We will send you an art proof and quote within 24 hours. If you’re not satisfied, no worries! We provide unlimited revisions.
            </p>
          </div>
        </div>
        <div class="flex items-start px-4 py-6 bg-white rounded-md shadow group">
          <div class="flex-shrink-0">
            <span class="antialiased h-8 w-8 pt-0.5 bg-orange-200 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-orange-600">3</span>
          </div>
          <div class="ml-4">
            <p class="text-lg font-medium leading-6 text-gray-700 transition-colors duration-150 group-hover:text-gray-900">
              Order your {{ subject }}
            </p>
            <p class="max-w-xl mt-1 text-base font-normal leading-6 text-gray-500 lg:mt-2">
              As soon as you approve your artwork, we immediately put your design into production. Your order will be shipped for free via FedEx.
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-3xl mt-8 lg:max-w-none lg:flex lg:justify-center lg:mt-12">
        <div class="flex items-start px-4 py-3 rounded-md bg-orange-50 lg:justify-center lg:px-12 lg:py-4">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="flex-1 ml-3 md:flex md:justify-between">
            <p class="text-sm font-medium leading-6 text-orange-700">
              We have a minimum order quantity of 100 to ensure you get the best service possible.
            </p>
          <!-- <p class="mt-2 text-sm leading-6 md:mt-0 md:ml-4">
            <a href="/documentation" target="_blank" class="font-medium text-orange-700 transition duration-150 ease-in-out hover:underline hover:text-orange-500">Learn more →</a>
          </p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TailSteps',
  props: {
    subject: {
      type: String,
      default: 'lapel pins'
    }
  }
}
</script>

<style scoped>
.max-w-8xl {
  max-width: 90rem !important;
}
</style>
