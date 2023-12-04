<template>
  <!-- todo: fix ugly classes -->
  <svg
    id="a259f86b-03f4-47ac-adca-e0b316d45eda"
    ref="roota"
    class="relative mx-auto md:mr-8 lg:mr-12 lg:-ml-3"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    viewBox="0 0 653 465.6"
    xml:space="preserve"
  >
    <path style="fill:#3f3d56" d="M619.2 107.4c1.6 0 2.8-1.3 2.8-2.8V74.5c0-1.5-1.2-2.8-2.8-2.8-.3 0-.7.1-1 .2v-34c0-5.2-4.2-9.4-9.4-9.4H301.3c-5.2 0-9.4 4.2-9.4 9.4v412.9c0 5.2 4.2 9.4 9.4 9.4h307.5c5.2 0 9.4-4.2 9.4-9.4V149.6c1.4.5 3.1-.2 3.6-1.7.1-.3.2-.7.2-1v-30.1c0-1.5-1.2-2.8-2.8-2.8-.3 0-.7.1-1 .2v-6.9c.4.1.7.1 1 .1z" />
    <path style="fill:#fff" d="M590.1 46.8c5.2 0 9.4 4.2 9.4 9.4v376.2c0 5.2-4.2 9.4-9.4 9.4H320.2c-5.2 0-9.4-4.2-9.4-9.4V56.2c0-5.2 4.2-9.4 9.4-9.4h269.9" />
    <circle style="fill:#fff" cx="491.1" cy="37.8" r="3.8" />
    <path :class="[animating ? 'fadeIn t2' : '']" style="fill:#f9a826" d="M335.6 96.1h231.2v23H335.6z" />
    <path :class="[animating ? 'fadeIn t3' : '']" style="fill:#e6e6e6" d="M335.6 150.2h231.2v8.7H335.6zM335.6 176.8h231.2v8.7H335.6zM335.6 203.7H455v8.7H335.6zM335.6 231h231.2v8.7H335.6zM335.6 258.4h231.2v8.7H335.6zM335.6 285.8H451v8.7H335.6zM335.6 313.2h231.2v8.7H335.6zM335.6 340.5h231.2v8.7H335.6z" />
    <path :class="[animating ? 'fadeIn t4' : '']" style="fill:#f9a826;" d="M494.1 374.1h73v24h-73z" />
    <path style="fill:#3f3d56" d="M209.3 180.3h-1.6v-54.8c0-17.6-14.3-31.8-31.8-31.8H59.2c-17.6 0-31.8 14.3-31.8 31.8v302c0 17.6 14.3 31.8 31.8 31.8h116.7c17.6 0 31.8-14.3 31.8-31.8V219.3h1.6v-39z" />
    <path style="fill:#fff" d="M200.5 123.4v303.4c0 13.1-10.6 23.8-23.8 23.8H59.9c-13.1 0-23.8-10.6-23.8-23.8V123.4c0-11.8 9.6-21.4 21.4-21.4H74c-1.3 3.2-1.1 6.7.5 9.7 1.9 3.3 5.4 5.5 9.3 5.6h68c3.9-.2 7.3-2.3 9.3-5.6 1.6-3 1.8-6.6.5-9.7h17.5c11.8-.1 21.4 9.5 21.4 21.4z" />
    <path :class="[animating ? 'fadeIn t6' : '']" style="fill:#f9a826" d="M54 187.9h128.2v12.7H54z" />
    <path :class="[animating ? 'fadeIn t7' : '']" style="fill:#e6e6e6" d="M54 217.9h128.2v4.8H54zM54 232.7h128.2v4.8H54zM54 247.6h66.2v4.8H54zM54 262.8h128.2v4.8H54zM54 277.9h128.2v4.8H54zM54 293.1h64v4.8H54zM54 308.3h128.2v4.8H54zM54 323.5h128.2v4.8H54z" />
    <path :class="[animating ? 'fadeIn t8' : '']" style="fill:#f9a826" d="M141.8 342.1h40.5v13.3h-40.5z" />
  </svg>
</template>

<style scoped>
.fadeIn {
  opacity: 0;
  animation: fadein .5s;
  animation-fill-mode: both;
}
.slideIn {
  animation-fill-mode: both;
  backface-visibility: hidden;
  transition: 1s all ease-in;
  animation: slide .5s;
}
.slideIn2 {
  backface-visibility: hidden;
  transition: 1s all ease-in-out;
  animation: slidemini .5s;
}
@keyframes slide {
  from {
    opacity: 0;
    transform: translate3d(-35px, 0px, 0px);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
}
@keyframes slidemini {
  from {
    transform: translate3d(0px, 0px, 0px);
  }
  to {
    transform: translate3d(5px, 0px, 0px);
  }
}
/* @keyframes gray {
  from {
    filter: grayscale(100%);
  }
  to {
    filter: grayscale(0%);
  }
} */
@keyframes fadein {
  from {opacity: 0;}
  to {opacity: 1;}
}
.t0 {
  animation-delay: 0s;
}
.t1 {
  animation-delay: 0.2s;
}
.t2 {
  animation-delay: 0.4s;
}
.t3 {
  animation-delay: 0.6s;
}
.t4 {
  animation-delay: 0.8s;
}
.t5 {
  animation-delay: 1s;
}
.t6 {
  animation-delay: 1.2s;
}
.t7 {
  animation-delay: 1.4s;
}
.t8 {
  animation-delay: 1.6s;
}
</style>

<script>
export default {
  name: 'MobileSvg',
  data () {
    return {
      animating: false
    }
  },
  mounted () {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.animating = true
        // console.log('animate mobile')
      } else {
        this.animating = false
        // console.log('not animate mobile')
      }
    })
    this.observer.observe(this.$refs.roota)
  }
  // destroyed () {
  //   // .unobserve() if just one element
  //   this.observer.disconnect()
  // }
}
</script>
