<template>
    <ContentRenderer v-if="show" :value="data">
			<PinHeader :data="data" />
			<TwoColumnContent :data="data" />
			<PinContentImage :data="data"/>
		</ContentRenderer>
</template>

<script setup>
  const route = useRoute()
	const { data } = await useAsyncData('page-data', () => queryContent(route.path).findOne())
	const show = (data !== null)
	console.log(show)
</script>