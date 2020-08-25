<template>
	<div class="box">
		<!-- <h1>Index</h1>
		<Button>Add</Button> -->
		<keep-alive include="test">
			<v-test></v-test>
		</keep-alive>
	</div>
</template>
<script>
	import vTest from "./test01.vue"
	export default{
		name: 'Index',
		data(){
			return{

			}
		},
		beforeRouteLeave(to, from, next) {
			// console.log(to,from,next)
         // 设置下一个路由的 meta
	        // console.log(to)
	        // console.log(from)
	        next(true)
	    },
		mounted(){

		},
		methods:{
			
		},
		components:{vTest},

	}
</script>
<style scoped>
	.box{
		height: 100%;
		background: #FFFFFF;
	}
</style>