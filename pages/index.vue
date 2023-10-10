<template>
  <div>
    <TheHeader></TheHeader>
    <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
      <Post v-for="post in data" :key="post.uri" :post="post"></Post>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
  method: 'get',
  query: {
    query: `
      query NewQuery {
        pages(first:150) {
          nodes {
            id
            date
            title
            excerpt
            uri
          }
        }
      }`
}, 
transform(data:any){
 return data.data.pages.nodes as Array<Record<'title' | 'date' | 'excerpt' | 'uri', string>>;
}
});
</script>
