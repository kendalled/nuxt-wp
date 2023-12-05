<template>
  <div @keydown.escape="shown = false">
    <button ref="questionicon" class="hidden ml-2 text-gray-300 transition-colors duration-150 md:block focus:outline-none hover:text-gray-400 focus:text-gray-400" aria-roledescription="Opens description modal" @click.prevent="toggleShown">
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>
    </button>
    <transition
      enter-from-class="opacity-0 transform scale-95"
      enter-active-class="transition duration-200 ease-out"
      enter-to-class="opacity-100 transform scale-100"
      leave-from-class="opacity-100 transform scale-100"
      leave-active-class="transition duration-75 ease-in"
      leave-to-class="opacity-0 transform scale-95"
    >
      <span v-if="shown" v-click-outside="closeHandler" class="z-50 hidden w-64 h-auto mt-1 -ml-32 text-left bg-white shadow-lg origin-top transform rounded-md md:block md:absolute">
        <div class="px-4 py-3 rounded-md ring-1 ring-black ring-opacity-5">
          <p class="leading-normal text-gray-700">
            {{ desc }}
          </p>
        </div>
      </span>
    </transition>
  </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'
export default {
  name: 'QuestionIcon',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    desc: {
      type: String,
      default: 'Known for their antiqued and classy look, die struck pins are famous for being professional and cost efficient. However, they do not allow for color.'
    }
  },
  data () {
    return {
      shown: false
    }
  },
  watch: {
    shown (newVal, oldVal) {
      if (!newVal) {
        this.$refs.questionicon.blur()
      }
    }
  },
  methods: {
    toggleShown () {
      this.shown = !this.shown
    },
    closeHandler () {
      if (this.shown) {
        this.shown = false
      } else {
        console.log('already closed dummy')
      }
    }
  }
}
</script>
