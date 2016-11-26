define(function(require) {

	// 以上框架只符合amd规范，拿不到返回值。
	var value = require("jquery");
	var key = require("underscore");

	// 我自己的对象可以拿到
	var proConfig = require("proConfig");
	console.log(proConfig);
	// alert();
	console.log(key);
});