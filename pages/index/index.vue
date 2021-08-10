<template>
	<view class="main-page">
		<view class="image-view">
			<image src="../../static/images/indexImage.jpeg" mode="aspectFit"></image>
		</view>
		<view class="btns">
			<button class="btn" @click="toPage('poster')">海报</button>
			<button class="btn" @click="toPage('compress')">h5图片压缩</button>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				
			};
		},
		onLoad(options) {
			uni.navigateTo({
				url:"../login/login"
			})
		},
		created() {

		},
		methods: {
		  toPage(type){
			  let url = ''
			  switch(type){
				  case 'poster': url = "/pages/poster/poster"
				  break;
				  case 'compress': url = "/pages/compress/compress"
				  break;
				  default: break;
			  }
			  uni.navigateTo({
			  	url
			  })
		  }
		}
	}
</script>

<style lang="scss" scoped>
	@import "./index.scss"
</style>
