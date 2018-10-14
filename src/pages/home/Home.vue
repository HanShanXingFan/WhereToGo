<template>
	<div>
		<home-header></home-header>
		<!--<home-swiper></home-swiper>-->
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons'
	import HomeRecommend from './components/Recommend'
	import HomeWeekend from './components/Weekend'
	import { mapState } from 'vuex'
	export default {
		name: 'home',
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		data () {
			return {
				lastCity: '', //初次进入页面所显示的城市
				swiperList: [],
				iconList: [],
				recommendList: [],
				weekendList: []
			}
		},
		computed: {
			...mapState(['city'])
		},
		methods: {
			getHomeInfo () {
				this.$http.get('/api/index.json?city='+ this.city).then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc (res) {
				res = res.data
				if (res.ret && res.data) {
					const data = res.data
//					console.log(data)
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				}
			}
		},
		mounted () {
//			console.log('mounted')
			this.lastCity = this.city
			this.getHomeInfo()
		},
		activated () {
			//当前的页面的城市和上一次页面显示的城市是否一样,一样不发请求,不一样发请求
			if (this.lastCity != this.city) {
				this.lastCity = this.city
				this.getHomeInfo()
			}
//			console.log('activated')
		}
	}
</script>

<style scoped>
</style>