<template>
  <section class="mb-6">
    <span class="space-y-2">
      <h3 class="text-lg font-bold text-gray-700">
        {{ heading }}
      </h3>
      <p class="text-gray-700">
        {{ copy }}
      </p>
    </span>
  </section>
</template>

<script>
export default {
  name: 'ContentChunk',
  props: {
    heading: {
      type: String,
      default: 'This is the heading'
    },
    copy: {
      type: String,
      default: 'This is the paragraph text that will be inserted.'
    }
  }
}
</script>
