<template>
    <div class="hidden md:block">
          <div class="scroll-parent border-b-2 border-gray-100 will-change-transform">
            <div class="scroll-element bg-white primary">
              <!-- <NuxtImg
                src="spinners.png"
                alt="damilola jerugba"
              /> -->
              <NuxtImg
                format="webp"
                src="noColorCoin.png"
                alt="Challenge coin with no color"
              />
              <NuxtImg
                format="webp"
                src="goldCoin.png"
                alt="Polished gold challenge coin"
              />
              <NuxtImg
                format="webp"
                src="sampleCoin.png"
                alt="Polished silver challenge coin"
              />
              <NuxtImg
                format="webp"
                src="homeShapes.png"
                alt="3D colored challenge coin"
              />
              <NuxtImg
                format="webp"
                src="airforceCoin.png"
                alt="Multicolor air force challenge coin"
              />
              <NuxtImg
                format="webp"
                src="colorCoin.png"
                alt="Colored challenge coin"
                />
            </div>
            <div class="scroll-element bg-white secondary">
              <!-- <NuxtImg
                src="spinners.png"
                alt="damilola jerugba"
              /> -->
              <NuxtImg
                format="webp"
                src="noColorCoin.png"
                alt="Challenge coin with no color"
              />
              <NuxtImg
                format="webp"
                src="goldCoin.png"
                alt="Polished gold challenge coin"
              />
              <NuxtImg
                format="webp"
                src="sampleCoin.png"
                alt="Polished silver challenge coin"
              />
              <NuxtImg
                format="webp"
                src="homeShapes.png"
                alt="3D colored challenge coin"
              />
              <NuxtImg
                format="webp"
                src="airforceCoin.png"
                alt="Multicolor air force challenge coin"
              />
              <NuxtImg
                format="webp"
                src="colorCoin.png"
                alt="Colored challenge coin"
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
    