<template>
  <div class="w-auto h-auto bg-gray-50">
    <InteriorHeader :headline="headline" :subheading="subheading" :choices="choices" />
    <!-- <FinalQuote /> -->
    <ScrollingCoins />
    <TwoColumnImage :grabber="twoColGrabber" :headline="'Crafted with pride and tradition.'" :img="bigImg2">
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
      bigImg: 'https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.5&fp-y=.35&w=1184&h=1376&q=80',
      bigImg2: 'https://images.unsplash.com/photo-1552057426-c4a71681057d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=focalpoint&fp-x=0.3&fp-y=.35&w=1184&h=1376&q=80',
      twoColGrabber: 'Our challenge coins are struck from the highest quality metal to ensure a beautiful, classy, and durable product.',
      headline: 'Professional, custom-designed challenge coins in minutes.',
      subheading: 'With over 20 years of experience, we make custom challenge coins more accessible than ever. Our ordering process includes free artwork, professional designs, and unlimited revisions. Get started today.',
      choices: [
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
      ],
      p1: 'Challenge coins not only commemorate an important and honorable service, but they also help people feel more connected to a community. Sharing challenge coins and their symbolism can help people bond over a shared experience. The challenge coin provides a keepsake for brave individuals to reminisce on the important events they were a part of: joining a unit, completing parts of training, or any other special occasion. We mint custom challenge coins for veterans, law enforcement, and more. Design your own custom coin in minutes with a complimentary quote and digital proof. Our support team is available to assist you with any questions.',
      img1: '/homeCoins.png',
      priceHeading: 'Custom Challenge Coins',
      priceSub: 'Our goal is simple: deliver great challenge coins without breaking the bank. View our pricing chart or contact us for more information. We can work to meet any budget.',
      price: '3.05',
      para1: 'The challenge coin provides a keepsake for brave individuals to reminisce on the important events they were a part of: joining a unit, completing parts of training, or any other special occasion. The challenge coin is rooted in Military tradition. From the Air Force to the Coast Guard, we pride ourselves on authenticity. We mint custom challenge coins for veterans, law enforcement, and more.',
      para2: 'Our quality challenge coins are produced with industry-leading techinques. Veterans and collectors alike love our products for their authenticity. We use 100% stainless steel molds, and individually mint each coin. Decades of experience in both lapel pins and challenge coins allows us to ship your order securely.'
    }
  },
  head () {
    return {
      title: 'Custom Challenge Coins | Free Shipping | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'Custom designed Challenge Coins made simple. Decades of experience in production. Take a look at our designs & get your free quote today!' }
      ],
      link: [
        { rel: 'canonical', href: 'https://lapelpinsandcoins.com/coins' }
      ]
    }
  },
  mounted () {
    this.$store.commit('prefs/setPrefs', 'Challenge Coins')
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
