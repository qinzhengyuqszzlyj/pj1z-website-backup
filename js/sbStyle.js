$(document).ready(function(){

	oTab2();
})

		
	function oTab2(){
		//tab选项卡
		$("#tab2 ul li").css({"color":"#666"});
	 	$("#tab2 ul li").eq(0).css({"color":"#ffbe00"});
		$("#tab2 .more").children().eq(0).show().siblings().hide();
		$("#tabcon2").children().eq(0).stop(true,true).fadeIn().siblings().hide();
		$("#tab2 ul li").mouseover(function(){
			var q = $(this).index();
			$(this).css({"color":"#ffbe00"}).siblings().css({"color":"#666"});
			$(this).parent().next().children().hide().siblings().eq(q).show();
			$(this).parents("#tab2").next().children().stop(true,true).hide().siblings().eq(q).fadeIn();
		});
	}
