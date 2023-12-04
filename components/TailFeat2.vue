<template>
  <div class="pt-12 pb-16 overflow-hidden bg-gray-100 lg:pb-24 lg:pt-14">
    <div
      ref="rootey"
      class="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl"
    >
      <!-- TODO:SHOW <svg
        class="absolute hidden transform -translate-x-1/2 lg:block -translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        style="left: 95%; top:1rem;"
      >
        <defs>
          <pattern
            id="svg-pattern-squares-1"
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
        <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
      </svg> -->
      <svg
        class="absolute hidden transform -translate-x-1/2 lg:block -translate-y-1/4"
        width="404"
        height="564"
        fill="none"
        viewBox="0 0 404 564"
        style="left: 95%; top:28%;"
      >
        <defs>
          <pattern
            id="svg-pattern-squares-1"
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
        <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
      </svg>

      <div class="relative">
        <h3 class="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-10">
          The easiest way to order customized items.
        </h3>
        <p class="hidden max-w-3xl mx-auto mt-4 text-xl leading-7 text-center text-gray-500 sm:block">
          Our ordering process is simple. Select your options, attach your art, and you're done! You'll receive a free quote and art proof within 24 hours.
        </p>
        <p class="max-w-3xl mx-auto mt-4 text-xl leading-7 text-center text-gray-500 sm:hidden">
          Our ordering process is simple. Select your options, attach your files, and you're done!
        </p>
      </div>

      <div id="features" class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
            Get started with a free quote
          </h4>
          <p class="mt-3 text-lg leading-7 text-gray-500">
            We want to work with you to bring your ideas to life. That’s why we’ve made our process as quick and easy as possible. Let us do the hard work, and you’ll have your pins in no time!
          </p>

          <ul class="mt-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                    <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg font-medium leading-6 text-gray-900">
                    Unlimited revisions
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    It can be hard to get your design just right. We let you change it up however many times you need, at no additional cost to you.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                    <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg font-medium leading-6 text-gray-900">
                    Fast production
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    We work directly with factories to make sure your pins are done as fast as possible. That, along with free FedEx Priority Shipping, guarantees your order will always arrive on time.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                    <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg font-medium leading-6 text-gray-900">
                    Lightning-fast service
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Our customer service is our top priority. We will be there with you every step of the way to perfect your design.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="relative mt-10 -mx-4 lg:mt-0">
          <svg class="absolute transform -translate-x-1/2 translate-y-8 left-1/2 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern
                id="svg-pattern-squares-2"
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
            <rect width="784" height="350" fill="url(#svg-pattern-squares-2)" />
          </svg>
          <!-- <img class="relative mx-auto" width="490" src="~/static/ex1.png" alt=""> -->
          <QuoteSvg />
        </div>
      </div>

      <svg class="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern
            id="svg-pattern-squares-3"
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
        <rect width="404" height="784" fill="url(#svg-pattern-squares-3)" />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="lg:col-start-2">
            <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Always in the loop
            </h4>
            <p class="mt-3 text-lg leading-7 text-gray-500">
              From the moment you submit your quote, we will start working on your design. We pride ourselves on great customer support - we'll always keep you up to date.
            </p>

            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                      <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg font-medium leading-6 text-gray-900">
                      Mobile notifications
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Opt into our text notifications! Make sure you always know the most up to date info on every part of your order.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                      <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg font-medium leading-6 text-gray-900">
                      Reminder emails
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      We will update you via email any time your order changes. Reach out to us if you have any questions!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
            <svg class="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
              <defs>
                <pattern
                  id="svg-pattern-squares-4"
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
              <rect width="784" height="404" fill="url(#svg-pattern-squares-4)" />
            </svg>
            <MobileSvg />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteSvg from '~/components/QuoteSvg'
import MobileSvg from '~/components/MobileSvg'
export default {
  name: 'TailFeat2',
  components: {
    QuoteSvg,
    MobileSvg
  }
}
</script>
