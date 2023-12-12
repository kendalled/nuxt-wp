<template>
  <div class="w-screen h-screen bg-gray-50">
    <ThanksModal :message="'We have received your response. If requested, customer support will contact you ASAP.'" />
  </div>
</template>

<script>
import ThanksModal from '~/components/ThanksModal'
export default {
  components: {
    ThanksModal
  },
  layout: 'login'
}
</script>
