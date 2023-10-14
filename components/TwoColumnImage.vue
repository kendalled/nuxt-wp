<template>
  <div class="overflow-hidden" style="background: linear-gradient(to bottom, #ffffff, #f9fafb);">
    <div class="relative px-4 pt-16 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
      <div class="mx-auto text-base max-w-prose lg:max-w-none">
        <p class="text-base font-semibold tracking-wide text-blue-600 uppercase leading-6">
          {{ teaser }}
        </p>
        <h2 class="mt-2 mb-8 text-3xl font-extrabold tracking-tight text-gray-900 leading-8 sm:text-4xl sm:leading-10">
          {{ headline }}
        </h2>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
          <svg class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
            <figure>
              <div class="relative pb-7/12 lg:pb-0">
                <img
                  :src="img"
                  alt="Woman wearing customized pins"
                  width="1184"
                  height="1376"
                  class="lg:absolute inset-0 object-cover object-center w-full h-full bg-gray-100 rounded-lg shadow-lg myMinHeight lg:static lg:h-auto"
                >
              </div>
              <figcaption class="flex mt-3 text-sm text-gray-500">
                <svg class="flex-none w-5 h-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                </svg>
                Photograph by&nbsp;<a href="https://unsplash.com" title="Link to source" target="_blank" rel="noopener">Unsplash</a>
              </figcaption>
            </figure>
          </div>
        </div>
        <div>
          <div class="mx-auto text-base max-w-prose lg:max-w-none">
            <p class="mb-5 text-lg text-gray-500 leading-7">
              {{ grabber }}
            </p>
          </div>
          <div class="mx-auto text-gray-500 prose lg:max-w-none lg:row-start-1 lg:col-start-1">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoColumnImage',
  props: {
    teaser: {
      type: String,
      default: 'Since 1999'
    },
    headline: {
      type: String,
      default: 'Our pins stand out from the rest.'
    },
    grabber: {
      type: String,
      default: 'Custom pins are a simple but effective product. They are extremely versatile and adaptable, with a variety of uses that are only limited by your imagination.'
    },
    img: {
      type: String,
      default: 'https://images.unsplash.com/photo-1526659074712-d13c13df4484?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=focalpoint&fp-x=.565&fp-y=.55&w=1184&h=1376&q=80'
    }
  }
}
</script>

<style scoped>
.myMinHeight {
  min-height: 10rem;
}
@media screen and (min-width: 1024px){
  .myMinHeight {
    min-height: 35rem;
  }
}
</style>
