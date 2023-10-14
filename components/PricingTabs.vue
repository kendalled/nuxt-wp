<template>
  <div class="mb-6">
    <div class="px-4 sm:px-6 sm:hidden">
      <CustomSelect :title="'Production style'" :options="choices" @chosen="updateSelect" />
    </div>
    <div class="hidden sm:block">
      <nav class="flex">
        <a
          v-for="(choice, j) in choices"
          :key="j"
          href="#"
          :class="[selected === j ? 'text-blue-800 bg-blue-100 focus:text-blue-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:text-blue-600 focus:bg-blue-50', j > 0 ? 'ml-4' : 'ml-0']"
          class="px-3 py-2 text-sm font-medium leading-5 transition-colors duration-200 rounded-md focus:outline-none"
          @click.prevent="select(j)"
        >
          {{ choice }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import CustomSelect from '~/components/CustomSelect'
export default {
  name: 'PricingTabs',
  components: {
    CustomSelect
  },
  props: {
    choices: {
      type: Array,
      default () {
        return [
          'Die Struck',
          'Soft Enamel',
          'Silk Screen',
          'Hard Enamel'
        ]
      }
    }
  },
  data () {
    return {
      selected: 0
    }
  },
  methods: {
    updateSelect (val) {
      const ind = this.choices.indexOf(val)
      this.selected = ind
      this.$emit('selected', ind)
    },
    select (val) {
      this.selected = val
      this.$emit('selected', val)
    }
  }
}
</script>
