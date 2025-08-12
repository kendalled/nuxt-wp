<template>
    <header :class="{ 'bg-gray-900 text-white': darkMode, 'bg-white text-gray-800': !darkMode }" class="flex items-center justify-between p-4">
    <nuxt-link to="/" class="text-2xl font-semibold">NuxtPress Demo</nuxt-link>
      <button @click="toggleDarkMode" :class="{ 'bg-gray-800 text-white rounded-md shadow-sm': darkMode, 'bg-gray-200 text-gray-800 rounded-md shadow-sm': !darkMode }" class="shadow-xs text-sm px-3 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-700 hover:text-white font-semibold">
        Toggle Dark Mode
      </button>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        darkMode: true, // Set dark mode to true by default
      };
    },
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark', this.darkMode);
      },
    },
  };
  </script>
  