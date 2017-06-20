
/*通知公告的定时滚动切换动画效果*/
(function (win){ 
	var callboarTimer; 
	var callboard = $(".scrollNotice"); 
	var callboardUl = callboard.find('ul'); 
	var callboardLi = callboard.find('li'); 
	var liLen = callboard.find('li').length; 
	var initHeight = callboardLi.first().outerHeight(true); 
	win.autoAnimation = function (){ 
		if (liLen <= 1) return; 
		var self = arguments.callee; 
		var callboardLiFirst = callboard.find('li').first(); 
		callboardLiFirst.animate({ 
			marginTop:-initHeight 
		}, 500, function (){ 
		clearTimeout(callboarTimer); 
		callboardLiFirst.appendTo(callboardUl).css({marginTop:0}); 
		callboarTimer = setTimeout(self, 3000); 
		}); 
	} 
	callboard.mouseenter( 
	function (){ 
		clearTimeout(callboarTimer); 
	}).mouseleave(function (){ 
		callboarTimer = setTimeout(win.autoAnimation, 3000); 
	}); 
}(window)); 
setTimeout(window.autoAnimation, 3000);
/*专业教育平台的文字显示／隐藏动画效果*/
$(document).ready(function(){
	$("#ulPEOlatform .list-group-item").hover(
			function(){
				$(this).find(".divPicText").stop().animate({
					"height":80
				});
			},function(){
				$(this).find(".divPicText").stop().animate({
					"height":0
				});
			}
		);
})