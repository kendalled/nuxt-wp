<template>
<div>
      <div class="scroll-parent bg-white border-b-2 border-gray-100 will-change-transform">
        <div class="scroll-element bg-white primary">
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="pins.png"
            alt="Soft enamel custom pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="MoviePin.png"
            alt="Star wars themed pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="rnPin.jpg"
            alt="Nursing lapel pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="sampleCoin.png"
            alt="Polished silver lapel pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="homeShapes.png"
            alt="3D multicolor lapel pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="attendance.jpg"
            alt="Gold and red school lapel pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="GlitterPin.png"
            alt="Glitter custom lapel pin"
            />
        </div>
        <div class="scroll-element bg-white secondary">
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="pins.png"
            alt="Soft enamel custom pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="MoviePin.png"
            alt="Star wars themed pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="rnPin.jpg"
            alt="Nursing lapel pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="sampleCoin.png"
            alt="Polished silver lapel pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="homeShapes.png"
            alt="3D multicolor lapel pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="attendance.jpg"
            alt="Gold and red school lapel pin"
          />
          <NuxtImg
            class="mx-4 md:mx-0"
            format="webp"
            src="GlitterPin.png"
            alt="Glitter custom lapel pin"
            />
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: 'ScrollingPins'
    }
</script>

<style>
@media only screen and (max-width: 767px) {
  .primary {
    animation: primary 40s linear infinite;
  }
    
  .secondary {
    animation: secondary 40s linear infinite;
  }
  .scroll-parent {
    height: auto;
    padding: 1rem 0;
    overflow-x: scroll;
    white-space: nowrap;
  }

  .scroll-element {
    display: inline-block;
    position: relative;
  }

  .scroll-element img {
    width: 100%;
    max-width: 8.5rem;
    height: auto;
  }
  .secondary {
    display: none !important;
  }
}
.scroll-parent {
  position: relative;
  width: 100vw;
  height: 13rem;
  padding: 2rem 0;
  overflow-x: hidden;
}

.scroll-element {
  width: inherit;
  height: inherit;
  position: absolute;
  left: 0%;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.scroll-element img {
  width: 8.5rem;
}

.primary {
  animation: primary 45s linear infinite;
}

.secondary {
  animation: secondary 45s linear infinite;
}

@keyframes primary {
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
}

@keyframes secondary {
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
}
</style>
