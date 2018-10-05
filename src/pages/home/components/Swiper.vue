<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" v-if="showSwiper">
			<!-- slides -->
			<swiper-slide v-for="(item, index) in list" :key = "item.id">
				<img 
					class="swiper-img" 
					:src="item.imgUrl" />
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>

</template>

<script>
	export default {
		name: 'swipers',
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop: true
				},
			}
		},
		props: {
			list: Array
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			},
			showSwiper () {
				return this.list.length
			}
		},
		methods: {
			callback() {

			}
		},
		mounted() {
			//    console.log('this is current swiper instance object', this.swiper)
//			this.swiper.slideTo(3, 1000, false)
		}
	}
</script>

<style lang="stylus" scoped>
		.wrapper >>> .swiper-pagination-bullet-active /*三个箭头 >>> 代表样式穿透*/
			background: #fff
		.wrapper
			overflow: hidden
			width: 100%
			height: 0
			padding-bottom: 31.25%
			.swiper-img
				width: 100%
</style>