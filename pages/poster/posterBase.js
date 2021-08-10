var base = {
	width: '600rpx',
	height: '900rpx',
	views: [
		{ //背景
            type: 'image',
            src: 'https://file.kaiyaodata.com/2021/02/236b5b938e2d4f0691b4ed67e7497ffb.png',
            css: {
                top: '0rpx',
                width: '600rpx',
                height: '900rpx',
                radius: '16rpx'
            }
        },
		{ //商品
		    type: 'image',
		    src: '',
			// mode: 'aspectFill',
		    css: {
				left: '60rpx',
		        top: '60rpx',
		        width: '480rpx',
		        height: '380rpx',
		        radius: '15rpx'
		    }
		},
		{ //名称
            type: 'text',
            text: '',
            css: {
				width: '480rpx',
                left: '60rpx',
                top: '450rpx',
                fontSize: '28rpx',
				maxLines: 2,
                lineHeight: '36rpx',
            }
        },
		{ //分销二维码
		    type: 'image',
		    src: '',
		    css: {
				left: '420rpx',
		        top: '520rpx',
		        width: '120rpx',
		        height: '120rpx',
		    }
		},
		{ // 价格
		    type: 'text',
		    text: '￥10.00',
		    css: {
		        left: '60rpx',
		        top: '550rpx',
				color: '#d00000',
		        fontSize: '32rpx',
		        lineHeight: '36rpx',
		    }
		},
		{ //小勾
		    type: 'image',
		    src: 'https://file.kaiyaodata.com/2021/02/42459d7ab7e747e487dde42575c5ac99.png',
			// mode: 'aspectFill',
		    css: {
				left: '60rpx',
		        top: '640rpx',
		        width: '30rpx',
		        height: '30rpx',
		        radius: '15rpx',
				background: '#fff'
		    }
		},
		{
		    type: 'text',
		    text: '平台严选',
		    css: {
		        left: '90rpx',
		        top: '640rpx',
		        fontSize: '22rpx',
		        lineHeight: '36rpx',
		    }
		},
		{ //小勾
		    type: 'image',
		    src: 'https://file.kaiyaodata.com/2021/02/42459d7ab7e747e487dde42575c5ac99.png',
			// mode: 'aspectFill',
		    css: {
				left: '240rpx',
		        top: '640rpx',
		        width: '30rpx',
		        height: '30rpx',
		        radius: '15rpx',
				background: '#fff'
		    }
		},
		{
		    type: 'text',
		    text: '100%正品',
		    css: {
		        left: '270rpx',
		        top: '640rpx',
		        fontSize: '22rpx',
		        lineHeight: '36rpx',
		    }
		},
		{ //小勾
		    type: 'image',
		    src: 'https://file.kaiyaodata.com/2021/02/42459d7ab7e747e487dde42575c5ac99.png',
			// mode: 'aspectFill',
		    css: {
				left: '420rpx',
		        top: '640rpx',
		        width: '30rpx',
		        height: '30rpx',
		        radius: '15rpx',
				background: '#fff'
		    }
		},
		{
		    type: 'text',
		    text: '退换无忧',
		    css: {
		        left: '450rpx',
		        top: '640rpx',
		        fontSize: '22rpx',
		        lineHeight: '36rpx',
		    }
		},
		{ //头像
		    type: 'image',
		    src: '',
			// mode: 'aspectFill',
		    css: {
				left: '60rpx',
		        top: '760rpx',
		        width: '100rpx',
		        height: '100rpx',
		        radius: '50%',
				background: '#fff'
		    }
		},
		{ //用户昵称
		    type: 'text',
		    text: '',
		    css: {
		        left: '170rpx',
		        top: '800rpx',
		        fontSize: '28rpx',
		    }
		},
		{
		    type: 'text',
		    text: '为您推荐\n品质好货 限时抢不停',
		    css: {
		        left: '60rpx',
		        top: '870rpx',
		        fontSize: '26rpx',
				lineHeight: '40rpx',
				color: '#4f4f4f'
		    }
		},
		{ //小勾
		    type: 'image',
		    src: 'https://file.kaiyaodata.com/2021/02/42459d7ab7e747e487dde42575c5ac99.png',
			// mode: 'aspectFill',
		    css: {
				left: '410rpx',
		        top: '810rpx',
		        width: '30rpx',
		        height: '30rpx',
		        radius: '15rpx',
				background: '#fff'
		    }
		},
		{
		    type: 'text',
		    text: '正品好货',
		    css: {
		        left: '450rpx',
		        top: '810rpx',
		        fontSize: '22rpx',
		        lineHeight: '36rpx',
		    }
		},
		{ //小勾
		    type: 'image',
		    src: 'https://file.kaiyaodata.com/2021/02/42459d7ab7e747e487dde42575c5ac99.png',
			// mode: 'aspectFill',
		    css: {
				left: '410rpx',
		        top: '860rpx',
		        width: '30rpx',
		        height: '30rpx',
		        radius: '15rpx',
				background: '#fff'
		    }
		},
		{
		    type: 'text',
		    text: '超值特卖',
		    css: {
		        left: '450rpx',
		        top: '860rpx',
		        fontSize: '22rpx',
		        lineHeight: '36rpx',
		    }
		},
		{ //小勾
		    type: 'image',
		    src: 'https://file.kaiyaodata.com/2021/02/42459d7ab7e747e487dde42575c5ac99.png',
			// mode: 'aspectFill',
		    css: {
				left: '410rpx',
		        top: '910rpx',
		        width: '30rpx',
		        height: '30rpx',
		        radius: '15rpx',
				background: '#fff'
		    }
		},
		{
		    type: 'text',
		    text: '售后无忧',
		    css: {
		        left: '450rpx',
		        top: '910rpx',
		        fontSize: '22rpx',
		        lineHeight: '36rpx',
		    }
		},
	]
}

exports.base = base