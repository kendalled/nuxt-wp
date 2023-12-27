<template>
    <ContentQuery v-if="data" :path="$route.path" find="one" v-slot="{ data }">
				<ContentRenderer :value="data">
					<PinHeader :data="data" />
					<TwoColumnContent :data="data" />
					<PinContentImage :data="data"/>
				</ContentRenderer>
			</ContentQuery>
</template>

<script setup>
    console.log('hey component')
</script>