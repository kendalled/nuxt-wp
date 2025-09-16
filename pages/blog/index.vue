<template>
  <div class="min-h-screen overflow-y-hidden">
    <BlogGrid2 />
    <TailFoot :location="false" />
  </div>
</template>

<script>
import BlogGrid2 from '~/components/BlogGrid2'
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    BlogGrid2,
    TailFoot
  },
  data () {
    return { total: 0, open: false }
  },
  head () {
    return {
      title: 'Blog Posts | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'View our latest blog posts at a glance. From industry advice to quick history, we\'ve got you covered on lapel pins and other promotional goods.' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://lapelpinsandcoins.com/blog' }
      ]
    }
  }
}
</script>

<style scoped>
.blogFooter {
  flex-shrink: 0;
}
main {
  flex: 1 0 auto;
}
.blog__overview {
  padding: 0 20px;
  max-width: 600px;
  margin: 40px auto 60px;
}

.blog__overview > p {
  line-height: 1.6;
}

.blog__detail-link {
  color: #000;
}
</style>
