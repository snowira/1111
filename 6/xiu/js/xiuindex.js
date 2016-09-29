	/*var uul = null;
	var aali = null;
	var iLen = 0;*/

	window.onload = function(){
		/*uul = document.getElementById("wpbUl");
		aali = wpbUl.getElementsByTagName("li");
		iLen = aali.length;*/
/**********************************瀑布流***********************************/

/*	ajax("get","find.json","",function(data){
		var aar = JSON.parse(data);
		if(!aar.length){
			return;
		}
		for(var i = 0;i < aar.length;i++){
			var _index = getShort();
			var ddiv = document.createElement("div");
			var ooimg = document.createElement("img");
			var aaa = document.createElement("a");
			ooimg.src = aar[i].image;
			ooimg.style.width = "380px";
			ooimg.style.height = (380 / aar[i].width * aar[i].height) + "px";
			aaa.appendChild(ooimg);
			var oop = document.createElement("p");
			var hh = document.createElement("h3");
			oop.innerHTML = aar[i].title;
			hh.innerHTML = aar[i].oP;
			aaa.appendChild(oop);
			aaa.appendChild(hh);
			ddiv.appendChild(aaa);
			aali[_index].appendChild(ddiv);

		}
	});
	function getShort(){
		var index = 0;
		var ih = aali[index].offsetHeight;
		for(var i = 1;i < iLen;i++){
			if(ih > aali[i].offsetHeight){
				index = i;
				ih = aali[i].offsetHeight;
			}
		}
		return index;
	}*/
/**********************************瀑布流***********************************/
			ajax("get", "xiu.json", "", function(data){
				//2.将数据转成对象
				var arr = JSON.parse(data)._data;
				tabSwitch("bag1", arr);
				var arr1 = JSON.parse(data)._data1;
				tabSwitch1("bag1", arr1);
				var arr2 = JSON.parse(data)._data2;
				tabSwitch2("bag1", arr2);

				var arr3 = JSON.parse(data).dress1;
				tabSwitch("bag2", arr3);
				var arr4 = JSON.parse(data)._data1;
				tabSwitch1("bag2", arr4);
				var arr5 = JSON.parse(data)._data2;
				tabSwitch2("bag2", arr5);

				var arr6 = JSON.parse(data).shoe;
				tabSwitch("bag3", arr6);
				var arr7 = JSON.parse(data)._data1;
				tabSwitch1("bag3", arr7);
				var arr8 = JSON.parse(data)._data2;
				tabSwitch2("bag3", arr8);
			});

			ajax("get", "falls.json", "", function(data){
				//2.将数据转成对象
				var arr = JSON.parse(data).courses;
				falls("fallsimg", arr);
			
			});
/*-------------------------------------购物车------------------------------------------*/
			/*$.ajax({
				url:"fashion.json",
				type:"GET",
				success:function(data){
				}
			});	*/


/*-------------------------------------购物车结束------------------------------------------*/
			ajax("get", "lady.json", "", function(data){
				//2.将数据转成对象
					var arr = JSON.parse(data).lady;
					lady("1F", arr);

					$("#1F a img").hover(function(){
						/*$(this).css("position","absolute");*/
						$(this).animate({marginTop:-15},400,"swing");		
					},function(){
						$(this).stop(true);
						$(this).animate({marginTop:0},400,"swing");
						/*$(this).css("position","");*/
					});
				

				var arr1 = JSON.parse(data).lady1;
					lady("2F", arr1);
					$("#2F a img").hover(function(){
						$(this).animate({marginTop:-15},400,"swing");		
					},function(){
						$(this).stop(true);
						$(this).animate({marginTop:0},400,"swing");
					});

				var arr2 = JSON.parse(data).lady2;
					lady("3F", arr2);
					$("#3F a img").hover(function(){
						$(this).animate({marginTop:-15},400,"swing");		
					},function(){
						$(this).stop(true);
						$(this).animate({marginTop:0},400,"swing");
					});

				var arr3 = JSON.parse(data).lady3;
					lady("4F", arr3);
					$("#4F a img").hover(function(){
						$(this).animate({marginTop:-15},400,"swing");		
					},function(){
						$(this).stop(true);
						$(this).animate({marginTop:0},400,"swing");
					});


				var arr4 = JSON.parse(data).lady4;
					lady("5F", arr4);
					$("#5F a img").hover(function(){
						$(this).animate({marginTop:-15},400,"swing");		
					},function(){
						$(this).stop(true);
						$(this).animate({marginTop:0},400,"swing");
					});


			});

			

	function tabSwitch(div_id,arr){
	var bag = document.getElementById(div_id);
	var aUl = bag.getElementsByTagName("ul");
		for(var i = 0 ; i < arr.length ; i++){
            var aLi = document.createElement("li");
 			var aLia = document.createElement("a");
           	aLia.innerHTML = arr[i].title;
            aUl[0].appendChild(aLi);
            aLi.appendChild(aLia);
            $("#ul1").find("li").eq(0).attr("class","ulli");
            $(".ulli").siblings().attr("class","ulli1");
		}

	}
	
	function tabSwitch1(div_id,arr1){
	var bag = document.getElementById(div_id);
	var aUl = bag.getElementsByTagName("ul");
		for(var i = 0 ; i < arr1.length ; i++){
            var aLi = document.createElement("li");
 			var aLia = document.createElement("a");
           	aLia.innerHTML = arr1[i].title;
            aUl[1].appendChild(aLi);
            aLi.appendChild(aLia);
             $("#ul2").find("li").eq(0).attr("class","ulli");
		}

	}

	function tabSwitch2(div_id,arr2){
	var bag = document.getElementById(div_id);
	var aUl = bag.getElementsByTagName("ul");
		for(var i = 0 ; i < arr2.length ; i++){
            var aLi = document.createElement("li");
 			var aLia = document.createElement("a");
           	aLia.innerHTML = arr2[i].title;
            aUl[2].appendChild(aLi);
            aLi.appendChild(aLia);
		}
	}
/*
	function falls(div_id,arr){
	var oul = document.getElementById(div_id);
	var alii = document.createElement("ul");
	oul.appendChild(alii);
	var ali = document.createElement("li");
	alii.appendChild(ali);
		for(var i = 0;i < arr.length;i++){
			var odiv = document.createElement("div");
			var oimg = document.createElement("img");
			oimg.src = arr[i].bgurl;
			odiv.appendChild(oimg);
			ali.appendChild(odiv);
		}
	}
*/
function falls(div_id,arr){
	var oul = document.getElementById(div_id);
	var alii = document.createElement("ul");
	oul.appendChild(alii);
	var ali = document.createElement("li");
	alii.appendChild(ali);
		for(var i = 0;i < arr.length;i++){
			var odiv = document.createElement("div");
			var oimg = document.createElement("img");
			var oa = document.createElement("a");
			oa.href = "fashion.html";
			oimg.src = arr[i].bgurl;
			oa.appendChild(oimg);
			odiv.appendChild(oa);
			ali.appendChild(odiv);
		}
	}

function lady(div_id,arr){
	var oul = document.getElementById(div_id);
	var odiv = document.createElement("div");
	oul.appendChild(odiv);
	for(var i = 0; i < arr.length;i++){
		var oimg = document.createElement("img");
		var oa = document.createElement("a");
		oimg.src = arr[i].bgurl;
		oa.appendChild(oimg);
		odiv.appendChild(oa);
	}
}

/*function lady(div_id,arr){
	var divv = document.getElementById(div_id);
	var oul = document.createElement("ul");
	var oli = document.createElement("li");
	oul.appendChild(oli);
	divv.appendChild(oul);
	for(var i = 0; i < arr.length;i++){
		
		var oimg = document.createElement("img");
		var oa = document.createElement("a");
		oimg.src = arr[i].bgurl;
		
		oa.appendChild(oimg);
		oli.appendChild(oa);
	}*/


}