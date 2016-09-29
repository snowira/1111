/*window.onload = function(){
	var node = document.getElementById("move");
	var nodes = node.getElementsByTagName("a");
	for(var i = 0; i < nodes.length; i++){
				nodes[i].onmouseover = function(){
					startMove(this, 215);
					
				}
				nodes[i].onmouseout = function(){
					startMove(this, 205);
				}
			}
}
*/
function startMove(obj, iTarget){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				//8 缩放系数,缓冲运动效果最好的缩放系数
				var speed = (iTarget - obj.offsetWidth) / 8;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(obj.offsetWidth == iTarget){
					clearInterval(obj.timer);
				}else{
					obj.style.width = obj.offsetWidth + speed + "px";
				}
			}, 30);
		}

/*----------------购物车----------------------*/

$(function(){
	if($.cookie("goods") == null){
			$("#num").html("0")
			$(".topLink_span").html("0")
		}else{
			$("#num").html($.cookie("goods"))
			$(".topLink_span").html($.cookie("goods"))
			//$("#topLink_goods").html("");
			var timg = $("<div id = 'ttimg'><img src = 'image/g1_50_50.jpg'></div><div id = 'ttimgr'><p>Kenzo</p><p>女士纯棉小虎头衬衫 颜色：蓝色</p><p>￥2200</p><p>购物袋中共有<span>"+$.cookie("goods")+"</span>件商品</p></div>");
				$("#topLink_goods").html(timg);
		}

	$("#topLink_xiu").hover(function(){
			$("#topLink_xiu").find("a").css("display","block");
	},function(){
		$("#xiu_xiu").find("a").css("display","none");
	});

	$("#topLink_car").hover(function(){
			$("#topLink_goods").css("display","block");
			$("#topLink_car").css("background","#fff");
			$("#topLink_car a").css("color","#d50215");
			$("#topLink_car a").css("background-position","-214px -75px");
	},function(){
		$("#topLink_goods").css("display","none");
		$("#topLink_car").css("background","");
		$("#topLink_car a").css("color","#d7d7d7");
		$("#topLink_car a").css("background-position","-214px -40px");
	});



/*----------------图片淡入淡出----------------------*/
	/*$("#move_goodsimg ul li").hover(function(){
		$(this).fadeTo(200,0.8,function(){});
	},function(){
		$(this).fadeTo(120,1,function(){});
		$(this).finish();
	});*/


	$("#move_goodsimg ul li").hover(function(){
		$(this).fadeIn(1000,function(){
			$(this).fadeTo(200,0.8,function(){});
		});		
	},function(){
			$(this).fadeTo(120,1,function(){});
			$(this).finish();	
	});


	$("#carr img").hover(function(){
		$(this).fadeTo(300,0.9,function(){});
	},function(){
		$(this).fadeTo(400,1,function(){});
		$(this).finish();
	});

	$("#Radius_img").find("p").hover(function(){
		$(this).fadeTo(500,1,function(){});
	},function(){
		$(this).fadeTo(500,0,function(){});
		$(this).finish();
	});

	/*$("#wpbUl li img").hover(function(){
		alert("edf");
		$(this).fadeTo(300,0.8,function(){});
	},function(){
		$(this).fadeTo(300,1,function(){});
		$(this).finish();
	});*/
/*----------------弹性运动----------------------*/
/*	$("#move a").hover(function(){
				$(this).animate({left:'-40px'},"swing");
				
			},function(){
				$(this).animate({left:'+40px'},"swing");
				

			});
		});
*/


/*----------------图片放大缩小----------------------*/

	$(".lively ul li img.livelyimg1").hover(function(){
		$(this).animate({width:640,height:340,marginTop:-20,marginLeft:-20},300,"linear")
	},function(){
		$(this).animate({width:600,height:300,marginTop:0,marginLeft:0},300,"linear",function(){
		$(this).css({"width":"600px","height":"300px","marginTop":"0px","marginLeft":"0px"});
		$(this).stop(true);
		});

	});


$(".shoppingPlace ul li img.shoppingimg").hover(function(){
		$(this).animate({width:440,height:340,marginTop:-20,marginLeft:-20},300,"linear")
	},function(){
		$(this).animate({width:400,height:300,marginTop:0,marginLeft:0},300,"linear",function(){
		$(this).css({"width":"400px","height":"300px","marginTop":"0px","marginLeft":"0px"});
		$(this).stop(true);
		});

	});
/*---------------json菜单----------------------*/

	$("#bagg1").hover(function(){
		$("#bag1").css("display","block");
	},function(){
		$("#bag1").css("display","none");
	});

	$("#bagg2").hover(function(){
		$("#bag2").css("display","block");
	},function(){
		$("#bag2").css("display","none");
	});

	$("#bagg3").hover(function(){
		$("#bag3").css("display","block");
	},function(){
		$("#bag3").css("display","none");
	});

	$("#bagg4").hover(function(){
		$("#bag3").css("display","block");
	},function(){
		$("#bag3").css("display","none");
	});

	$("#bagg5").hover(function(){
		$("#bag2").css("display","block");
	},function(){
		$("#bag2").css("display","none");
	});

	$("#bagg6").hover(function(){
		$("#bag1").css("display","block");
	},function(){
		$("#bag1").css("display","none");
	});

	$("#bagg7").hover(function(){
		$("#bag3").css("display","block");
	},function(){
		$("#bag3").css("display","none");
	});

	$("#bagg8").hover(function(){
		$("#bag1").css("display","block");
	},function(){
		$("#bag1").css("display","none");
	});

	$("#bagg9").hover(function(){
		$("#bag2").css("display","block");
	},function(){
		$("#bag2").css("display","none");
	});


/*	$("#ul1 li").eq(0).attr("class","ull1");*/
	
		/*$("#move_list .move_list_1").hover(function(){
				$(this).animate({left:'-40px'},"swing");
				
			},function(){
				$(this).animate({left:'+40px'},"swing");
				

			});
		});
*/

$("#ladyfix").on("click",function(){
	$(".ladyfix_1").css("background-position","-150px 0");
});
/*$("#ladyfix").on("click",function(){
	$(".ladyfix_2").css("background-position","-150px -100px");
});
$("#ladyfix").on("click",function(){
	$(".ladyfix_3").css("background-position","-150px -50px");
});
$("#ladyfix").on("click",function(){
	$(".ladyfix_4").css("background-position","-150px -150px");
});
$("#ladyfix").on("click",function(){
	$(".ladyfix_5").css("background-position","-150px -200px");
});*/

/*$("#ladyMain a").hover(function(){
				$(this).css("position","absolute");
				$(this).animate({marginTop:-10},400,"swing");
				
				
			},function(){
				$(this).animate({marginTop:0},400,"swing");
				$(this).css("position","");

			});*/

	var aBtn = $("#playB").find("ol").find("li");
	var aoul = $("#playB").find("ul");
	var aali = aoul.find("li");
	var iNow = 0;
	var timer = null;
	aBtn.click(function(){
		iNow = $(this).index();
		tab();
	});
	function tab(){
		aBtn.attr("class","");
		aBtn.eq(iNow).attr("class","active");
		if(iNow == aali.size()-1){
			aBtn.eq(0).attr("class","active");
		}
		aoul.animate({left:-1200 * iNow},function(){
			if(iNow == aali.size() - 1){
				iNow = 0;
				aoul.css("left",0);
			}
		});
	}
	function timerInner(){
		iNow++;
		tab();
	}
	timer = setInterval(timerInner,2000);
	$("#playB").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(timerInner, 2000);
	});














});



		