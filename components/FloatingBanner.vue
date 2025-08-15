<template>
  <transition
    enter-active-class="transition duration-300 ease-out transform"
    enter-from-class="opacity-0 translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-100 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="fixed inset-x-0 bottom-0 z-[100] pb-2 sm:pb-5">
      <div class="px-2 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="p-2 bg-yellow-400 rounded-lg shadow-lg sm:p-3">
          <div class="flex flex-wrap items-center justify-between">
            <div class="flex items-center flex-1 w-0">
              <span class="flex p-2 bg-yellow-600 rounded-lg">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <p class="ml-3 font-medium text-white truncate">
                <span class="md:hidden">
                  {{ message2 }}
                </span>
                <span class="hidden md:inline">
                  {{ message }}
                </span>
              </p>
            </div>
            <div class="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
              <div class="rounded-md shadow-sm">
                <a target="_blank" href="https://m.me/LapelPinsCoins" title="Contact our support team via Facebook livechat." class="flex items-center justify-center px-4 py-2 text-sm font-medium text-yellow-600 bg-white border border-transparent leading-5 transition duration-150 ease-in-out rounded-md hover:text-yellow-500 focus:outline-none focus:ring">
                  Need help?
                </a>
              </div>
            </div>
            <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
              <button type="button" class="flex p-2 -mr-1 transition duration-150 ease-in-out rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500" aria-label="Dismiss" @click.prevent="closeMe">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FloatingBanner',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: 'No choice is selected.'
    },
    message2: {
      type: String,
      default: 'You must choose an option to continue.'
    }
  },
  mounted () {
    const onEscape = (e) => {
      if (this.show && e.keyCode === 27) {
        this.closeMe()
      }
    }
    document.addEventListener('keydown', onEscape)

    // this.$once('hook:destroyed', () => {
    //   document.removeEventListener('keydown', onEscape)
    // })
  },
  methods: {
    closeMe () {
      this.$emit('close')
    }
  }
}
</script>
