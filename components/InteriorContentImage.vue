<template>
  <div class="bg-gray-50">
    <section class="relative px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between w-full h-auto mx-auto rounded max-w-7xl lg:flex-row feature">
        <!-- first image for desktop -->
        <div class="items-center justify-center hidden h-auto -mt-4 lg:flex lg:w-2/5">
          <img :class="[isBig ? 'w-auto h-56' : 'w-64 h-auto -ml-10']" :src="img" :alt="headline">
        </div>
        <div class="prose max-w-none lg:w-3/5">
          <h2>
            {{ headline }}
          </h2>
          <p>
            {{ p1 }}
          </p>
          <p class="hidden">
            {{ p2 }}
          </p>
        </div>
        <!-- second image for mobile -->
        <div class="flex items-center justify-center w-full h-64 lg:hidden">
          <img class="object-cover w-64 h-auto mt-12 lg:hidden" :src="img" :alt="headline">
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 0 !important;
}
.prose {
  color: rgb(107, 114, 128) !important;
}
</style>

<script>
export default {
  name: 'InteriorContentImage',
  props: {
    headline: {
      type: String,
      default: 'Headline 2'
    },
    p1: {
      type: String,
      default: 'Para 1.'
    },
    p2: {
      type: String,
      default: ''
    },
    isBig: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: '/pin01.png'
    }
  }
}
</script>
