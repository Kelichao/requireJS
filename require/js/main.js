　	/*
	 * 此份配置文件可以放在html页面底部，但不推荐
	 * jquery文件后面不需要加js.不然加载不到
	 * 目录地址可以在Network处查看是否正确
	 */
	require.config({
	    //选填，集体的目录
	    baseUrl: "js",
	　　paths: {
	　　　　"jquery": "./jquery",
			"underscore": "./underscore",
			"proConfig": "./proConfig"
	　　}
	});

	// main.js
　　require(['jquery', 'underscore', 'proConfig'], function (jquery, underscore, proConfig){
　　　　
		// jquery由于进行过amd包装，所以返回正常
		console.log(jquery);

		// 输出正常
		console.log(underscore);

		// 正常输出
		console.log(proConfig);
　　});
