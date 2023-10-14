<template>
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center max-h-screen" @keydown.escape="close">
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
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
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
        class="relative w-full max-w-md overflow-hidden bg-white rounded-lg shadow transition-all transform card sm:max-w-2xl"
      >
        <div class="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
          <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
            <div class="mt-4 ml-4">
              <h3 id="video-headline" class="text-lg font-medium text-gray-900 leading-6">
                {{ currentData.title }}
              </h3>
              <p class="mt-1 text-sm text-gray-500 leading-5">
                {{ currentData.desc }}
              </p>
            </div>
            <div class="flex-shrink-0 -mt-2 -mr-1">
              <button class="rounded-full group focus:outline-none" @click.prevent="close">
                <span id="closeDesc" class="sr-only">Close details modal</span>
                <svg
                  aria-labelledby="closeDesc"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 text-gray-500 transition-colors duration-150 ease-in-out group-hover:text-gray-600"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ><path d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>
        </div>
        <div class="h-auto px-4 py-5 sm:h-auto sm:py-4 sm:px-6">
          <p class="text-sm text-gray-600 sm:text-base">
            {{ currentData.details }}
          </p>
        </div>
        <div class="flex items-center justify-between w-full h-20 px-4 border-t border-gray-50 bg-gray-50 sm:px-6">
          <div class="flex flex-col justify-between h-full py-3 text-sm">
            <p class="mt-0.5 font-medium text-gray-500">
              Need help? <span class="hidden sm:inline-block">Feel free to contact us.</span>
            </p>
            <p class="text-gray-500 leading-7">
              Mon - Fri, 9am-6pm EST
            </p>
          </div>
          <div class="flex flex-col justify-between h-full py-3">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-5 h-5 mt-1 text-gray-400"
                ><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div> <div class="ml-3 text-base text-gray-500 leading-6">
                <a title="Lapel Pins and Coins Phone Number" href="tel:+18443954464" class="inline-block text-sm leading-7 transition-colors duration-200 hover:underline hover:text-gray-600">
                  +1 (844) 395-4464
                </a>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0">
                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-5 h-5 mt-1 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div> <div class="ml-3 text-base text-gray-500 leading-6">
                <a title="Customer Support Email" href="mailto:info@lapelpinsandcoins.com" class="text-sm leading-7 transition-colors duration-200 hover:underline hover:text-gray-600">
                  info@lapelpinsandcoins.com
                </a>
              </div>
            </div>
          </div>
        </div>
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
  name: 'DetailsModal',
  props: {
    open: {
      type: Boolean,
      default: false
    },
    page: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      showModal: false,
      showBackdrop: false,
      showContent: false,
      backdropLeaving: false,
      cardLeaving: false,
      content: [
        {
          title: 'Production Method',
          desc: 'Learn more about our production methods.',
          details: 'The production style you choose can have different effects on your design. Soft enamel has recessed color areas, giving your pin a textured feel. Hard enamel is smoothly polished, like jewelry. Offset and Silkscreen printing can be used for more elaborate designs that can’t have metal separations. Die struck is used for no color designs. Choose the style you think will look best on your design, we’ll let you know if any changes need to be made.'
        },
        {
          title: 'Plating Options',
          desc: 'Learn more about our plating options.',
          details: 'Different platings can have different effects on your design. Choose the plating that you think will go best with it, but feel free to ask us if you’d like to see some different options! The antique platings have an extra cost, but work best for designs with no color, especially ones with text.'
        },
        {
          title: 'Sizing Options',
          desc: 'Learn more about our sizing options.',
          details: 'Certain more detailed designs can be hard to fit onto smaller spaces. Choose the size you’d like your pin to be and we can help you determine whether you can simplify your design or make the pin bigger. Either way, we will make sure all elements of your design are represented well.'
        },
        {
          title: 'Backing Options',
          desc: 'Learn more about our backing options.',
          details: 'The backing on your pins depends on how you’d like to display them. Butterfly clutches tend to be the best choice as they are the sturdiest. Rubber backings are better for delicate fabrics. We also offer magnetic backings and cufflink backings, as well as many other specialty backings, so feel free to ask us!'
        },
        {
          title: 'Packaging Options',
          desc: 'Learn more about our packaging options.',
          details: 'The packaging of your pins depends on how you’ll be presenting them. Poly bags are a convenient and cheap way to package your pins, especially if you’ll be doing your own repackaging. If you’re looking to save some time on the packaging, it might be worth it to choose a display case or velvet bags to receive your pins in.'
        },
        {
          title: 'Color Options',
          desc: 'Learn more about our color options.',
          details: ' We can add color to any coin. The price may vary if it has color on one side or both, but there are no limits on how many colors you can use. Each color is chosen with Pantone color swatches. If you’d like to provide us with color palettes, please refer to a PMS color book.'
        }
      ]
    }
  },
  computed: {
    currentData () {
      return (this.content[this.page])
    },
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
