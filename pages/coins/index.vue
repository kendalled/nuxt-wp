<template>
  <div class="w-auto h-auto bg-gray-50">
    <InteriorHeader :headline="headline" :subheading="subheading" :choices="choices" />
    <!-- <FinalQuote /> -->
    <ScrollingCoins />
    <TwoColumnImage :grabber="twoColGrabber" :headline="'Custom challenge coins made simple.'" :img="bigImg2">
      <p>It can be overwhelming to design your own custom coin, so that’s why we're here to help you every step of the way.</p>
      <p>Challenge coins are a time-honored tradition in the military and police forces. They date back to World War I and are a meaningful symbol for members of certain units or groups. A custom challenge coin can be the perfect way to honor the heroes that have fought for our safety and freedom. With the right design, you can make a beautiful commemorative gift to thank these men and women for their sacrifice and service.</p>
      <p>Custom coins can be used to:</p>
      <ul>
        <li>Honor someone's service</li>
        <li>Fundraise for your organization</li>
        <li>Bring your fans together around a sports team</li>
        <li>Give a thoughtful gift to a friend</li>
        <li>Recognizing an accomplishment</li>
        <li><span>&hellip;</span> and so much more!</li>
      </ul>
      <h2>Why choose our coins?</h2>
      <p>Challenge coins are the perfect gift to commemorate or honor someone. Our quality challenge coins are produced with industry-leading techniques. Veterans and collectors alike love our products for their authenticity. We use 100% stainless steel molds, and individually mint each coin. Decades of experience in both lapel pins and challenge coins allows us to ship your order securely.</p>
    </TwoColumnImage>
    <section>
      <div class="mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
        <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 leading-9 sm:text-4xl sm:leading-10 lg:leading-none">
              <span class="sm:hidden">Get started today.</span>
              <span class="hidden sm:block">Get started with a free quote.</span>
            </h2>
            <p class="mt-4 text-xl text-gray-500 leading-7">
              Simply describe your design and select some basic options. We'll handle the rest.
            </p>
          </div>
        </div>
      </div>
      <div class="mx-auto mb-8 max-w-7xl sm:px-6 lg:px-8 sm:mb-10">
        <FinalQuote :option="1" :margin="1" :bg="1" @scroll="goQuote" />
      </div>
    </section>
    <InteriorContentImage
      :img="img1"
      :p1="p1"
      :headline="'Proudly minting coins for our heroes.'"
    />
    <PinBenefits :price="'2.03'" :subheading="'Our goal is simple: deliver great challenge coins without breaking the bank. View our pricing chart or contact us for more information. We can work to meet any budget.'" :subject="'challenge coins'" :headline="'Custom coins made simple.'" />
    <LargeTest :img="'/goldCoin.png'" />
    <TailPricing :product-num="1" />
    <TailSteps class="-mt-14" :subject="'coins'" :headline="priceHeading" :subheading="priceSub" :price="price" />
    <Faq2 />
    <TailCta />
    <TailFoot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
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

const router = useRouter()
const store = useStore()

const bigImg = ref('https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.5&fp-y=.35&w=1184&h=1376&q=80')
const bigImg2 = ref('https://images.unsplash.com/photo-1552057426-c4a71681057d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=focalpoint&fp-x=0.3&fp-y=.35&w=1184&h=1376&q=80')
const twoColGrabber = ref('Our challenge coins are struck from the highest quality metal to ensure a beautiful, classy, and durable product.')
const headline = ref('Custom challenge coins designed for you in minutes.')
const subheading = ref('With over 20 years of experience, we make custom challenge coins more accessible than ever. Our ordering process includes free artwork, professional designs, and unlimited revisions. Get started today.')
const choices = ref([
  {
    desk: 'Browse our various plating options',
    mobile: 'Browse our plating options'
  },
  {
    desk: 'See our industry-leading pricing',
    mobile: 'See our unmatched pricing'
  },
  {
    desk: 'View our streamlined ordering process',
    mobile: 'View our ordering process'
  }
])
const p1 = ref('Challenge coins not only commemorate an important and honorable service, but they also help people feel more connected to a community. Sharing challenge coins and their symbolism can help people bond over a shared experience. The challenge coin provides a keepsake for brave individuals to reminisce on the important events they were a part of: joining a unit, completing parts of training, or any other special occasion. We mint custom challenge coins for veterans, law enforcement, and more. Design your own custom coin in minutes with a complimentary quote and digital proof. Our support team is available to assist you with any questions.')
const img1 = ref('/homeCoins.png')
const priceHeading = ref('Custom Challenge Coins')
const priceSub = ref('Our goal is simple: deliver great challenge coins without breaking the bank. View our pricing chart or contact us for more information. We can work to meet any budget.')
const price = ref('3.05')
const para1 = ref('The challenge coin provides a keepsake for brave individuals to reminisce on the important events they were a part of: joining a unit, completing parts of training, or any other special occasion. The challenge coin is rooted in Military tradition. From the Air Force to the Coast Guard, we pride ourselves on authenticity. We mint custom challenge coins for veterans, law enforcement, and more.')
const para2 = ref('Our quality challenge coins are produced with industry-leading techinques. Veterans and collectors alike love our products for their authenticity. We use 100% stainless steel molds, and individually mint each coin. Decades of experience in both lapel pins and challenge coins allows us to ship your order securely.')

const goQuote = () => {
  router.push('/quote')
}

onMounted(() => {
  store.commit('prefs/setPrefs', 'Challenge Coins')
})

// SEO Meta tags
useSeoMeta({
  title: 'Custom Challenge Coins | Military & Police Coins | Free Design & Quote',
  description: 'Professional custom challenge coins for military, police, fire departments & organizations. 20+ years experience. Antique & polished finishes. Same-day quotes, free artwork, unlimited revisions.',
  keywords: 'custom challenge coins, military challenge coins, police challenge coins, fire department coins, commemorative coins, challenge coin maker',
  ogTitle: 'Custom Challenge Coins | Military & Police Coins | Free Design & Quote',
  ogDescription: 'Professional custom challenge coins for military, police, fire departments & organizations. 20+ years experience. Antique & polished finishes. Same-day quotes, free artwork.',
  ogImage: 'https://lapelpinsandcoins.com/homeCoins.png',
  ogUrl: 'https://lapelpinsandcoins.com/coins',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Custom Challenge Coins | Military & Police Coins | Free Design & Quote',
  twitterDescription: 'Professional custom challenge coins for military, police, fire departments & organizations. 20+ years experience. Antique & polished finishes. Same-day quotes, free artwork.',
  twitterImage: 'https://lapelpinsandcoins.com/homeCoins.png'
})

// Product and Breadcrumb structured data
useHead({
  link: [
    { rel: 'canonical', href: 'https://lapelpinsandcoins.com/coins' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Custom Challenge Coins',
        image: [
          'https://lapelpinsandcoins.com/homeCoins.png',
          'https://lapelpinsandcoins.com/military-coin.png',
          'https://lapelpinsandcoins.com/goldCoin.png'
        ],
        description: 'Professional custom challenge coins for military, police, fire departments & organizations. Antique & polished finishes available. Starting at 50 pcs with same-day quotes.',
        category: 'Custom Challenge Coins',
        brand: {
          '@type': 'Brand',
          name: 'Lapel Pins & Coins'
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'Lapel Pins & Coins',
          url: 'https://lapelpinsandcoins.com'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '67',
          bestRating: '5.0'
        },
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '3.05',
          highPrice: '12.50',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: {
            '@type': 'Organization',
            name: 'Lapel Pins & Coins',
            telephone: '+1-844-395-4464',
            url: 'https://lapelpinsandcoins.com'
          }
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://lapelpinsandcoins.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Custom Challenge Coins',
            item: 'https://lapelpinsandcoins.com/coins'
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.max-w-8xl {
  max-width: 90rem;
}
.underline-blue {
  background-image: linear-gradient(180deg,transparent 70%,rgba(28, 100, 242,.2) 0);
}
</style>
