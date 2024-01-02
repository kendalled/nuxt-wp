<template>
    <div>
          <div class="scroll-parent bg-white border-b-2 border-gray-100 will-change-transform overflow-y-hidden">
            <div class="scroll-element bg-white primary">
              <NuxtImg
                v-for="coin in coinsArray"
                loading="lazy"
                class="mx-4 md:mx-0"
                format="webp"
                :src="coin.src"
                :alt="coin.alt"
              />
            </div>
            <div class="scroll-element bg-white secondary">
              <NuxtImg
                v-for="coin in coinsArray"
                loading="lazy"
                class="mx-4 md:mx-0"
                format="webp"
                :src="coin.src"
                :alt="coin.alt"
              />
            </div>
          </div>
        </div>
    
    </template>
    
    <script>
        export default {
            name: 'ScrollingPins',
            data () {
              return {
                coinsArray: [
                  {
                    src: 'noColorCoin.png',
                    alt: 'Challenge coin with no color'
                  },
                  {
                    src: 'military-coin.png',
                    alt: 'Marine challenge coin'
                  },
                  {
                    src: 'goldCoin.png',
                    alt: 'Polished gold challenge coin'
                  },
                  {
                    src: 'sampleCoin.png',
                    alt: 'Polished silver challenge coin'
                  },
                  {
                    src: 'homeShapes.png',
                    alt: '3D colored challenge coin'
                  },
                  {
                    src: 'airforceCoin.png',
                    alt: 'Multicolor air force challenge coin'
                  },
                  {
                    src: 'colorCoin.png',
                    alt: 'Colored challenge coin'
                  }
                ]
              }
            }
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
      width: 100% !important;
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
    
    