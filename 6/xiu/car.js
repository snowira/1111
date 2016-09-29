$(function(){
	if($.cookie("goods") == null){
			var ti = $("<img class = 'drive_img' src='image/car/nogoods.jpg'><h2>购物袋内暂时没有商品,现在就去<a href='index.html'>挑选自己喜欢的商品</a></h2>")
			$("#drive_Main").html(ti);
		}else{
			var timg = $("<div class = 'ttimg'><img src = 'image/g1_50_50.jpg'></div><div class = 'ttimgr'><p>Kenzo</p><p class = 'p1'>女士纯棉小虎头衬衫 颜色：蓝色</p><p>￥2200</p><p>已选商品<span>"+$.cookie("goods")+"</span>件</p></div><a class = 'delete'>删除</a>");
		$("#drive_Main").html(timg);
		}

	$(".delete").click(function(){
		$.cookie("goods",null);
		$("#drive_Main").html("");
		var ti = $("<img class = 'drive_img' src='image/car/nogoods.jpg'><h2>购物袋内暂时没有商品,现在就去<a href='index.html'>挑选自己喜欢的商品</a></h2>")
		$("#drive_Main").html(ti);	
		$("#num").html("0")
		$(".topLink_span").html("0")
	});
});
	
