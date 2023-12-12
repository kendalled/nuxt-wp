<template>
  <div class="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <svg class="absolute transform translate-x-1/2 left-full" width="404" height="404" fill="none" viewBox="0 0 404 404">
        <defs>
          <pattern
            id="mobileDots"
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
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg class="absolute bottom-0 transform -translate-x-1/2 right-full" width="404" height="404" fill="none" viewBox="0 0 404 404">
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <div class="text-center">
        <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          User feedback
        </h1>
        <p class="mt-4 text-lg leading-6 text-gray-500">
          Submit any thoughts, questions, or bugs you've experienced on our site. We appreciate the help in making pins easier for everyone.
        </p>
      </div>
      <div class="mt-12">
        <form action="https://formspree.io/xpzydjkd" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <input type="hidden" name="_next" value="https://lapelpinsandcoins.com/feedbackthanks">
          <div>
            <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name
            </label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input id="first_name" type="text" required name="First name" class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            </div>
          </div>
          <div>
            <div class="flex justify-between">
              <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name
              </label>
              <span id="last-optional" class="text-sm leading-5 text-gray-500">Optional</span>
            </div>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input id="last_name" type="text" aria-describedby="last-optional" name="Last name" class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email
            </label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input
                id="email"
                type="text"
                required
                name="Email"
                class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex justify-between">
              <label for="message" class="inline-block text-sm font-medium leading-5 text-gray-700">Message
              </label>
              <span id="message-length" class="text-sm leading-5 text-gray-500">{{ charsLeft }} characters left</span>
            </div>
            <div class="relative mt-1 rounded-md shadow-sm">
              <textarea id="message" v-model="message" name="Feedback" rows="8" class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <!--
                Simple toggle

                On: "bg-blue-600", Off: "bg-gray-200"
              -->
                <span
                  :checked="isChecked"
                  role="checkbox"
                  name="Agreed"
                  tabindex="0"
                  aria-checked="false"
                  :class="[isChecked ? 'bg-blue-600' : 'bg-gray-200']"
                  class="relative flex-shrink-0 inline-block h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring"
                  @click="isChecked = !isChecked"
                >
                  <!-- On: "translate-x-5", Off: "translate-x-0" -->
                  <span :class="[isChecked ? 'translate-x-5' : 'translate-x-0']" aria-hidden="true" class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow" />
                </span>
              </div>
              <div class="ml-3">
                <p class="text-base leading-6 text-gray-500">
                  By selecting this, you agree to the
                  <a href="#" class="font-medium text-gray-700 underline">Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <span class="inline-flex w-full rounded-md shadow-sm">
              <button type="submit" class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700">
                Submit feedback
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackForm',
  data () {
    return {
      message: '',
      isChecked: false
    }
  },
  computed: {
    charsLeft () {
      return (1000 - this.message.length)
    }
  }
}
</script>
