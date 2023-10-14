<template>
  <div class="bg-white">
    <div class="px-4 py-12 mx-auto max-w-screen-xl sm:py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-screen-xl">
        <h2 class="text-3xl font-extrabold text-gray-900 leading-9 sm:text-4xl sm:leading-10">
          Frequently asked questions
        </h2>
        <div class="pt-6 mt-6 border-t-2 border-gray-200">
          <dl>
            <div v-for="(question, q) in questions" :key="q" :class="q > 0 ? 'pt-6 mt-6 border-t border-gray-200' : ''">
              <dt class="text-lg leading-7">
                <!-- Expand/collapse question button -->
                <button class="flex items-start justify-between w-full text-left text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-900" @click="open(q)">
                  <span class="font-medium text-gray-900">
                    {{ question.query }}
                  </span>
                  <span class="flex items-center ml-6 h-7">
                    <!--
                    Expand/collapse icon, toggle classes based on question open state.
                  -->
                    <svg
                      :class="question.opened ? '-rotate-180' : 'rotate-0'"
                      class="w-6 h-6 transition duration-200 ease-in-out transform"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              <transition
                enter-active-class="transition-opacity duration-200 ease-out"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-100 ease-in"
                leave-class="opacity-100"
                leave-to-class="opacity-0"
                appear
              >
                <dd v-show="question.opened" class="pr-12 mt-2">
                  <p class="text-base text-gray-500 leading-6">
                    {{ question.answer }}
                  </p>
                </dd>
              </transition>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data () {
    return {
      questions: [
        {
          query: 'How long does shipping take?',
          answer: 'Once your design is finalized and you have checked out, you can expect to receive your custom items in under 14 days. Have a tight deadline? No worries! Rush orders are available.',
          opened: false
        },
        {
          query: 'How can I ensure the quality of my product(s)?',
          answer: 'We have the process down to a science. A high-quality digital proof will allow you to check spelling, verify color, adjust size, and make any additional changes or corrections prior to starting production. The size of your lapel pin, keychain, or coin is determined by measuring the widest or tallest point of your design. Your products are then made with stainless steel, and spot-checked for quality.',
          opened: false
        },
        {
          query: 'What material should I choose?',
          answer: 'There are several materials and plating options available to make your custom item stand out. If you are unsure about what choices on the quote form suit your needs, feel free to ask! At Lapel Pins and Coins, we believe in superior customer service. Each order is different, so we always help you choose the options that best suit your design.',
          opened: false
        },
        {
          query: 'Will I get my product on time?',
          answer: 'We will work with you to meet any deadline! Once we have received your approval and payment, we begin production on your order immediately. We give you expected delivery dates, but we have no control over unforeseen circumstances. If you experience any problem with your order arriving, contact us! We’ll be here to help.',
          opened: false
        },
        {
          query: 'Can I change my design?',
          answer: 'Yes! We offer you unlimited revisions on all art proofs, free of charge. Change it up as much as you’d like to get your design just right.',
          opened: false
        },
        {
          query: 'What is your minimum order size?',
          answer: 'Our minimum order quantity for pins is 100 pieces. Challenge coin orders need to be a minimum of 50 pieces. Contact us for any additional questions about your order size.',
          opened: false
        }
      ]
    }
  },
  head () {
    const items = this.questions.map((item, index) => ({
      '@type': 'Question',
      position: index + 1,
      name: item.query,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items
    }
    return {
      script: [
        {
          hid: 'FaqJson',
          type: 'application/ld+json',
          json: structuredData
        }
      ]
    }
  },
  methods: {
    open (val) {
      this.questions[val].opened = !this.questions[val].opened
    }
  }
}
</script>
