<template>
  <!-- TODO: redo with proper grid technique to fix tablet breakpoint -->
  <div id="our-products" class="relative py-4 bg-gray-100 md:pt-8 lg:py-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base font-semibold leading-6 tracking-wide text-gray-500 uppercase">
          our products
        </h2>
        <h3 class="mt-2 text-3xl antialiased font-extrabold leading-8 tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
          Promotional items in no time.
        </h3>
        <p class="max-w-2xl mt-4 text-xl leading-7 text-gray-600 lg:mx-auto">
          We have over 20 years of experience in custom items. Since 1999, we have served clients both big and small with unbeatable pricing.
        </p>
      </div>
      <!-- add features here -->
      <div class="mx-auto mt-10 sm:max-w-xl sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div class="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <FeatureCard
            v-for="(elem, j) in features"
            :key="j"
            :title="elem.title"
            :desc="elem.desc"
            :href="elem.href"
            :img="elem.img"
            :link="elem.linkText"
          />
        </div>
      </div>
      <!-- <FeatureCard /> -->
    <!-- end features -->
    </div>
    <div class="flex items-center justify-center w-full pt-16 mx-auto md:pt-20 lg:pt-24 max-w-7xl">
      <svg
        class="w-10 h-10 text-gray-600 transition-colors duration-200 cursor-pointer animate-bounce hover:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        @click="scrollSmooth('features')"
      ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
    </div>
  </div>
</template>

<script>
import FeatureCard from '~/components/FeatureCard'
export default {
  name: 'ThreeFeat',
  components: {
    FeatureCard
  },
  data () {
    return {
      features: [
        {
          title: 'Lapel Pins',
          desc: 'Designing a custom pin couldn\'t be easier. Let our artists do the work for you! Get started with a free same-day proof.',
          href: '/pins',
          img: '/homePins.png',
          linkText: 'Custom lapel pins'
        },
        {
          title: 'Challenge Coins',
          desc: 'Producing a high-quality challenge coin is simple. We offer custom edges and many plating options to choose from.',
          href: '/coins',
          img: '/homeCoins.png',
          linkText: 'Custom challenge coins'
        },
        {
          title: 'Keychains',
          desc: 'Keychains are the perfect item for companies, universities, or as on-the-go durable keepsakes. Get started today.',
          href: '/keychains',
          img: '/homeChains.png',
          linkText: 'Custom keychains'
        }
      ]
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
