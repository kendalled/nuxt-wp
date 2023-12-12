<template>
  <div>
    <Head>
      <Title>Lapel Pins & Coins: Custom Pins in Minutes.</Title>
      <Meta
        name="description"
        content="An industry leader in custom made pins since 1999. Take a look at our recent orders and place a quote to get a complimentary digital render."
      />
    </Head>
    <div class="relative md:pt-8 lg:pt-10">
      <NewHero />
      <!-- Logo Cloud -->
      <LogoCloud />
      <ThreeFeat />
      <VideoSpot />
      <TailFeat2 />
      <SocialProof />
      <ThreeSteps />
      <SimpleTest />
      <Faq2 />
      <TailCta />
      <TailFoot />
    </div>
  </div>
</template>

<script>
import FullNav from '~/components/FullNav'
import VideoSpot from '~/components/VideoSpot'
import NewHero from '~/components/NewHero'
import LogoCloud from '~/components/LogoCloud'
import ThreeSteps from '~/components/ThreeSteps'
import ThreeFeat from '~/components/ThreeFeat'
import TailFeat2 from '~/components/TailFeat2'
import SimpleTest from '~/components/SimpleTest'
import TailCta from '~/components/TailCta'
import SocialProof from '~/components/SocialProof'
import Faq2 from '~/components/Faq2'
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    VideoSpot,
    NewHero,
    LogoCloud,
    ThreeFeat,
    ThreeSteps,
    TailFeat2,
    SimpleTest,
    TailCta,
    SocialProof,
    Faq2,
    TailFoot
  },
  head () {
    return {
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://lapelpinsandcoins.com' }
      ]
    }
  }
}
</script>
