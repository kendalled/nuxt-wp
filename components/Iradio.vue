<template>
  <div class="mx-auto iradio">
    <section class="grid grid-cols-2 my-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div v-for="(choice, i) in choiceFinal" :key="choice.name + i.toString()" class="w-4/5 mx-auto scopewrapper">
        <span v-if="small" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">
          {{ prices[i] }}
        </span>
        <label :for="choice.name + i.toString()" class="text-sm text-center text-gray-600 cursor-pointer focus:ring-teal group">
          <input
            :id="choice.name + i.toString()"
            :value="choice.sid || choice.name"
            :name="'test' + title"
            :checked="quote[option].selected === (choice.sid || choice.name)"
            type="radio"
            class="opacity-0"
            :aria-labelledby="getChoiceAria(choice.name)"
            @click="emitChoice(title, choice.sid || choice.name)"
          >
          <iradio-img :choice="choice" :small="small" />
          <span :id="getChoiceAria(choice.name)" class="flex justify-center w-full h-6 leading-snug transition-colors duration-150 ease-in-out group-hover:text-blue-500">{{ choice.name }}
            <QuestionIcon v-if="title === 'Production'" :desc="descs[i]" />
          </span>
        </label>
      </div>
    </section>
  </div>
</template>

<script>
import QuestionIcon from '~/components/QuestionIcon'
import IradioImg from '~/components/IradioImg'
export default {
  name: 'Iradio',
  components: {
    QuestionIcon,
    IradioImg
  },
  props: {
    pageNum: {
      type: Number,
      default: 0
    },
    small: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Plating'
    },
    option: {
      type: Number,
      default: 0
    },
    view: {
      type: Boolean,
      default: true
    },
    choices: {
      type: Array,
      default () {
        return [
          {
            uid: 0,
            title: 'Antiqued Gold',
            src: '/quote/AGold.png',
            pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
            cons: ['If your logo or design requires color, this is not the option.']
          },
          {
            uid: 1,
            title: 'Polished Gold',
            src: '/quote/HPGold.png',
            pros: ['Great for intricate designs.', 'Polished.'],
            cons: ['If your logo or design requires color, this is not the option.']
          },
          {
            uid: 2,
            title: 'Antiqued Silver',
            src: '/quote/ASilver.png',
            pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
            cons: ['If your logo or design requires color, this is not the option.']
          },
          {
            uid: 3,
            title: 'Polished Silver',
            src: '/quote/HPSilver.png',
            pros: ['Great for intricate designs.', 'Polished.'],
            cons: ['If your logo or design requires color, this is not the option.']
          },
          {
            uid: 4,
            title: 'Antiqued Copper',
            src: '/quote/ACopper.png',
            pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
            cons: ['If your logo or design requires color, this is not the option.']
          },
          {
            uid: 5,
            title: 'Polished Copper',
            src: '/quote/HPCopper.png',
            pros: ['Great for intricate designs.', 'Polished.'],
            cons: ['If your logo or design requires color, this is not the option.']
          },
          {
            uid: 6,
            title: 'Dual Plated',
            src: '/quote/DualPlated.png',
            pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
            cons: ['If your logo or design requires color, this is not the option.']
          },
          {
            uid: 7,
            title: 'Color Coated',
            src: '/quote/ColorCoated.png',
            pros: ['Great for intricate designs.', 'Polished.'],
            cons: ['If your logo or design requires color, this is not the option.']
          }
        ]
      }
    },
    currentPage: {
      type: Number,
      default: 0
    },
    quote: {
      type: Array,
      default () {
        return [{ title: 'Production', selected: null }, { title: 'Plating', selected: null }, { title: 'Sizing', selected: null }, { title: 'Backing', selected: null }, { title: 'Packaging', selected: null }]
      }
    }
  },
  data () {
    return {
      prices: [
        'Free',
        '$1.00',
        '$0.60',
        '$4.00'
      ],
      descs: [
        'Known for their antiqued and classy look, die struck pins are excellent for being professional and cost efficient. However, they do not allow for color.',
        'Famous for their modern look, soft enamel pins are great for stylish designs and vivid colors. You can feel the design\'s texture in the recessed areas.',
        'Known for their professional and timeless look, hard enamel pins are perfect for logos or emblems. The design is smooth to the touch, with no raised area.',
        'Silk screen pins are perfect for detailed designs and quick production time. However, they do not allow for blended colors as they are painted in batches.',
        'Offset printed pins are ideal for any photographs or the most detailed designs. The design is placed under a clear epoxy dome, protecting the artwork.'
      ]
    }
  },
  computed: {
    choiceFinal () {
      return (this.view ? this.choices : this.choices.slice(0, 5))
    },
    isEmpty () {
      return this.quote[this.option].selected === null
    }
  },
  // lazyLoadImage () {
  //   if (process.client) {
  //     const media = document.querySelectorAll('[data-manual-lazy]');
  //     [...media].forEach(m => this.$lazyLoad(m))
  //     this.isLoad = true
  //   }
  // },
  methods: {
    getChoiceAria (choice) {
      const words = choice.split(' ')
      return (words[0] + '-' + words[1] + 'desc')
    },
    getTabIndex (title, ind) {
      console.log(title)
      if (this.quote[this.option].selected) {
        return (this.quote[this.option].selected === title ? 0 : -1)
      } else {
        return (ind === 0 || ind === 4 ? 0 : -1)
      }
    },
    isChecked (val) {
      return (this.quote[this.option].selected === val)
    },
    emitChoice (title, choice) {
      this.quote[this.option].selected = choice
      this.$emit('choice', title, choice)
    },
    printTitle (title, choice) {
      console.log('title: ' + title)
      console.log('choice: ' + choice)
      console.log('choice.name: ' + choice.name)
    }
  }
}
</script>

<style scoped>
/* todo: change to tailwind blue */
input[type="radio"]:checked + div + span {
  color: #1a56db;
}
label {
  margin: 0 1rem;
  text-align: center;
}
[type=radio]:checked + div {
  border-color: #2b6cb0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
