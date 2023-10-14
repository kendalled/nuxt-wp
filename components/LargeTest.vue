<template>
  <section class="mt-8 overflow-hidden">
    <div class="relative max-w-screen-xl px-4 pt-20 pb-12 mx-auto sm:px-6 lg:px-8 lg:py-20">
      <svg class="absolute left-0 transform -translate-y-24 top-full translate-x-80 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
        <defs>
          <pattern
            id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
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
        <rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
      </svg>

      <svg class="absolute hidden transform translate-x-1/2 -translate-y-1/2 lg:block right-full top-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern
            id="56409614-3d62-4985-9a10-7ca758a8f4f0"
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
        <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
      </svg>

      <div class="relative lg:flex lg:items-center lg:flex-row-reverse">
        <div class="hidden lg:block lg:flex-shrink-0">
          <img class="w-auto h-64" :src="img" alt="">
        </div>

        <div class="relative lg:ml-10">
          <svg class="absolute top-0 left-0 text-blue-200 transform -translate-x-8 -translate-y-24 opacity-50 h-36 w-36" stroke="currentColor" fill="none" viewBox="0 0 144 144">
            <path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
          </svg>
          <blockquote>
            <div class="relative text-2xl font-medium leading-9 text-gray-900">
              <p class="md:pr-4">
                I highly recommend Lapel Pins &amp; Coins! The service is exceptional. They responded quickly and were very prompt in fixing what I wanted changed on the proof work. The whole process was user friendly and hassle free.
              </p>
            </div>
            <footer class="mt-8">
              <div class="flex">
                <div class="flex-shrink-0 lg:hidden">
                  <img class="w-24 h-24 rounded-full" :src="img" alt="">
                </div>
                <div class="ml-4 lg:ml-0 md:flex md:items-center md:justify-center">
                  <div class="hidden border-2 border-gray-300 rounded-full md:flex-shrink-0 md:block">
                    <img class="w-10 h-10 mx-auto rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div class="text-base font-medium leading-6 text-gray-900">
                      Judith Black
                    </div>

                    <svg class="hidden w-5 h-5 mx-1 text-blue-600 md:block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div class="text-base font-medium leading-6 text-gray-500">
                      CEO, Workcation
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LargeTest',
  props: {
    img: {
      type: String,
      default: '/pins.png'
    }
  }
}
</script>
