<template>
  <NuxtLayout>
    <BlogHeader :data="data" />
    <BlogContent :data="data" />
    <BlogNavigation :current-article="data" />
  </NuxtLayout>
</template>

<script setup>
import BlogHeader from '~/components/BlogHeader.vue'
import BlogContent from '~/components/BlogContent.vue'
import BlogNavigation from '~/components/BlogNavigation.vue'

const route = useRoute()

const { data } = await useAsyncData('blog-article', async () => {
  const slug = route.params.slug
  return await queryContent('blog').where({ slug }).findOne()
})

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}
</script>