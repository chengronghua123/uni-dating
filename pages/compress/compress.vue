<template>
	<view class="compress-page">
		<view class="btn" @click="chooseImage">选择图片或者拍摄</view>
		<view class="compress-text">压缩前：<text class="color-red">{{before}}</text>KB，压缩后：<text class="color-red">{{after}}</text>KB</view>
		<view class="preview-text">预览</view>
		<view>
			<image class="look-image" :src="image" mode="aspectFit"></image>
		</view>
		<helang-compress ref="helangCompress"></helang-compress>
	</view>
</template>

<script>
	import helangCompress from '@/components/helang-compress/helang-compress';
	
	let that = this
	export default {
		data() {
			return {
				image: '',
				before: 0,
				after: 0
			};
		},
		components: {
			helangCompress
		},
		onLoad() {
			that = this
		},
		methods:{
			chooseImage(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
						that.image = res.tempFilePaths[0]
						const kb = (res.tempFiles[0].size/1024).toFixed(2)
						that.before = parseInt(kb)
				        console.log('压缩前大小',that.before+'KB');
						// 单张压缩
						//#ifdef H5
						that.$refs.helangCompress.compress({
						    src:res.tempFilePaths[0],
						    maxSize:800,
						    fileType:'jpg',
						    quality:0.9,
						    minSize:640 //最小压缩尺寸，图片尺寸小于该时值不压缩，非H5平台有效。若需要忽略该设置，可设置为一个极小的值，比如负数。
						}).then((res)=>{
						    // 压缩成功回调
							console.log('压缩后',that.getImgSize(res))
							that.image = res
						}).catch((err)=>{
						    // 压缩失败回调
						})
						// 批量压缩
						// this.$refs.helangCompress.batchCompress({
						//     batchSrc:this.paths,
						//     maxSize:800,
						//     fileType:'jpg',
						//     quality:0.85,
						//     progress:(res)=>{
						//         console.log('压缩进度');
						//         console.log(res);
						//     }
						// }).then((res)=>{
						//     // 压缩成功回调
						// }).catch((err)=>{
						//     // 压缩成功回调
						// })
						//#endif
				    }
				});
			},
			getImgSize(str) {
			    //获取base64图片大小，返回KB数字
			    var strNew = str.replace('data:image/jpeg;base64,', '');//这里根据自己上传图片的格式进行相应修改
				var strLength = strNew.length;
			    var fileLength = parseInt(strLength - (strLength / 8) * 2);
			    // 由字节转换为KB
			    var size = "";
			    size = (fileLength / 1024).toFixed(2);
				this.after = parseInt(size)
			    return parseInt(size);
			  },
		}
	}
</script>

<style lang="scss">
.compress-page{
	padding: 20rpx;
	.btn{
		display: inline-block;
		border-radius: 20rpx;
		padding: 20rpx;
		color: #fff;
		background-color: $color-primary;
	}
	.compress-text{
		font-size: 26rpx;
		color: #808080;
		margin-top: 20rpx;
	}
	.preview-text{
		margin: 20rpx 0;
	}
	.look-image{
		width: 100%;
		height: 500rpx;
	}
	.color-red{
		color: red;
		margin-right: 10rpx;
	}
}
</style>
