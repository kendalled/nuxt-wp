<template>
  <div class="bg-gray-100">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <p class="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
        Trusted by companies big &amp; small
      </p>
      <div class="grid grid-cols-2 gap-8 mt-6 md:grid-cols-6 lg:grid-cols-5">
        <div class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <NuxtImg class="h-12" src="logos/tuple-logo-gray-400.svg" loading="lazy" alt="Tuple" />
        </div>
        <div class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <NuxtImg class="h-12" src="logos/mirage-logo-gray-400.svg" loading="lazy" alt="Mirage" />
        </div>
        <div class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <NuxtImg class="h-12" src="logos/statickit-logo-gray-400.svg" loading="lazy" alt="StaticKit" />
        </div>
        <div class="flex justify-center col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1">
          <NuxtImg class="h-12" src="logos/transistor-logo-gray-400.svg" loading="lazy" alt="Transistor" />
        </div>
        <div class="flex justify-center col-span-2 md:col-span-2 md:col-start-4 lg:col-span-1">
          <NuxtImg class="h-12" src="logos/workcation-logo-gray-400.svg" loading="lazy" alt="Workcation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoCloud'
}
</script>
