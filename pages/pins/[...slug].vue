<template>
	<div>
		<main class="bg-gray-50">
			<!-- nuxt cms content -->
			<ContentRenderer v-if="show" :value="data">
				<PinHeader :data="data" />
				<TwoColumnContent :data="data" />
				<PinContentImage :data="data"/>
			</ContentRenderer>
			<PinBenefits />
    		<LargeTest />
    		<TailPricing />
    		<TailSteps class="-mt-14" />
    		<Faq2 />
    		<TailCta />
    		<TailFoot />
		</main>
	</div>
</template>

<script setup>
  const route = useRoute()
	const { data } = await useAsyncData('page-data', () => queryContent(route.path).findOne())
	const show = (data !== null)
	console.log(show)
</script>
