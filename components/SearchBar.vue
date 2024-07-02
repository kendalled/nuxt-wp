<template>
  <div>
  <div class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-center">
        <div class="w-full max-w-lg lg:max-w-xs">
          <label for="search" class="sr-only">Search</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
              </svg>
            </div>
            <!-- transition-all duration-300 transform  -->
            <input id="search" v-model="query" name="search" class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="Search" type="search">
          </div>
        </div>
  </div>
  <div class="overflow-hidden rounded-md bg-white shadow ml-4 mt-4">
  <ul role="list" class="divide-y divide-gray-200">
    <li class="px-6 py-4">
      <div class="min-w-0">
        <div class="flex items-start gap-x-3">
          <p class="text-sm font-semibold leading-6 text-gray-900">GraphQL API</p>
          <p class="mt-0.5 whitespace-nowrap rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Lapel Pins</p>
        </div>
        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p class="whitespace-nowrap">Due on <time datetime="2023-03-17T00:00Z">March 17, 2023</time></p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <p class="truncate">Created by Leslie Alexander</p>
        </div>
      </div>
    </li>
    <li class="px-6 py-4">
      <div class="min-w-0">
        <div class="flex items-start gap-x-3">
          <p class="text-sm font-semibold leading-6 text-gray-900">GraphQL API</p>
          <p class="mt-0.5 whitespace-nowrap rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Lapel Pins</p>
        </div>
        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p class="whitespace-nowrap">Due on <time datetime="2023-03-17T00:00Z">March 17, 2023</time></p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <p class="truncate">Created by Leslie Alexander</p>
        </div>
      </div>
    </li>

    <!-- More items... -->
  </ul>
</div>

</div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      listItems: [
        'Antique Lapel Pins',
        'Political Lapel Pins',
        'Trading Pins',
        'Police Challenge Coins'
      ]
    }
  }
}
</script>