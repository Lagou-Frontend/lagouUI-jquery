/**
 *  lagou.utils.js is for laoguUI by lance at 2015-11-5 
 */

/**
 *	声明命名空间
 */
var lg = window.lg || {};

/**
 *	lg.Utils 用于存放各种常用的方法，比如getRandom getDateCN 
 *
 */
lg.Utils = lg.Utils || {};

// lg.Utils = function(options) {

// }
	/**
	 *	获取随机数 常用于ID
	 */
lg.Utils.getRandom = function(num) {
		window._LG_RANDOM ? '' : window._LG_RANDOM = {};
		var _lg_random = window._LG_RANDOM || {},
			_num = num || 4,
			_random = getRandomSimple();
		while (_lg_random[_random]) {
			_random = getRandomSimple();
			if (!_lg_random[_random]) break;
		}
		window._LG_RANDOM[_random] = _random;
		return _random;
		//随即返回随机数  --  可能重复
		function getRandomSimple() {
			var random = '';
			for (var i = 0; i < _num; i++) {
				var r = Math.floor(Math.random() * 10);
				random += r.toString();
			}
			return random.toString();
		}
}
	/**
	 *	转换时间 如：2015年11月03日 10:53
	 */
lg.Utils.transformTimeCN = function(s) {
		return new Date(parseInt(s) * 1000).toLocaleString().substr(0, 17);
}
	/**
	 *	转换时间 如：2015-11-03 10:53:00
	 */
lg.Utils.transformTimeEN = function(s) {
		return new Date(parseInt(s) * 1000).toLocaleString().replace(/年|月/g, '-').replace(/日/g, ' ');
}
	/**
	 *	获取日期（中文） 如：2015年12月03日
	 */
lg.Utils.getDateCN = function() {
		var _date = new Date();
		var _year = _month = _day = 0;
		var currDate = '';
		_year = _date.getFullYear();
		_month = _date.getMonth() + 1;
		_day = _date.getDate();
		currDate += _year + '年';
		if (_month >= 10) {
			currDate += _month + '月';
		} else {
			currDate += '0' + _month + '月';
		}
		if (_day >= 10) {
			currDate += _day + '日';
		} else {
			currDate += '0' + _day + '日';
		}
		return currDate;
}
	/**
	 *	获取日期（英文） 如：2015-12-03
	 */
lg.Utils.getDateEN = function() {
		var _date = new Date();
		var _year = _month = _day = 0;
		var currDate = '';
		_year = _date.getFullYear();
		_month = _date.getMonth() + 1;
		_day = _date.getDate();
		currDate += _year + '-';
		if (_month >= 10) {
			currDate += _month + '-';
		} else {
			currDate += '0' + _month + '-';
		}
		if (_day >= 10) {
			currDate += _day;
		} else {
			currDate += '0' + _day;
		}
		return currDate;
}
	/**
	 *	给各位数加0
	 */
lg.Utils.addZero = function(int) {
	if(isNaN(parseInt(int)))return '0';
	if(int<10){
		return '0'+int;
	}else{
		return ''+int;
	}
}
/**
*	解决 低版本IE $.browser 未定义bug
*
*/

jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();