<template>
  <div class="fixed inset-0 flex items-center justify-center px-4 pb-6 sm:p-0">
    <!--
    Background overlay, show/hide based on modal state.
  -->
    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="open" class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75" />
      </div>
    </transition>

    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="duration-200 ease-in"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div v-show="open" class="px-4 pt-5 pb-4 overflow-hidden bg-white rounded-lg shadow-xl transition-all transform sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div>
          <div class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 id="modal-headline" class="text-lg font-medium text-gray-900 leading-6">
              Thank you!
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500 leading-5">
                {{ message }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <span class="flex w-full rounded-md shadow-sm">
            <nuxt-link to="/" class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent leading-6 transition duration-150 ease-in-out rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm sm:leading-5">
              Return to home
            </nuxt-link>
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ThanksModal',
  props: {
    message: {
      type: String,
      default: 'Your quote request has been received by our team. We will contact you within 24 hours.'
    }
  },
  data () {
    return {
      open: false
    }
  },
  created () {
    const vm = this
    setTimeout(() => {
      vm.open = true
    }, 250)
  }
}
</script>
