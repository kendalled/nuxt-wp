<template>
  <div class="w-24 h-24 mx-auto mb-2 overflow-hidden transition-colors duration-100 border-4 border-transparent rounded-full sm:h-32 sm:w-32">
    <div :class="isLoad ? 'hidden' : 'block'" class="w-full h-full bg-gray-200 rounded-full animate-pulse" />
    <NuxtImg
      ref="theImg"
      :alt="choice.name"
      format="webp"
      :src="choice.src"
      draggable="false"
      class="mx-auto"
      data-manual-lazy
      :class="[small ? 'object-contain h-24 w-24 sm:ml-3 sm:mt-3' : 'object-cover rounded-full', isLoad ? 'opacity-100' : 'opacity-0']"
    />
  </div>
</template>

<script>
export default {
  name: 'IradioImg',
  props: {
    choice: {
      type: Object,
      default () {
        return {
          uid: 0,
          title: 'Antiqued Gold',
          src: '/quote/AGold.png',
          pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
          cons: ['If your logo or design requires color, this is not the option.']
        }
      }
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  mounted () {
    this.lazyLoadImage()
    this.isLoad = true
  },
  methods: {
    lazyLoadImage () {
      const media = this.$refs.theImg
      // return this.$lazyLoad(media)
      // [...media].forEach(m => this.$lazyLoad(m))
    }
  }
}
</script>
