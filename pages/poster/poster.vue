<template>
	<view style="padding: 20rpx;">
		<view class="introduce">
			利用uni的画布生成海报，用js来操作生成，uni打包的h5，app，小程序都可以使用
		</view>
		<button @click="generatePoster" size="mini">生成海报</button>
		<view class="poster-shade" v-if='showPoster'>
			<view class="poster-content">
				<line-painter isRenderImage :board="base" @success="path = $event"/>
				<view class="save-or-share">
					<button open-type="share" type='warn' size="mini" class="save-btn btnleft">分享好友</button>
					<button type='warn' size="mini" class="save-btn btnright" @click="savePoster">保存本地</button>
				</view>
			</view>
		</view>
		<!-- <line-painter :board="base"/> -->
	</view>
</template>

<script>
	import { getSharePoster } from '@/utils/QS-SharePoster/QS-SharePoster.js';
	import linePainter from '@/components/lime-painter'
	import { base } from "./posterBase.js"
	export default{
		data(){
			return{
				showPoster: false,
				poster:{},
				canvasId: 'testShareType',
				cavues:'',
				base: '', // 海报数据源
				path: '', // 海报路径
			}
		},
		onLoad() {
			this.base = base
		},
		onShareAppMessage(options) {
			return {
				title: '允儿海报分享',
				path: 'pages/index/index',
				imageUrl: '',
				success: function(res) {
				},
				fail: function() {
					// 转发失败之后的回调
					if (res.errMsg == 'shareAppMessage:fail cancel') {
						// 用户取消转发
					} else if (res.errMsg == 'shareAppMessage:fail') {
						// 转发失败，其中 detail message 为详细失败信息
					}
				}
			}
		},
		components:{ linePainter },
		methods:{
			//生成海报https://ext.dcloud.net.cn/plugin?id=2389
			generatePoster: async function(){
				console.log(this.base)
				this.base.views[0].src = 'https://file.kaiyaodata.com/2021/02/236b5b938e2d4f0691b4ed67e7497ffb.png'
				this.base.views[1].src = 'https://file.kaiyaodata.com/2021/02/d29080622ffc46648f7d158eef56f70f.jpg'
				this.base.views[3].src = 'https://file.kaiyaodata.com/2021/02/d29080622ffc46648f7d158eef56f70f.jpg'
				this.base.views[4].src = 'https://file.kaiyaodata.com/2021/02/42459d7ab7e747e487dde42575c5ac99.png'
				this.showPoster = true
			},
			
			//保存图片到相册
			savePoster(){
				console.log(this.path)
				uni.saveImageToPhotosAlbum({
					filePath: this.path,
					success: function () {
						uni.showToast({
							icon:'none',
							title:'保存成功'
						})
					}
				})
			}
		}
	}
</script>

<style>
	@import url("./poster.css");
</style>
