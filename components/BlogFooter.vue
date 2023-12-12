<template>
  <div class="flex-col items-end w-full h-full bg-white">
    <div class="flex justify-between w-screen h-auto px-4 mx-auto mt-auto sm:px-12 max-w-7xl">
      <div class="flex flex-1 w-0">
        <a href="#" class="inline-flex items-center pt-4 pr-1 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400" @click.prevent="changeSelected(0)">
          <svg class="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Previous
        </a>
      </div>
      <div class="hidden md:flex">
        <a
          v-for="i in 3"
          :key="i"
          href="#"
          :class="[selected === i ? 'border-blue-500 text-blue-600 focus:text-blue-800 focus:border-blue-700' : 'border-transparent text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:border-gray-400']"
          class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 transition duration-150 ease-in-out border-t-2 focus:outline-none"
          @click.prevent="changeTo(i)"
        >
          {{ i }}
        </a>
        <span class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 border-t-2 border-transparent">
          ...
        </span>
        <a href="#" class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400">
          8
        </a>
        <a href="#" class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400">
          9
        </a>
        <a href="#" class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400">
          10
        </a>
      </div>
      <div class="flex justify-end flex-1 w-0">
        <a href="#" class="inline-flex items-center pt-4 pl-1 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400" @click.prevent="changeSelected(1)">
          Next
          <svg class="w-5 h-5 ml-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogFooter',
  props: {
    selected: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      localSelect: 1
    }
  },
  watch: {
    selected (newVal) {
      this.localSelect = newVal
    }
  },
  methods: {
    changeSelected (way) {
      // negative, then positive (simplify later TODO)
      if (way === 0 && this.selected !== 1) {
        this.localSelect = this.selected - 1
        this.$emit('update', this.localSelect)
      } else if (way === 1 && this.selected !== 3) {
        this.localSelect = this.selected + 1
        this.$emit('update', this.localSelect)
      }
    },
    changeTo (val) {
      if (val <= 3 && val > 0) {
        this.localSelect = val
        this.$emit('update', this.localSelect)
      } else {
        this.selected = 1
        this.$emit('update', this.localSelect)
      }
    }
  }
}
</script>
