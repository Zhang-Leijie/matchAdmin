<template>
	<div>{{test}}</div>
</template>
<script>
	export default {
		data(){
			return {
				test: "hello"
			}
		},
		mounted(){
			console.log('mounted')
		}
	}
</script>