<template>
	<div class="list" ref="wrapper">
	<div>
		<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">{{$store.state.city}}</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
				<div 
					class="button-wrapper" 
					v-for="item in hot" 
					:key="item.id"
					@click="hanleCityclick(item.name)"
				>
					<div class="button">{{item.name}}</div>
				</div>
			</div>
		</div>
		<div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
			<div class="title border-topbottom">{{key}}</div>
			<div class="item-list">
				<div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id" @click="hanleCityclick(innerItem.name)">{{innerItem.name}}</div>

			</div>
		</div>
	</div>
</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import { mapMutations } from 'vuex'
	export default {
		name: 'cityList',
		props: {
			hot: Array,
			cities: Object,
			letter: String
		},
		data () {
			return {
				
			}
		},
		mounted () {
			this.scroll = new Bscroll(this.$refs.wrapper)
		},
		methods: {
			hanleCityclick (name) {
//				this.$store.commit('changecity', name)
				this.changecity(name)
				this.$router.push('/')
			},
			...mapMutations(['changecity'])//我们有一个mutation叫changecity, 然后我把这个mutation映射到组件内一个叫changecity的方法,如果调这个mutation,只需要调用changecity方法就可以了
		},
		watch: {
			letter () {
//				console.log(this.letter)
					if (this.letter) {
//						console.log(this.$refs)
						const element = this.$refs[this.letter][0]
						this.scroll.scrollToElement(element) //better-scroll这个scrollToElement方法接受一个dom元素
					}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.border-topbottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
	.border-bottom
		&:before
			border-color: #ccc
	.list
		position: absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		overflow: hidden
		.title
			line-height: .4rem
			background: #eee
			padding-left: .2rem
			color: #666
			font-size: .22rem
		.button-list
			padding: .1rem .6rem .1rem .1rem
			overflow: hidden
			.button-wrapper
				float: left
				width: 33.33%
				.button
					padding: .1rem 0
					text-align: center
					margin: .1rem
					border: .02rem solid #ccc
					border-radius: .06rem
		.item-list
			.item
				line-height: .76rem
				padding-left: .2rem
</style>