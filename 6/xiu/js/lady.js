function startMove1(obj, json, fn){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var bStop = true; //代表所有的值都到达了
			//opacity  filter
			//当前样式
			for(var attr in json){
				var iCur = 0;
				if(attr == "opacity"){
					//取出当前的透明度
					iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
				}else{
					iCur = parseInt(getStyle(obj, attr));
				}

				var iSpeed = (json[attr] - iCur) / 8;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(iCur != json[attr]){
					bStop = false;
				}

				if(attr == "opacity"){
					obj.style.filter = "alpha(opacity: " + (iCur + iSpeed) + ")";
					obj.style.opacity = (iCur + iSpeed) / 100;
				}else{
					obj.style[attr] = iCur + iSpeed + "px";
				}
			}
			if(bStop){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		}, 30);
	}

	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];
		}
	}


function UniformMove(obj, iSpeed ,json, fn){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var bStop = true; //代表所有的值都到达了
			//opacity  filter
			//当前样式
			for(var attr in json){
				var iCur = 0;
				if(attr == "opacity"){
					//取出当前的透明度
					iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
				}else{
					iCur = parseInt(getStyle(obj, attr));
				}

				if(iCur < json[attr]){
					iSpeed = Math.abs(iSpeed);
				}else{
					iSpeed = Math.abs(iSpeed) * -1;
				}
				if(iCur != json[attr]){
					bStop = false;
				}

				if(attr == "opacity"){
					obj.style.filter = "alpha(opacity: " + (iCur + iSpeed) + ")";
					obj.style.opacity = (iCur + iSpeed) / 100;
				}else{
					obj.style[attr] = iCur + iSpeed + "px";
				}
			}
			if(bStop){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		}, 5);
	}
window.onload = function(){
		var lady = document.getElementById("1F");
		var ladya = lady.getElementsByTagName("a");
		for(var i = 0; i < ladya.length; i++){
			//ladya[i].innerHTML = "Left = " + ladya[i].offsetLeft + ", Top = " + ladya[i].offsetTop;
			//重设所有图片的坐标 left 和 top
			ladya[i].style.left = ladya[i].offsetLeft + "px";
			ladya[i].style.top = ladya[i].offsetTop + "px";

			//ladya[i].style.position = "absolute";
		}
		var iMinIndex = 2;
		for(var i = 0; i < ladya.length; i++){
			ladya[i].style.position = "absolute";
			/*ladya[i].style.margin = 0;
			ladya[i].style.background = "url(" + "img/" + (i + 1) + ".jpg" + ") no-repeat center";*/
		}
		//2.添加事件
		for(var i = 0; i < ladya.length; i++){
			ladya[i].onmouseover = function(){

				//当移入鼠标,开缩放的时候,让当前正在缩放的这个图片,层级最高
				//this.style.zIndex = iMinIndex++;
				//2^31次方
				//startMove(this, {width:200, height:200, marginLeft: -50, marginTop: -50});
				startMove1(this, {width:385, height:389,marginTop: -10});
				//startMove(this, {width:100, height:100,marginLeft: -10});
			}
			ladya[i].onmouseout = function(){
				/*startMove(this, {width:100, height:100, marginLeft: 0, marginTop: 0});*/
				startMove1(this, {width:385, height:389,marginTop: 0});
				//startMove(this, {width:100, height:100,marginLeft: 0});
			}
		}

	}
