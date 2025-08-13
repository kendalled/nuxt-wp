<template>
  <div class="relative h-64 w-full overflow-hidden">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    />
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    backgroundImage: {
      type: String,
      default: '/pinblog1.jpg'
    }
  }
}
</script>