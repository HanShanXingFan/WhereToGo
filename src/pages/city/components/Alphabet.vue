<template>
	<ul class="list">
		<li class="item" v-for="item of letters" :key="item"
				@click="handleLetterClick"
				@touchstart="hanleTouchStart"
				@touchmove="hanleTouchMove"
				@touchEnd="hanleTouchEnd"
				:ref="item"
		>{{item}}</li>
	</ul>
</template>

<script>
	export default {
		name: 'cityAlphabet',
		data () {
			return {
				touchStatus: false, //标识位
				startY: 0,
				timer: null
			}
		},
		computed: {
			letters () {
				const letters = []
				for (let i in this.cities) {
					letters.push(i)
				}
//				console.log(letters)
				return letters
			}
		},
		props: {
			cities: Object
		},
		updated () { //数据发生变化,页面根据数据的变化渲染完页面会执行updated钩子函数
			this.startY = this.$refs['A'][0].offsetTop //A这个元素的第0项才是真正的dom元素,startY是A字母距离定位的offsetTop
		},
		methods: {
			handleLetterClick (e) {
				this.$emit('change', e.target.innerText)
//				console.log(e.target.innerText)
			},
			hanleTouchStart () {
				this.touchStatus = true //当手指触摸的时候,标示位变为true
			},
			hanleTouchMove (e) {
				if (this.touchStatus) { //只有当标示位为true的情况下,才会去做move事件的处理
//					const startY = this.$refs['A'][0].offsetTop     //A这个元素的第0项才是真正的dom元素,startY是A字母距离定位的offsetTop
					if (this.timer) {
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => { //只有当标示位为true的情况下,才会去做move事件的处理: 如果正在执行handleTouchMove这个函数,让它执行16毫秒之后在执行,假设在这儿16毫秒之间又去执行了手指的滚动即执行了handleTouchMove回调函数,会把上一次执行的操作给清理掉,重新执行你这一次要执行的事情
					const touchY = e.touches[0].clientY - 79  //touchY是手指距离搜索底部边框的距离,79是头部加搜索框的总高度
					const indexY = Math.floor((touchY - this.startY)/20) //算出每个字母下标
					/*console.log('A距离搜索框底部距离:'+startY)
					console.log('手指距离搜索框底部距离:'+touchY)*/
//					console.log(indexY)  //手指经过字母的下标
					if (indexY >= 0 && indexY < this.letters.length) {
						this.$emit('change', this.letters[indexY])
					}
					}, 16)
					
				}
			},
			hanleTouchEnd () {
				      //当手指结束滑动的时候,标识位变为false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		.item
			line-height: .4rem
			text-align: center
			color: $bgColor
</style>