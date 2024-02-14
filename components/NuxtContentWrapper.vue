<template>
  <ContentQuery :path="$route.path" v-if="$route.path" find="one" v-slot="{ data }">
		<ContentRenderer :value="data">
			<PinHeader :data="data" />
			<slot></slot>
			<NewColumnContent :data="data" />
			<PinContentImage :data="data"/>
			</ContentRenderer>
	</ContentQuery>
</template>
