<template>
  <!-- was: lg: -mt-8 -->
    <div class="relative w-full mx-auto rounded-lg shadow-lg lg:-mt-0 text-gray-50 lg:w-full">
      <button aria-label="Show company video in modal" class="relative block w-full overflow-hidden transition-shadow duration-100 rounded-lg bg-gray-50 focus:outline-none focus:ring" @click.prevent="showModal = true">
        <img src="/withPin.jpg" class="object-cover w-full opacity-100 sm:h-80" alt="Promotional video for custom lapel pins and challenge coins.">
        <!-- <img class="object-cover w-full" src="~/static/thumbnail3.png" alt="Promotional video for custom lapel pins and challenge coins." data-not-lazy> -->
        <span class="absolute inset-0 flex items-center justify-center w-full h-full cursor-pointer">
          <svg class="w-20 h-20 text-orange-300 group" fill="#F6AD55" viewBox="0 0 84 84">
            <circle
              class="text-gray-100 transition-colors duration-150 ease-in-out group-hover:text-white"
              opacity="0.9"
              cx="42"
              cy="42"
              r="42"
              fill="currentColor"
            />
            <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
          </svg>
        </span>
      </button>
      <VideoModal :open="showModal" @close="showModal = false" />
    </div>
  </template>
  
  <style scoped>
  .isLoaded {
    @apply opacity-100;
  }
  </style>
  
  <script>
  import VideoModal from '~/components/VideoModal'
  export default {
    name: 'Thumbnail',
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
