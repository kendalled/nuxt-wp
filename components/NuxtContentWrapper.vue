<template>
    <ContentRenderer v-if="data" :value="data">
			<PinHeader :data="data" />
			<TwoColumnContent :data="data" />
			<PinContentImage :data="data"/>
		</ContentRenderer>
</template>

<script setup>
  const route = $this.route
	const { data } = await useAsyncData('page-data', () => queryContent($this.route).findOne())
</script>