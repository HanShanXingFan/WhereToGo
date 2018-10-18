<template>
	<div class="detail">
		<detail-banner
			:sightName="sightName"
			:bannerImg="bannerImg"
			:bannerImgs="gallaryImgs"
		></detail-banner>
		<detail-header></detail-header>
		<detail-list :list="list"></detail-list>
		<!--<div class="content"></div>-->
	</div>
</template>

<script>
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	import DetailList from './components/List'
	export default {
		name: 'detail',
		components: {
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data () {
			return {
				sightName: '',
				bannerImg: '',
				gallaryImgs: [],
				list: []
			}
		},
		methods: {
	 	getDetailInfo () {
      this.$http.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
        console.log(this.list)
      }
    }
		},
		mounted () {
			this.getDetailInfo()
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		height: 20rem
</style>