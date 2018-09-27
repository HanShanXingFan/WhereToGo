<template>
  <div class="header">
  	<div class="header-left"><i class="iconfont icon-fanhui"></i></div>
  	<div class="header-input"><i class="iconfont icon-sousuo"></i>输入城市/景点/主题</div>
  	<div class="header-right">城市<i class="iconfont icon-paixujiantouxia"></i></div>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
	@import '../../../assets/styles/varibles.styl'
	.header
		display: flex
		line-height: .86rem
		background: $bgColor
		color: #fff
		.header-left
			width: .64rem
			float: left
			.icon-fanhui
				padding-left: 0.2rem;
		.header-right
			width: 1.24rem
			float: right
			text-align: center
		.header-input
			flex: 1
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left: .2rem
			background: #fff
			border-radius: .1rem
			color: #e5e5e5
</style>
