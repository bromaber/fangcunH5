$(function(){
    /*下拉收起效果*/
	$(".title").click(function(){
		var $cls = $(this).attr("class");
		var $next = $(this).next("div");
		var $this = $(this);
		if ($cls=="title on") {
			$next.slideUp("fast");
			$this.removeClass("on");
			return false;
		}else{
			$next.slideDown("fast");
			$this.addClass("on");
			return false;
		}
	})
	/*风险评估选项*/
	$(".research section").click(function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on")
	})
	/*支付方式选项*/
	$(".payment section").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	})
	/*同意提示*/
	$(".square").click(function(){
		var $img = $(this).find("img");
		$img.toggle();
		if ($img.is(":visible")){
			$("#dis-btn").attr("href","success.html");
		}else{
			$("#dis-btn").removeAttr("href");
		}
	});
})