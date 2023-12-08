<template>
    <div class="w-screen h-screen bg-gray-50">
      <ThanksModal :message="'Your quote request has been received by our team. We will contact you within 24 hours.'" />
    </div>
  </template>
  
  <script>
  import ThanksModal from '~/components/ThanksModal'
  export default {
    components: {
      ThanksModal
    },
    layout: 'default'
  }
  </script>
  