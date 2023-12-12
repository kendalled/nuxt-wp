<template>
  <div class="w-full h-auto bg-gray-100">
    <TosContent />
    <TailFoot />
  </div>
</template>

<script>
import TosContent from '~/components/TosContent'
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    TosContent,
    TailFoot
  },
  head () {
    return {
      title: 'Terms of Service | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'Take a look through our Terms of Service - including refund policies, shipping questions, and proper business expectations between customer and company.' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://lapelpinsandcoins.com/tos' }
      ]
    }
  }
}
</script>
