<template>
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center max-h-screen">
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-100 ease-in"
      leave-from-class="opacity-100"
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
      enter-active-class="transition-all duration-150 ease-out-quad"
      leave-active-class="transition-all duration-200 ease-in-quad"
      enter-from-class="opacity-0 scale-70"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-70"
      appear
      @before-leave="cardLeaving = true"
      @after-leave="cardLeaving = false"
    >
      <div
        v-if="showContent"
        style="z-index: 100;"
        class="relative px-4 pt-5 pb-4 overflow-hidden bg-white rounded-lg shadow-xl transition-all transform sm:max-w-lg sm:w-full sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
          <button type="button" class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="Close" @click="close">
            <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="sm:flex sm:items-start">
          <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
            <svg class="w-6 h-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 id="modal-headline" class="text-lg font-medium text-gray-900 leading-6">
              Reset form
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500 leading-5">
                Are you sure you want to reset this quote? All of your data will be permanently removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent leading-6 transition duration-150 ease-in-out rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 focus:ring-opacity-50 sm:text-sm sm:leading-5" @click="reset">
              Reset form
            </button>
          </span>
          <span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 leading-6 transition duration-150 ease-in-out rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm sm:leading-5" @click="close">
              Cancel
            </button>
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.card {
  backface-visibility: hidden;
}
.origin-top-right {
  transform-origin: top right;
}
.transition-all {
  transition-property: all;
}
.ease-out-quad {
  transition-timing-function: cubic-bezier(.25, .46, .45, .94);
}
.ease-in-quad {
  transition-timing-function: cubic-bezier(.55, .085, .68, .53);
}
.scale-70 {
  transform: scale(.9);
}
.scale-100 {
  transform: scale(1);
}
</style>

<script>
export default {
  name: 'ResetModal2',
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
    reset () {
      this.$emit('reset')
      this.close()
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
