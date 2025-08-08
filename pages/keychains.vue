<template>
    <div class="w-auto h-auto bg-gray-50">
      <InteriorHeader :headline="headline" :subheading="subheading" :choices="choices" />
      <!-- <FinalQuote /> -->
      <TwoColumnImage :grabber="twoColGrabber" :headline="'Take your design anywhere with a keychain.'" :img="bigImg">
        <p>Our keychains are struck from the highest quality metal to ensure a beautiful, classy, and durable product. There are several different kinds of printing processes and it can be overwhelming to research them all to know what best fits your design. We work with you every step of the way to ensure you’ll love the final product.</p>
        <p>Custom keychains are great for:</p>
        <ul>
          <li>Honor someone's service</li>
          <li>Fundraise for your organization</li>
          <li>Bring your fans together around a sports team</li>
          <li>Give a thoughtful gift to a friend</li>
          <li>Recognizing an accomplishment</li>
          <li><span>&hellip;</span> and so much more!</li>
        </ul>
        <h2>Why should I get a keychain?</h2>
        <p>If you’re looking for a portable and fun promotional item, keychains are perfect for you! With a design that effectively shows off your brand, these small keepsakes are the perfect way to give your brand visibility. It’s simple to create a design that stands out and catches people’s attention. Keychains can expand your reach. Most people carry their keys with them wherever they go, so no matter where they are someone is bound to be exposed to your branding and message.</p>
      </TwoColumnImage>
      <section>
        <div class="mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-3xl font-bold leading-9 text-gray-900 sm:text-4xl sm:leading-10 lg:leading-none">
                <span class="sm:hidden">Get started today.</span>
                <span class="hidden sm:block">Get started with a free quote.</span>
              </h2>
              <p class="mt-4 text-xl leading-7 text-gray-500">
                Simply describe your design and select some basic options. We'll handle the rest.
              </p>
            </div>
          </div>
        </div>
        <div class="mx-auto mb-8 max-w-7xl sm:px-6 lg:px-8 sm:mb-10">
          <FinalQuote :option="2" :margin="1" :bg="1" @scroll="goQuote" />
        </div>
      </section>
      <InteriorContentImage :img="img1" :p1="p1" :p2="p2" :headline="'Authentic, High Quality Keychains.'" />
      <PinBenefits :price="'2.03'" :subheading="'Our goal is simple: deliver great keychains without breaking the bank. View our pricing chart or contact us for more information. We can work to meet any budget.'" :subject="'keychains'" :headline="'Custom keychains made simple.'" />
      <LargeTest :img="'/FDkeychains.png'" />
      <TailPricing :product-num="2" />
      <TailSteps class="-mt-14" :subject="'keychains'" :headline="priceHeading" :subheading="priceSub" :price="price" />
      <Faq2 />
      <TailCta />
      <TailFoot />
    </div>
  </template>
  
  <script>
  import InteriorHeader from '~/components/InteriorHeader'
  import InteriorContentImage from '~/components/InteriorContentImage'
  import FinalQuote from '~/components/FinalQuote'
  import TwoColumnImage from '~/components/TwoColumnImage'
  import PinBenefits from '~/components/PinBenefits'
  import TailSteps from '~/components/TailSteps'
  import TailFoot from '~/components/TailFoot'
  import TailPricing from '~/components/TailPricing'
  import LargeTest from '~/components/LargeTest'
  import Faq2 from '~/components/Faq2'
  import TailCta from '~/components/TailCta'
  export default {
    components: {
      TwoColumnImage,
      Faq2,
      InteriorHeader,
      InteriorContentImage,
      FinalQuote,
      PinBenefits,
      TailSteps,
      LargeTest,
      TailCta,
      TailPricing,
      TailFoot
    },
    data () {
      return {
        bigImg: 'https://images.unsplash.com/photo-1547866751-446296f133ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=focalpoint&fp-x=.765&fp-y=.55&w=1184&h=1376&q=80',
        twoColGrabber: 'Keychains are the perfect keepsake for any purpose.',
        headline: 'Professional, custom-designed keychains made simple.',
        subheading: 'With over 20 years of experience, we make custom keychains more accessible than ever. Our ordering process includes free artwork, professional designs, and unlimited revisions. Get started today.',
        choices: [
          {
            desk: 'Browse our various keychain styles',
            mobile: 'Browse our keychain styles'
          },
          {
            desk: 'See our industry-leading pricing',
            mobile: 'See our unmatched pricing'
          },
          {
            desk: 'View our streamlined ordering process',
            mobile: 'View our ordering process'
          }
        ],
        p1: 'Most custom keychain designs can be made into soft enamel keychains, but this process often works best with designs that have minimal lines and clearly defined areas of color. These things are important because the colored areas sit slightly recessed below the metal separations. If you’re not sure which type of keychain to choose, don’t worry! We will work with you to make sure you choose the process that best fits your design. No matter what your goal is, our artists are here to work with you to make a design that gets your message across perfectly. Start today with a free quote!',
        p2: 'Keychains make the perfect small and practical souvenir. From trip mementos to popular characters, anything can be made into a stylish keychain. No matter what your goal is, our artists are here to work with you to make a design that gets your message across perfectly. Start today with a free quote!',
        img1: '/homeChains.png',
        priceHeading: 'Custom Keychains',
        priceSub: 'Our goal is simple: deliver great keychains without breaking the bank. View our pricing chart or contact us for more information. We can work to meet any budget.',
        price: '2.75',
        para1: 'Keychains are the perfect way to showcase your logo, design, or emblem. Our ordering process includes digital art, unlimited revisions, & plenty of customization options.',
        para2: 'Our quality keychains are produced with industry-leading techinques. Veterans and collectors alike love our products for their authenticity. We use 100% stainless steel molds, and individually mint each side. Decades of experience in both lapel pins and challenge coins allows us to ship your order with both quality & speed.'
      }
    },
    head () {
      return {
        title: 'Custom Keychains | Personalized Enamel Keychains | Free Quote & Design',
        meta: [
          { hid: 'description', name: 'description', content: 'Professional custom keychains with same-day quotes. 20+ years experience crafting personalized keychains. Free artwork, unlimited revisions. Perfect for promotions and gifts.' },
          { name: 'keywords', content: 'custom keychains, personalized keychains, enamel keychains, promotional keychains, custom keychain maker' },
          { property: 'og:title', content: 'Custom Keychains | Personalized Enamel Keychains | Free Quote & Design' },
          { property: 'og:description', content: 'Professional custom keychains with same-day quotes. 20+ years experience crafting personalized keychains. Free artwork, unlimited revisions.' },
          { property: 'og:image', content: 'https://lapelpinsandcoins.com/homeChains.png' },
          { property: 'og:url', content: 'https://lapelpinsandcoins.com/keychains' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Custom Keychains | Personalized Enamel Keychains | Free Quote & Design' },
          { name: 'twitter:description', content: 'Professional custom keychains with same-day quotes. 20+ years experience crafting personalized keychains. Free artwork, unlimited revisions.' },
          { name: 'twitter:image', content: 'https://lapelpinsandcoins.com/homeChains.png' }
        ],
        link: [
          { rel: 'canonical', href: 'https://lapelpinsandcoins.com/keychains' }
        ]
      }
    },
    mounted () {
      this.$store.commit('prefs/setPrefs', 'Keychains')
    },
    methods: {
      goQuote () {
        if (process.browser) {
          this.$router.push('/quote')
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .max-w-8xl {
    max-width: 90rem;
  }
  .underline-blue {
    background-image: linear-gradient(180deg,transparent 70%,rgba(28, 100, 242,.2) 0);
  }
  </style>
  