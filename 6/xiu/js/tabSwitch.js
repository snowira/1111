/*function tabSwitch(div_id,arr){
	var bag = document.getElementById(div_id);
	var aUl = bag.getElementsByTagName("ul");
		for(var i = 0 ; i < arr.length ; i++){
            var aLi = document.createElement("li");
 			var aLia = document.createElement("a");
           	aLia.innerHTML = arr[i].title;
            aUl[0].appendChild(aLi);
            aLi.appendChild(aLia);
		}

}*/

/*function tabSwitch(div_id,arr){
	var bag = document.getElementById(div_id);
	var aul = document.getElementsByTagName("ul");
	bag.appendChild(aul);

	for(var i = 0;i < arr.length;i++){
		var aLi = document.createElement("li");
 		var aLia = document.createElement("a");
          aLia.innerHTML = arr[i].title;
          aul[0].appendChild(aLi);
          aLi.appendChild(aLia);
	}
	
}*/

/*function tabSwitch1(div_id,arr1){
	var bag = document.getElementById(div_id);
	var aUl = bag.getElementsByTagName("ul");
		for(var i = 0 ; i < arr1.length ; i++){
            var aLi = document.createElement("li");
 			var aLia = document.createElement("a");
           	aLia.innerHTML = arr1[i].title;
            aUl[1].appendChild(aLi);
            aLi.appendChild(aLia);
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
}*/

/*window.onload = function(){
	var oul = document.getElementById("fallsimg");
	var alii = document.createElement("ul");
	oul.appendChild(alii);
	var ali = document.createElement("li");
	alii.appendChild(ali);
	ajax("get","falls.json","",function(data){
		var obj = JSON.parse(data);
		var arr = obj.courses;
		for(var i = 0;i < arr.length;i++){
			var odiv = document.createElement("div");
			var oimg = document.createElement("img");
			var img = document.getElementsByTagName("img");

			oimg.src = arr[i].bgurl;
			odiv.appendChild(oimg);
			var op = document.createElement("p");
			op.innerHTML = arr[i].title;
			odiv.appendChild(op);
			var op1 = document.createElement("p");
			op1.innerHTML = arr[i].name;
			odiv.appendChild(op1);
			var op2 = document.createElement("p");
			op2.innerHTML = arr[i].price;
			odiv.appendChild(op2);
			ali[i % 4].appendChild(odiv);
		}
	})
}
*/
/*	var timer = null;
	var speed = 960;*/
/*window.onload = function(){
	var bag = document.getElementById("bag1");
	var aUl = bag.getElementsByTagName("ul");
	ajax("get","http://10.30.162.5/zouxiu/js/xiu.json","",function(data){
		var arr = JSON.parse(data)._data;
		for(var i = 0 ; i < arr.length ; i++){
            var aLi = document.createElement("li");
            aLi.innerHTML = arr[i].title;
            aUl[0].appendChild(aLi);
		}
	});
