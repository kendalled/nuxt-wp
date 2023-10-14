<template>
  <div class="relative bg-gray-800">
    <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1563910463363-21a8b6c9d72f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80&auto=format&fit=crop&w=1350&q=80&auto=format&fit=crop&w=1920&q=60&blend=6875F5&sat=-100&blend-mode=multiply" alt="Support team">
    </div>
    <div class="relative px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <div class="text-base antialiased font-semibold tracking-wider text-gray-300 uppercase leading-6">
          superior customer support
        </div>
        <h2 class="mt-2 text-3xl antialiased font-bold tracking-tight text-white leading-9 sm:text-4xl sm:leading-10">
          We’re here to help.
        </h2>
        <p class="mt-3 text-lg antialiased text-gray-300 leading-7">
          We want to work with you every step of this process! We have dedicated customer care that is here to answer any question you might have. We want to bring your ideas to life. Fill out our quick and easy quote form and get a complimentary art proof today.
        </p>
        <div class="flex justify-start mt-8">
          <div class="inline-flex shadow rounded-md">
            <button aria-roledescription="Scrolls to contact section" class="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-600 bg-white border border-transparent leading-6 transition duration-150 ease-in-out rounded-md hover:text-gray-900 focus:outline-none focus:ring hover:bg-gray-100" @click.prevent="testScroll('contact-section')">
              Contact Us
              <!-- <svg class="w-5 h-5 ml-3 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" clip-rule="evenodd" />
              </svg> -->
            </button>
          </div>
          <div class="inline-flex ml-6 shadow rounded-md">
            <nuxt-link to="/quote" class="inline-flex items-center justify-center px-8 py-3 text-base font-medium bg-blue-600 border border-transparent leading-6 transition duration-150 ease-in-out rounded-md text-blue-50 hover:text-white focus:outline-none focus:ring hover:bg-blue-500">
              Get Started
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TailCta',
  methods: {
    testScroll (elem) {
      if (process.browser) {
        document.getElementById(elem).scrollIntoView({ behavior: 'smooth', block: 'center' })
        document.getElementById('phone-button').blur()
      }
    }
  }
}
</script>
