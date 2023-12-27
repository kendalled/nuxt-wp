<template>
	<div>
		<main class="bg-gray-50">
			<!-- nuxt cms content -->
			<ContentQuery :path="$route.path" v-if="$route.path" find="one" v-slot="{ data }">
				<ContentRenderer :value="data">
					<PinHeader :data="data" />
					<TwoColumnContent :data="data" />
					<PinContentImage :data="data"/>
				</ContentRenderer>
			</ContentQuery>
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
  	// let route = useRoute()
	// let { data } = await useAsyncData('page-data', () => queryContent(route.path).findOne())
	// const show = (data !== null)
	// console.log(route)
	// console.log(data)
</script>
