<template>
  <div>
    <FeedbackForm />
  </div>
</template>

<script>
import FeedbackForm from '~/components/FeedbackForm'

export default {
  name: 'Feedback',
  components: {
    FeedbackForm
  },
  layout: 'blank',
  head () {
    return {
      title: 'Customer Feedback Form | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'During your time with us, let us know if you have any feedback! We are always striving to make our ordering process and customer support better. Use our feedback form to let us know any thoughts or questions you may have.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://lapelpinsandcoins.com/feedback' }
      ]
    }
  }
}
</script>
