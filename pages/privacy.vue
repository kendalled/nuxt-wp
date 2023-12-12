<template>
  <div class="w-full h-auto bg-gray-100">
    <PrivacyContent />
    <TailFoot />
  </div>
</template>

<script>
import PrivacyContent from '~/components/PrivacyContent'
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    PrivacyContent,
    TailFoot
  },
  head () {
    return {
      title: 'Privacy Policy | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'Take a look through our privacy policy, summed up in everyday english at the top. We are transparent about how we use and store any data, and comply to GDPR guidelines.' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://lapelpinsandcoins.com/privacy' }
      ]
    }
  }
}
</script>
