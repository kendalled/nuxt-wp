<template>
	<div>
		<main class="bg-gray-50">
			<!-- nuxt cms content -->
			<NuxtContentWrapper>
				<ScrollingPins />
			</NuxtContentWrapper>	
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
  let route = useRoute()
	console.log(route)
</script>
