<template>
  <div id="contact-section" class="bg-white">
    <div class="px-4 py-16 mx-auto border-b border-gray-200 max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 leading-8 sm:text-3xl sm:leading-9">
            Customer Support
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500 leading-7">
              We have dedicated customer care that is here to answer any question you might have. Contact us via phone or email.
            </p>
          </div>
          <div class="mt-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="ml-3 text-base text-gray-500 leading-6">
                <a class="inline-block transition-colors duration-200 hover:underline hover:text-gray-600" title="Lapel Pins and Coins Phone Number" href="tel:+18004829101">
                  +1 (800) 482-9101
                </a>
                <p class="mt-1 text-sm">
                  Mon - Fri, 9am-6pm EST
                </p>
              </div>
            </div>
            <div class="flex mt-5">
              <div class="flex-shrink-0">
                <svg class="w-6 h-6 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-3 text-base text-gray-500 leading-6">
                <a title="Customer Support Email" class="transition-colors duration-200 hover:underline hover:text-gray-600" href="mailto:info@lapelpinsandcoins.com">
                  info@lapelpinsandcoins.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 md:mt-0">
          <h2 class="text-2xl font-extrabold text-gray-900 leading-8 sm:text-3xl sm:leading-9">
            Locations
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500 leading-7">
              We have two offices in major cities to better serve our clients. Should you need to mail us, here are their addresses. Subject to change.
            </p>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-9 lg:col-span-2">
            <div>
              <h3 class="text-lg font-medium text-gray-900 leading-6">
                Florida
              </h3>
              <dl class="mt-2 text-base text-gray-500 leading-6">
                <div>
                  <dt class="sr-only">
                    address line 1
                  </dt>
                  <dd>
                    6566 University Blvd Suite #100
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">
                    address line 2
                  </dt>
                  <dd>
                    Winter Park, FL 32792
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-900 leading-6">
                Arizona
              </h3>
              <dl class="mt-2 text-base text-gray-500 leading-6">
                <div>
                  <dt class="sr-only">
                    address line 1
                  </dt>
                  <dd>
                    109 West University Dr Suite #3
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">
                    address line 2
                  </dt>
                  <dd>
                    Mesa, AZ 85201
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Locations'
}
</script>
