import config  from './config.js'

const request = function(params){
	console.log('http',config.http + params.url)
	let header = {
		"Content-Type": "application/x-javascript;charset=UTF-8"
	}
	uni.request({
		url: config.http+params.url,
		method: params.method ? params.method : "GET",
		data: { ...params.data },
		dataType: 'json',
		responseType: params.responseType == undefined ? 'text' : params.responseType,
		timeout: 10000,
		success: (result) => {
			console.log(result)
			if(result.statusCode==200){
				params.callBack(result.data);
			}else if(result.statusCode==500 && !params.errCallBack){
				uni.showToast({
					icon:'none',
					title:"服务器出错"
				})
			}else if(result.statusCode==400 && !params.errCallBack){
				uni.showToast({
					title: result.data,
					icon: "none"
				});
			}else{
				if (params.errCallBack) {
					params.errCallBack(res);
				}
				uni.hideLoading();
			}
		},
		fail:(error) =>{
			console.log(error)
		}
	})
}

export default request;