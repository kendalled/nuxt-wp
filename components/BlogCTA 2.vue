<template>
  <section class="bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90" />
    
    <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
      <div class="text-center">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p class="max-w-3xl mx-auto text-xl text-blue-100 leading-relaxed">
            {{ ctaDescription }}
          </p>
          
          <!-- Main CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <nuxt-link 
              to="/quote"
              class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-700 bg-white rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Get Your Free Quote
            </nuxt-link>
            
            <a 
              href="tel:+18443954464"
              class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-blue-300 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all duration-200 hover:border-blue-200"
            >
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (844) 395-4464
            </a>
          </div>

          <!-- Trust Indicators -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-blue-400/30">
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-500/20 rounded-xl">
                <svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Fast Turnaround</h3>
              <p class="text-blue-200 text-sm">Most orders ship within 2-3 weeks</p>
            </div>
            
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-500/20 rounded-xl">
                <svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Quality Guaranteed</h3>
              <p class="text-blue-200 text-sm">100% satisfaction guarantee</p>
            </div>
            
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-500/20 rounded-xl">
                <svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Best Pricing</h3>
              <p class="text-blue-200 text-sm">Competitive rates with no hidden fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogCTA',
  props: {
    articleType: {
      type: String,
      default: 'general'
    }
  },
  computed: {
    ctaDescription() {
      const descriptions = {
        pins: 'Transform your ideas into high-quality custom lapel pins. Our experienced team handles everything from design to delivery, making the process simple and stress-free.',
        coins: 'Create meaningful challenge coins that honor tradition and build unity. With over 20 years of experience, we deliver exceptional quality every time.',
        general: 'Whether you need custom lapel pins, challenge coins, or keychains, our expert team is ready to bring your vision to life with unmatched quality and service.',
        keychains: 'Design custom keychains that make lasting impressions. From corporate giveaways to personal gifts, we create keychains that people love to carry.'
      }
      
      return descriptions[this.articleType] || descriptions.general
    }
  }
}
</script>

<style scoped>
.bg-grid-white\/\[0\.05\] {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}
</style>