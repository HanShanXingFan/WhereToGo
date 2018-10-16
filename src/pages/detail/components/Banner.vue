<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img src="https://img1.qunarzz.com/travel/d3/1809/aa/934101e770ce92b5.jpg_640x350x70_3b6c9c02.jpg" alt="" class="banner-img" />
			<div class="banner-info">
				<div class="banner-title">枫叶欲残看愈好 －－ 加拿大东部深秋赏枫</div>
				<div class="banner-number"><i class="icon-font icon-ganxingqu banner-icon"></i>39</div>
			</div>
		</div>
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleClose"></common-gallary>
	</div>
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	export default {
		name: 'detailBanner',
		components: {
			CommonGallary
		},
		data () {
			return {
				showGallary: false,
				imgs: ['https://img1.qunarzz.com/travel/d3/1809/aa/934101e770ce92b5.jpg_640x350x70_3b6c9c02.jpg',
					'http://img1.qunarzz.com/sight/p0/1411/b3/23d1e419f4620ba3ff79fcbe216d3ca5.water.jpg_r_800x800_3a38cd82.jpg']
			}
		},
		methods: {
			handleBannerClick () {
				this.showGallary = true
			},
			handleClose () {
				this.showGallary = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem 
			color: #fff
			background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,.8))
			.banner-title
				flex: 1
				font-size: .32rem
				padding:0 .2rem
			.banner-number
				height: .32rem
				margin-top: .14rem
				padding: 0 .4rem
				line-height: .32rem
				border-radius: .2rem
				background: rgba(0, 0,0,.8 )
				font-size:.24rem
				.banner-icon
					font-size:.24rem
</style>