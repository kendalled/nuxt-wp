<template>
  <div class="py-12 pb-24 bg-gray-800 xl:pt-20 xl:pb-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base font-semibold leading-6 tracking-wide uppercase text-gray-50">
          ordering process
        </h2>
        <h3 class="mt-2 text-3xl antialiased font-extrabold leading-8 tracking-tight text-white sm:text-4xl sm:leading-10">
          Get started in three easy steps.
        </h3>
        <p class="max-w-2xl mt-4 text-xl leading-7 text-gray-200 lg:mx-auto">
          Our hassle-free ordering process ensures you get the best service possible. Send us a sketch or simply describe your idea to get started.
        </p>
      </div>
    </div>
    <div class="grid justify-center grid-cols-1 py-6 mx-auto mt-8 space-y-12 overflow-x-hidden lg:space-y-0 lg:grid-cols-3 sm:py-12 max-w-7xl">
      <div class="relative max-w-md col-span-1 py-3 mx-auto">
        <div class="absolute inset-0 transform shadow-lg bg-gradient-to-r from-light-blue-500 to-blue-600 -rotate-3 sm:-rotate-6 rounded-3xl" />
        <div class="relative overflow-hidden bg-gray-400 shadow-lg rounded-3xl h-96 w-80">
          <NuxtPicture format="webp" src="/backings/drawing.png" class="absolute object-cover object-top w-full h-full -mt-6 " alt="Sketch of a custom pin design." />
        </div>
        <div class="absolute flex items-center w-full pt-4 pb-4 pl-4 bg-gray-50 rounded-b-3xl bottom-3">
          <span class="flex items-center justify-center mr-3 text-2xl font-bold rounded-full bg-light-blue-100 text-light-blue-600 w-9 h-9">1</span>
          <span class="text-xl font-semibold tracking-tight text-gray-700">Send us your idea</span>
        </div>
        <span class="hidden pl-12 text-lg text-white bottom-24">Send us a design or simple sketch.</span>
      </div>
      <div class="relative max-w-md col-span-1 py-3 mx-auto">
        <div class="absolute inset-0 transform shadow-lg bg-gradient-to-r from-light-blue-500 to-blue-600 -rotate-3 sm:-rotate-6 rounded-3xl" />
        <div class="relative overflow-hidden bg-gray-400 shadow-lg rounded-3xl h-96 w-80">
          <NuxtPicture format="webp" src="/backings/proofer.png" class="absolute object-cover object-top w-full h-full -mt-6 " alt="Digital render of a custom pin." />
        </div>
        <div class="absolute flex items-center w-full pt-4 pb-4 pl-4 bg-gray-50 rounded-b-3xl bottom-3">
          <span class="flex items-center justify-center mr-3 text-2xl font-bold rounded-full bg-light-blue-100 text-light-blue-600 w-9 h-9">2</span>
          <span class="text-xl font-semibold tracking-tight text-gray-700">Approve your design</span>
        </div>
        <span class="hidden pl-12 text-lg text-white bottom-24">Send us a design or simple sketch.</span>
      </div>
      <div class="relative max-w-md col-span-1 py-3 mx-auto">
        <div class="absolute inset-0 transform shadow-lg bg-gradient-to-r from-light-blue-500 to-blue-600 -rotate-3 sm:-rotate-6 rounded-3xl" />
        <div class="relative overflow-hidden bg-gray-400 shadow-lg rounded-3xl h-96 w-80">
          <NuxtPicture format="webp" src="/backings/complete.png" class="absolute object-cover object-top w-full h-full -mt-6 " alt="A complete custom pin." />
        </div>
        <div class="absolute flex items-center w-full pt-4 pb-4 pl-4 bg-gray-50 rounded-b-3xl bottom-3">
          <span class="flex items-center justify-center mr-3 text-2xl font-bold rounded-full bg-light-blue-100 text-light-blue-600 w-9 h-9">3</span>
          <span class="text-xl font-semibold tracking-tight text-gray-700">Get your custom pins</span>
        </div>
        <span class="hidden pl-12 text-lg text-white bottom-24">Send us a design or simple sketch.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeSteps'
}
</script>
