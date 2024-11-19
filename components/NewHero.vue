<template>
  <div class="relative overflow-hidden sm:overflow-visible">
    <div class="absolute z-20 inset-x-0 bottom-0 bg-gray-100 h-1/2" />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative z-30 shadow-xl sm:rounded-2xl sm:overflow-hidden">
        <div class="absolute inset-0 bg-img scroll-bg">
          <!-- <img class="absolute object-cover w-full h-full bg-img scroll-bg" src="~/static/scrollingPins.png" alt="People working on laptops"> -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-800 to-light-blue-700 " style="mix-blend-mode: multiply;" />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 class="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
            <span class="block text-white">Get custom lapel pins </span>
            <span class="block text-light-blue-200">with expert guidance.</span>
          </h1>
          <p class="max-w-lg mx-auto mt-6 text-xl text-center text-light-blue-200 sm:max-w-3xl">
            Start your design in minutes with a quote request. We provide high quality designs &amp; 3D mockups with each quote &mdash; no commitment necessary.
          </p>
          <div class="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <nuxt-link to="/quote" title="Quote request" class="flex items-center justify-center px-4 py-3 text-base font-medium bg-white border border-transparent rounded-md shadow-sm text-light-blue-700 hover:bg-light-blue-50 sm:px-8">
                Get started
              </nuxt-link>
              <a href="#" title="Show demo video" class="flex items-center justify-center px-4 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8" @click.prevent="showModal = true">
                Live demo
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-3 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VideoModal :open="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import VideoModal from '~/components/VideoModal'
export default {
  name: 'NewHero',
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

<style scoped>
.bg-img {
  height:400%;
  width:400%;
  top:-50%;
  left:-100%;
  background-size:800px auto;
  background-image:url(/scrollingPins.png);

  @supports (background-image: url(/scrollingPins.webp)) {
    background-image: url(/scrollingPins.webp);
  }
}
@keyframes scrollSmall {
  from {
    transform: rotate(-13deg) translateY(0px);
  }
  to {
    transform: rotate(-13deg) translateY(-217px);
  }
}
@keyframes scrollLarge {
  from {
    transform: rotate(-13deg) translateY(0px);
  }
  to {
    transform: rotate(-13deg) translateY(-833px);
  }
}
.scroll-bg {
  animation-name: scrollSmall;
  animation-direction: reverse, normal;
  animation-duration: 95s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@media screen and (min-width: 1024px) {
  .scroll-bg {
    animation-direction: normal;
    animation-name: scrollLarge;
    animation-duration: 90s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
}
</style>
