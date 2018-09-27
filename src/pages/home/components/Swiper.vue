<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
			<!-- slides -->
			<swiper-slide v-for="(item, index) in swiperList" :key = "item.id">
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
				swiperList: [
					{
						id: '001',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/bb/3796236479c84d02.jpg_750x200_57d68258.jpg'
					},
					{
						id: '002',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/f4/5f2289f8675f0502.jpg_750x200_ab1633c7.jpg'
					},
				]
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		methods: {
			callback() {

			}
		},
		mounted() {
			//    console.log('this is current swiper instance object', this.swiper)
			this.swiper.slideTo(3, 1000, false)
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
			padding-bottom: 26.55%
			.swiper-img
				width: 100%
</style>