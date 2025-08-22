<template>
  <div>
    <div class="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-7xl mx-auto">
      <svg class="absolute transform translate-x-1/2 left-full" width="404" height="404" fill="none" viewBox="0 0 404 404">
        <defs>
          <pattern
            id="contactDots1"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#contactDots1)" />
      </svg>
      <svg class="absolute bottom-0 transform -translate-x-1/2 right-full" width="404" height="404" fill="none" viewBox="0 0 404 404">
        <defs>
          <pattern
            id="contactDots2"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#contactDots2)" />
      </svg>
      
      <div class="text-center">
        <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Contact Us
        </h1>
        <p class="mt-4 text-lg leading-6 text-gray-500">
          Get in touch with our team for questions about your custom pins, coins, or keychains. We're here to help bring your ideas to life.
        </p>
      </div>

      <div class="mt-20">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          
          <!-- Contact Information -->
          <div>
            <div class="max-w-md mx-auto lg:mx-0">
              <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                Get in Touch
              </h2>
              <p class="mt-3 text-lg text-gray-500">
                Have questions about your order or need design assistance? Our experienced team is ready to help.
              </p>
              <div class="mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Phone</p>
                    <p class="text-sm text-gray-500">(800) 482-9101</p>
                  </div>
                </div>
                <div class="mt-6 flex">
                  <div class="flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Email</p>
                    <p class="text-sm text-gray-500">info@lapelpinsandcoins.com</p>
                  </div>
                </div>
                <div class="mt-6 flex">
                  <div class="flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Business Hours</p>
                    <p class="text-sm text-gray-500">Monday - Friday: 8 AM - 6 PM EST</p>
                  </div>
                </div>
                <div class="mt-6 flex">
                  <div class="flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Address</p>
                    <p class="text-sm text-gray-500">6566 University Blvd</p>
                    <p class="text-sm text-gray-500">Winter Park, FL, 32746</p>
                  </div>
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div class="mt-8 border-t border-gray-200 pt-8">
                <h3 class="text-lg font-medium text-gray-900">Quick Actions</h3>
                <div class="mt-4 space-y-3">
                  <NuxtLink to="/quote" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Get a Quote
                  </NuxtLink>
                  <div class="md:inline-block md:ml-4">
                    <NuxtLink to="/feedback" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Send Feedback
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="mt-12 lg:mt-0">
            <div class="max-w-lg mx-auto lg:max-w-none">
              <form name="contact" method="POST" data-netlify="true" class="grid grid-cols-1 gap-y-6">
                <div>
                  <label for="contact_name" class="block text-sm font-medium leading-5 text-gray-700">Name *</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <input
                      id="contact_name"
                      type="text"
                      required
                      name="Name"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="Your full name"
                    >
                  </div>
                </div>

                <div>
                  <label for="contact_email" class="block text-sm font-medium leading-5 text-gray-700">Email *</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <input
                      id="contact_email"
                      type="email"
                      required
                      name="Email"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="your@email.com"
                    >
                  </div>
                </div>

                <div>
                  <label for="contact_phone" class="block text-sm font-medium leading-5 text-gray-700">Phone</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <input
                      id="contact_phone"
                      type="tel"
                      name="Phone"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="(555) 123-4567"
                    >
                  </div>
                </div>

                <div>
                  <label for="contact_subject" class="block text-sm font-medium leading-5 text-gray-700">Subject *</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <select
                      id="contact_subject"
                      required
                      name="Subject"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    >
                      <option value="">Select a topic</option>
                      <option value="Quote Question">Quote Question</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Design Help">Design Help</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Billing Question">Billing Question</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label for="contact_message" class="block text-sm font-medium leading-5 text-gray-700">Message *</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <textarea
                      id="contact_message"
                      required
                      name="Message"
                      rows="5"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" @click="showSuccess = false" />
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Message Sent!
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                @click="showSuccess = false"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TailFoot class="mt-12 border-t border-gray-200"/>
  </div>
</template>

<script>
import TailFoot from '~/components/TailFoot'

export default {
  name: 'Contact',
  components: {
    TailFoot
  },
  layout: 'blank',
  data() {
    return {
      showSuccess: false
    }
  },
  mounted() {
    // Check for success parameter
    if (this.$route.query.success === 'true') {
      this.showSuccess = true
    }
  },
  head() {
    return {
      title: 'Contact Us | Lapel Pins & Coins',
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Contact Lapel Pins & Coins for questions about custom pins, coins, and keychains. Call (800) 207-9872 or use our contact form. We\'re here to help with your custom orders.' 
        },
        { name: 'keywords', content: 'contact, custom pins, custom coins, keychains, support, help, customer service' }
      ],
      link: [
        { rel: 'canonical', href: 'https://lapelpinsandcoins.com/contact' }
      ]
    }
  }
}
</script>