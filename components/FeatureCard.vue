<template>
  <div class="px-4 pt-5 pb-4 mx-auto overflow-hidden transition-all transform bg-white rounded-md shadow-xl sm:max-w-md sm:w-full sm:p-6">
    <div>
      <NuxtImg class="w-auto h-48 mx-auto lazyload" loading="lazy" format="webp" :src="img" :alt="link" />
      <div class="mt-3 text-center sm:mt-5">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          {{ title }}
        </h3>
        <div class="mt-2">
          <p class="text-sm leading-5 text-gray-500">
            {{ desc }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-6">
      <span class="flex w-full rounded-md shadow-sm">
        <nuxt-link :title="link" :to="href" class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm sm:leading-5">
          {{ title }}
        </nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    img: {
      type: String,
      default: '/homePins.png'
    },
    title: {
      type: String,
      default: 'Lapel Pins'
    },
    link: {
      type: String,
      default: 'Custom Lapel Pins'
    },
    desc: {
      type: String,
      default: 'Designing a custom pin couldn\'t be easier. Let our artists do the work for you! Get started with a free same-day proof.'
    },
    href: {
      type: String,
      default: '/pins'
    }
  }
}
</script>
