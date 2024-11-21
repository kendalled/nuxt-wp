<template>
  <section class="bg-gray-100">
    <VideoModal :open="showModal" @close="showModal = false" />
    <div class="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase bg-blue-200 rounded-full">
            ordering process
          </p>
        </div>
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern id="679d5905-e08c-4b91-a66c-84aefbb9d2f5" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)" width="52" height="24" />
            </svg>
            <span class="relative">Watch</span>
          </span>
          a short video overview to learn more about us.
        </h2>
        <p class="text-base text-gray-500 md:text-lg">
          We have designed &amp; manufactured customized pins, challenge coins, and keychains for over twenty years. Learn about our company.
          <!-- Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. -->
        </p>
      </div>
      <div class="mx-auto lg:max-w-2xl">
        <div class="relative w-full">
          <picture>
            <source srcset="/withPin.webp" type="image/webp">
            <source srcset="/withPin.jpg" type="image/jpeg">
            <img src="/withPin.jpg" loading="lazy" class="object-cover w-full h-56 rounded-md shadow-lg sm:h-64 md:h-80 lg:h-96" alt="Promotional video for custom lapel pins and challenge coins.">
          </picture>
          <button aria-label="Play Video" class="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 rounded-md focus:ring-2 bg-opacity-40 group hover:bg-opacity-25 focus:outline-none focus:ring-blue-300" @click.prevent="showModal = true">
            <div class="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
              <svg class="w-10 h-10 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VideoModal from '~/components/VideoModal'

export default {
  name: 'VideoSpot',
  components: {
    VideoModal
  },
  data () {
    return {
      showModal: false
    }
  }
}
</script>
