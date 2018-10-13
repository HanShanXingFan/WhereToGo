<template>
	<div>
	<city-header></city-header>
	<city-search :cities = "cities"></city-search>
	<city-list :cities = "cities" :hot="hotCities"
		:letter="letter"
	></city-list>
	<city-alphabet :cities = "cities"
		@change="handleLetterChange"
	></city-alphabet>
	</div>
</template>

<script>
	import CityHeader from './components/Header'
	import CitySearch from './components/Search'
	import CityList from './components/List'
	import CityAlphabet from './components/Alphabet'
	export default {
		name: 'city',
		components: {
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data () {
			return {
				cities: {},
				hotCities: [],
				letter: ''
			}
		},
		methods: {
			getCityInfo () {
				this.$http.get('/api/city.json')
				.then(this.handleCityInfoSucc)
			},
			handleCityInfoSucc (res) {
//				console.log(res)
					res = res.data
					if (res.ret && res.data) {
						const data = res.data
						this.cities = data.cities
//						console.log(this.cities)
						this.hotCities = data.hotCities
					}
			},
			handleLetterChange (letter) {
//				console.log(letter)
					this.letter = letter
			}
		},
		mounted () {
			this.getCityInfo()
		}
	}
</script>

<style lang="stylus" scoped>
</style>