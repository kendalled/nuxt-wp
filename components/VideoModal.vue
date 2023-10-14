<template>
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center max-h-screen">
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-100 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      appear
      @before-leave="backdropLeaving = true"
      @after-leave="backdropLeaving = false"
    >
      <div v-if="showBackdrop">
        <div class="absolute inset-0 bg-black opacity-50" @click="close" />
      </div>
    </transition>
    <transition
      enter-active-class="duration-300 ease-out"
      leave-active-class="duration-200 ease-in"
      enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      enter-to-class="translate-y-0 opacity-100 sm:scale-100"
      leave-class="translate-y-0 opacity-100 sm:scale-100"
      leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      appear
      @before-leave="cardLeaving = true"
      @after-leave="cardLeaving = false"
    >
      <div
        v-if="showContent"
        style="z-index: 100;"
        role="dialog"
        :aria-modal="showContent"
        aria-labelledby="video-headline"
        class="relative w-full max-w-md overflow-hidden transition-all transform bg-white rounded-lg shadow card sm:max-w-2xl"
      >
        <div class="h-auto px-4 py-5 mb-4 sm:h-96 sm:py-5 sm:px-6">
          <div class="rounded-lg embed-container">
            <iframe
              src="https://www.youtube.com/embed/GwDGLVv2WB4?rel=0;&autoplay=1&playsinline=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-full mx-auto"
            />
          </div>
        </div>
        <div class="px-4 py-5 bg-white border-t border-gray-200 sm:px-6">
          <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
            <div class="mt-4 ml-4">
              <h3 id="video-headline" class="text-lg font-medium leading-6 text-gray-900">
                Watch a short video to learn more.
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-500">
                View a short overview of our products &amp; services.
              </p>
            </div>
            <div class="flex-shrink-0 mt-4 ml-4">
              <span class="inline-flex rounded-md shadow-sm">
                <!-- <nuxt-link to="/quote" class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-700 active:bg-blue-700">
                  Free Quote
                </nuxt-link> -->
                <nuxt-link to="/quote" title="Quote form" class="inline-flex items-center justify-center px-4 py-2 ml-8 text-sm font-medium text-white border border-transparent rounded-md shadow-sm whitespace-nowrap bg-gradient-to-r from-blue-600 to-light-blue-600 hover:from-blue-700 hover:to-light-blue-700">
                  Free Quote
                </nuxt-link>
              </span>
            </div>
          </div>
        </div>
        <!-- <div class="px-4 py-4 bg-gray-50 sm:px-6">
          <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
            <div class="mt-4 ml-4">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Watch a short video to learn more.
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-500">
                Watch our staff explain our simple, quick ordering process.
              </p>
            </div>
            <div class="flex-shrink-0 mt-4 ml-4">
              <span class="inline-flex rounded-md shadow-sm">
                <nuxt-link to="/quote" class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-700 active:bg-blue-700">
                  Get Started
                </nuxt-link>
              </span>
            </div>
          </div>
        </div> -->
      </div>
    </transition>
  </div>
</template>

<style scoped>
.card {
  backface-visibility: hidden;
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  }
  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<script>
export default {
  name: 'VideoModal',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showModal: false,
      showBackdrop: false,
      showContent: false,
      backdropLeaving: false,
      cardLeaving: false
    }
  },
  computed: {
    leaving () {
      return this.backdropLeaving || this.cardLeaving
    }
  },
  watch: {
    open: {
      handler (newValue) {
        if (newValue) {
          this.show()
        } else {
          this.close()
        }
      },
      immediate: true
    },
    leaving (newValue) {
      if (newValue === false) {
        this.showModal = false
        this.$emit('close')
      }
    }
  },
  // created () {
  //   const onEscape = (e) => {
  //     if (this.open && e.keyCode === 27) {
  //       this.close()
  //     }
  //   }

  //   document.addEventListener('keydown', onEscape)

  //   this.$once('hook:destroyed', () => {
  //     document.removeEventListener('keydown', onEscape)
  //   })
  // },
  methods: {
    show () {
      this.showModal = true
      this.showBackdrop = true
      this.showContent = true
    },
    deletePost () {
      this.$emit('delete')
    },
    close () {
      this.showBackdrop = false
      this.showContent = false
    }
  }
}
</script>
