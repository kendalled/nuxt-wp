<template>
<!-- Search Palette TODO: keyboard support -->
<div v-if="showModal" class="relative z-50" role="dialog" aria-modal="true" @keydown.escape="close">
  <!--
    Background backdrop, show/hide based on modal state.
    was: bg-gray-500 opacityz
  -->
  <transition
    enter-active-class="ease-out duration-300"
    leave-active-class="ease-in duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    appear
    @before-leave="backdropLeaving = true"
    @after-leave="backdropLeaving = false"
  >
    <div v-show="showBackdrop" class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true" appear></div>
  </transition>
  <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
    <!--
      Command palette, show/hide based on modal state.
    -->
    <transition
      enter-active-class="ease-out duration-300"
      leave-active-class="ease-in duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
      appear
      @before-leave="cardLeaving = true"
      @after-leave="cardLeaving = false"
      >
      <div v-show="showPalette" v-click-outside="vcoConfig" @keydown.escape="closePalette" class="mt-24 mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
        <div class="relative">
          <svg class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
          </svg>
          <input ref="searchbar" v-model="search" type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options">
        </div>

        <!-- Results, show/hide based on command palette state -->
        <ul v-if="resultList.length !== 0" class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800" id="options" role="listbox">
          <!-- Active: "bg-indigo-600 text-white" TODO: fix click target -->
          <li v-for="item, ind in resultList" class="cursor-pointer select-none px-4 py-2 hover:bg-blue-600 hover:text-white group" :id="`option-${ind}`" role="option" tabindex="-1">
            <nuxt-link :to="item.slug" :title="item.title" class="w-full">
              <span class="text-gray-700 group-hover:text-blue-100">
                {{ item.category }} >
              </span>
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>

        <!-- Empty state, show/hide based on command palette state -->
        <p v-if="noResults" class="p-4 text-sm text-gray-500">No pages found.</p>
      </div>
  </transition>
  </div>
</div>

</template>

<script>
import vClickOutside from 'click-outside-vue3'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showModal: false,
      showBackdrop: false,
      showPalette: false,
      backdropLeaving: false,
      cardLeaving: false,
      noResults: false,
      search: '',
      // TODO: pass as prop
      listItems: [
            {
              title: 'Lapel Pins',
              slug: '/pins',
              category: 'Pins'
            },
            {
              title: 'Die Struck',
              slug: '/pins/die-struck',
              category: 'Pins'
            },
            {
              title: 'Soft Enamel',
              slug: '/pins/soft-enamel',
              category: 'Pins'
            },
            {
              title: 'Hard Enamel',
              slug: '/pins/hard-enamel',
              category: 'Pins'
            },
            {
              title: 'Silk Screen',
              slug: '/pins/silk-screen',
              category: 'Pins'
            },
            {
              title: 'Offset Printed',
              slug: '/pins/offset-printed',
              category: 'Pins'
            },
            {
              title: 'Years of Service Pins',
              slug: '/pins/years-of-service',
              category: 'Pins'
            },
            {
              title: 'Easter Pins',
              slug: '/pins/easter',
              category: 'Pins'
            },
            {
              title: 'Police Pins',
              slug: '/pins/police',
              category: 'Pins'
            },
            {
              title: 'Holiday Pins',
              slug: '/pins/holiday',
              category: 'Pins'
            },
            {
              title: 'Rainbow Pins',
              slug: '/pins/rainbow',
              category: 'Pins'
            },
            {
              title: 'Inspiration Pins',
              slug: '/pins/inspiration',
              category: 'Pins'
            },
            {
              title: 'Glitter Pins',
              slug: '/pins/glitter',
              category: 'Pins'
            },
            {
              title: 'Gaming Pins',
              slug: '/pins/video-game',
              category: 'Pins'
            },
            {
              title: 'Medical Pins',
              slug: '/pins/medical',
              category: 'Pins'
            },
            {
              title: 'School Pins',
              slug: '/pins/school',
              category: 'Pins'
            },
            {
              title: 'Trading Pins',
              slug: '/pins/sports-trading',
              category: 'Pins'
            },
            {
              title: 'Food Pins',
              slug: '/pins/food',
              category: 'Pins'
            },
            {
              title: 'Heart Pins',
              slug: '/pins/heart',
              category: 'Pins'
            },
            {
              title: 'Travel Pins',
              slug: '/pins/travel-outdoor',
              category: 'Pins'
            },
            {
              title: 'Angel Pins',
              slug: '/pins/angel',
              category: 'Pins'
            },
            {
              title: 'Space Pins',
              slug: '/pins/space',
              category: 'Pins'
            },
            {
              title: 'Glowing Pins',
              slug: '/pins/glow-in-the-dark',
              category: 'Pins'
            },
            {
              title: 'Clear Enamel Pins',
              slug: '/pins/transparent-enamel',
              category: 'Pins'
            },
            {
              title: 'Star Pins',
              slug: '/pins/star',
              category: 'Pins'
            },
            {
              title: 'Animal Pins',
              slug: '/pins/animal',
              category: 'Pins'
            },
            {
              title: 'Safety Pins',
              slug: '/pins/safety',
              category: 'Pins'
            },
            {
              title: 'Tie Pins',
              slug: '/pins/tie',
              category: 'Pins'
            },
            {
              title: 'State Flag Pins',
              slug: '/pins/state-flag',
              category: 'Pins'
            },
            {
              title: 'LGBTQ Pins',
              slug: '/pins/lgbtq-pride',
              category: 'Pins'
            },
            {
              title: 'World Flag Pins',
              slug: '/pins/world-flag',
              category: 'Pins'
            },
            {
              title: 'Fashion Pins',
              slug: '/pins/fashion',
              category: 'Pins'
            },
            {
              title: 'Religious Pins',
              slug: '/pins/religious',
              category: 'Pins'
            },
            {
              title: 'Public Servant Pins',
              slug: '/pins/public-servant',
              category: 'Pins'
            },
            {
              title: 'American Flag Pins',
              slug: '/pins/american-flag',
              category: 'Pins'
            },
            {
              title: 'TV Show Pins',
              slug: '/pins/tv-show',
              category: 'Pins'
            },
            {
              title: 'Movie Pins',
              slug: '/pins/movie',
              category: 'Pins'
            },
            {
              title: 'Varsity Pins',
              slug: '/pins/varsity',
              category: 'Pins'
            },
            {
              title: 'Political Pins',
              slug: '/pins/political',
              category: 'Pins'
            },
            {
              title: 'Challenge Coins',
              slug: '/coins',
              category: 'Coins'
            },
            {
              title: 'Antique Gold',
              slug: '/coins/antique-gold',
              category: 'Coins'
            },
            {
              title: 'Antique Silver',
              slug: '/coins/antique-silver',
              category: 'Coins'
            },
            {
              title: 'Antique Copper',
              slug: '/coins/antique-copper',
              category: 'Coins'
            },
            {
              title: 'Polished Gold',
              slug: '/coins/polished-gold',
              category: 'Coins'
            },
            {
              title: 'Polished Silver',
              slug: '/coins/polished-silver',
              category: 'Coins'
            },
            {
              title: 'Polished Copper',
              slug: '/coins/polished-copper',
              category: 'Coins'
            },
            {
              title: 'Nursing Coins',
              slug: '/coins/nursing',
              category: 'Coins'
            },
            {
              title: 'Fire Coins',
              slug: '/coins/fire-department',
              category: 'Coins'
            },
            {
              title: 'Police Coins',
              slug: '/coins/police',
              category: 'Coins'
            },
            {
              title: 'Military Coins',
              slug: '/coins/military',
              category: 'Coins'
            }
      ]
    }
  },
  computed: {
    path () {
      return this.$route.path
    },
    resultList() {
      if (!this.search) {
        this.noResults = false;
        return [];
      }
      const searchLower = this.search.toLowerCase();
      const filteredItems = this.listItems.filter(item => item.title.toLowerCase().includes(searchLower));
      this.noResults = filteredItems.length === 0;
      return filteredItems;
    },
    leaving () {
      return this.backdropLeaving || this.cardLeaving
    },
    vcoConfig () {
        return {
          handler: this.close,
          events: ['click'],
          // activate / deactivate click-outside directive dynamically
          isActive: this.showPalette
        }
    }
  },
  watch: {
    open: {
      handler (newValue) {
        if (newValue) {
          this.show()
        } else {
          this.close()
        }
      },
      immediate: true
    },
    leaving (newValue) {
      if (newValue === false) {
        this.showModal = false
        this.$emit('close')
        this.search = ''
      }
    },
    // TODO: Handle better
    path (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.close()
      }
    },
    showPalette (newValue) {
      if (newValue === true) {
        nextTick(() => {
          this.$refs.searchbar.focus();
        });
      }
    },
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    show () {
      this.showModal = true
      this.showBackdrop = true
      this.showPalette = true
    },
    close () {
      this.showBackdrop = false
      this.showPalette = false
    }
  }
}
</script>
