<template>
    <div>
        <Head>
          <Title>Premium Custom Lapel Pins | Lapel Pins & Coins | Est. 1999 | Same-Day Service</Title>
          <Meta name="description" content="Elevate your style with exquisite custom lapel pins from Lapel Pins & Coins, a trusted industry leader since 1999. Experience unparalleled craftsmanship and same-day service. Create personalized lapel pins that leave a lasting impression. Order now!" />
        </Head>
        <div class="w-auto h-auto bg-gray-50">
        <InteriorHeader :new-layout="true" :headline="headline" :subheading="subheading" :choices="choices" />
        <!-- <SimpleHeader /> -->
        <!-- <SplitBrandPanel /> -->
        <ScrollingPins/>
        <NewColumnImage>
            <p>Our pins are struck from the highest quality metal to ensure a beautiful, classy, and durable product.</p>
            <p>There are several different kinds of printing processes and it can be overwhelming to do the research and know what best fits your design. That’s why we work with you every step of the way to ensure you’ll love the final product.</p>
            <p>Enamel pins can be used for:</p>
            <ul>
              <li>Promotional campaigns</li>
              <li>Fundraising for your organization</li>
              <li>Bringing fans together around a sports team</li>
              <li>Gifts for friends &amp; family</li>
              <li>Recognizing an employee</li>
              <li><span>&hellip;</span> and so much more!</li>
            </ul>
            <h2>What production method should I choose?</h2>
            <p>Most custom pin designs can be made into soft enamel pins, but this process often works best with designs that have minimal lines and clearly defined areas of color. These details are important because the colored areas sit slightly recessed, below the metal separations. If you’re not sure which type of pin to choose, don’t worry! Just ask, and we can provide suggestions from our experienced team.</p>
          </NewColumnImage>
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
            <FinalQuote :option="0" :margin="1" :bg="1" @scroll="goQuote" />
            </div>
        </section>
        <InteriorContentImage :headline="'Design a custom pin in minutes.'" :p1="p1" :p2="p2" :img="img1" />
        <PinBenefits />
        <LargeTest />
        <TailPricing />
        <TailSteps class="-mt-14" :subject="'pins'" />
        <Faq2 />
        <TailCta />
        <TailFoot />
        </div>
    </div>
  </template>
  
  <style scoped>
  .heroPattern {
    background-color: #f9fafb;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%234895ea' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
  .underline-blue {
    background-image: linear-gradient(180deg,transparent 70%,rgba(28, 100, 242,.2) 0);
  }
  .underline-orange {
    background-image: linear-gradient(180deg,transparent 70%,rgba(255,158,24,.4) 0);
  }
  .underline-gray {
    background-image: linear-gradient(180deg,transparent 70%,rgba(75,85,99,.175) 0);
  }
  </style>
  
  <script>
  import LargeTest from '~/components/LargeTest'
  import InteriorHeader from '~/components/InteriorHeader'
  import NewColumnImage from '~/components/NewColumnImage'
  import InteriorContentImage from '~/components/InteriorContentImage'
  import FinalQuote from '~/components/FinalQuote'
  import PinBenefits from '~/components/PinBenefits'
  import TailPricing from '~/components/TailPricing'
  import TailSteps from '~/components/TailSteps'
  import Faq2 from '~/components/Faq2'
  import TailCta from '~/components/TailCta'
  import TailFoot from '~/components/TailFoot'
  export default {
    components: {
    LargeTest,
    InteriorHeader,
    NewColumnImage,
    InteriorContentImage,
    FinalQuote,
    PinBenefits,
    TailPricing,
    TailSteps,
    Faq2,
    TailCta,
    TailFoot
},
    data () {
      return {
        headline: 'High quality, custom lapel pins designed by experts.',
        subheading: 'With over 20 years of experience, we make customized pins more accessible than ever. Our ordering process includes free artwork, professional designs, and unlimited revisions. Get started today.',
        choices: [
          {
            desk: 'Browse our various pin styles',
            mobile: 'Browse our pin styles'
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
        p1: 'Custom pins are small, customizable, and easy to make. You can design them to be as classy as you need them to be, and they make for the perfect subtle fashion statement. Showing pride in your achievements or support for a certain cause or movement is easier than ever with lapel pins. They may be small, but custom pins can be huge for your fundraiser, company, or team. We make pins for a variety of uses. Brand promotion, for one, is essential to a brand\'s success, and there’s no easier way to promote and establish your brand than with a pin. No matter how you plan on using them, our pins are sure to suit your needs.',
        p2: 'We make pins for a variety of uses. Brand promotion, for one, is essential to a brand\'s success, and there’s no easier way to promote and establish your brand than with a custom lapel pin. Award ceremonies can be stepped up a level with classy custom pins to reward those who earned it. No matter how you plan on using them, our pins are sure to suit your needs.',
        img1: '/homePins.png',
        // todo: unify or split into 3 sets for one <FinalQuote />
      }
    },
    head () {
      // const items = this.questions.map((item, index) => ({
      //   '@type': 'Question',
      //   position: index + 1,
      //   name: item.query,
      //   acceptedAnswer: {
      //     '@type': 'Answer',
      //     text: item.answer
      //   }
      // }))
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Custom Lapel Pins',
        image: [
          'https://lapelpinsandcoins.com/homePins.png'
        ],
        description: 'Our customized pins are struck from the highest quality metals and plated in authentic gold or silver. Starting at 50 pcs, our pricing can\'t be beat.',
        sku: 'LA1234',
        mpn: '925872',
        brand: {
          '@type': 'Brand',
          name: 'Lapel Pins & Coins'
        },
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5.0',
            bestRating: '5.0'
          },
          author: {
            '@type': 'Person',
            name: 'Judith Black'
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '14'
        },
        offers: {
          '@type': 'Offer',
          url: 'https://lapelpinsandcoins.com/pins',
          priceCurrency: 'USD',
          price: '2.12',
          priceValidUntil: '2020-11-20',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Lapel Pins & Coins'
          }
        }
      }
      return {
        script: [
          {
            hid: 'productJson',
            type: 'application/ld+json',
            json: structuredData
          }
        ],
        link: [
          { rel: 'canonical', href: 'https://lapelpinsandcoins.com/pins' },
          { rel: 'icon', href: '/favicon.ico' }
        ]
      }
    },
    mounted () {
      this.$store.commit('prefs/setPrefs', 'Lapel Pins')
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
  
  <style>
  .max-w-8xl {
    max-width: 90rem;
  }
  </style>
  