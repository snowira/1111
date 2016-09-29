function GetRequest()  
{ 
	var url = location.search;
	var theRequest = -1;
	if (url.indexOf("?") != -1) {
	    var str = url.substr(1);
	    strs = str.split("&");
	    for (var i = 0; i < strs.length; i++) {
	        if(strs[i].split("=")[0]=="ag_kwid")
			if(strs[i].split("=").length>1){
				theRequest=strs[i].split("=")[1];
			}else{
				theRequest="";
			}
	    }
	}
	else {
	    theRequest = -1;
	}
	return theRequest;  
}
function ag_isIE7(){
	var result=false;
	if(navigator.userAgent.indexOf("MSIE 7.0")!=-1){
		result=true;
	}
	return result;
}
function ag_isIE6(){
	var result=false;
	if(navigator.userAgent.indexOf("MSIE 6.0")!=-1){
		result=true;
	}
	return result;
}
function ag_getReferrer() {
    var referrer = '';
 
    try {
        referrer = window.top.document.referrer;
    } catch(e) {
        if(window.parent) {
            try {
                referrer = window.parent.document.referrer;
            } catch(e2) {
                referrer = '';
            }
        }
    }
    if(referrer === '') {
        referrer = document.referrer;
    }
    return referrer;
}
function SetCookie(value)
{
	var name = "ag_count";
    var expires = 365;
    var path = "";
    var secure = false;
    var today = new Date();
	var domain=".xiu.com";
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + "=" + escape(value) +
	((expires) ? ";expires=" + expires_date.toGMTString() : "") +
	((path) ? ";path=" + path : "")  +
	((domain) ? ";domain=" + domain : "") +
	((secure) ? ";secure" : "");
}

(function ag_firstsem_send(){
	var Request=new Object();  
	Request=GetRequest(); 
	if(Request!=-1)
	{
		var url=escape(ag_getReferrer());
		var query="eid=1";
		query = query + "&"+ "cus=224";
		query = query + "&"+ "p=" + Request;
		query = query + "&"+ "p2="+ url;
		var ele = document.createElement("IFRAME");
		ele.style.display = 'none';
		ele.src = 'about:blank';
		if(document.location.protocol =="https:"){
		ele.setAttribute("src", "https://t.agrantsem.com/tt.aspx?" + query);
		}else{
			ele.setAttribute("src", "http://t.agrantsem.com/tt.aspx?" + query);
		}
	
		if(ag_isIE6() || ag_isIE7()){
			if (document.readyState=="complete"){
				document.body.appendChild(ele);
			}else{
				document.onreadystatechange=function(){
					if(document.readyState=="complete"){
						document.body.appendChild(ele);
					}
				};
			} 
		}else{
			document.body.appendChild(ele);
		}
	}
})();
var Request=new Object();  
Request=GetRequest();  
if(Request!=-1)
{
    SetCookie(1);
}
else
	{
		var Cookie_name = "ag_count";
		var ag_count = "";
		var cookieString = new String(document.cookie);
		var cookieHeader = Cookie_name + "=";
		var beginPosition = cookieString.indexOf(cookieHeader);
		if (beginPosition != -1) 
	    {
		    var results = document.cookie.match('(^|;) ?' + Cookie_name + '=([^;]*)(;|$)');
		    if (results)
		        ag_count = unescape(results[2]);
		    var ag = ag_count * 1 + 1;
		    SetCookie(ag);
		    if (ag == 2) 
		    {
		        var query = "";
		        query = query + "cus" + "=224";
		        query = query + "&eid" + "=2";
		        query = query + "&p1" + "=" + ag;
		        query = query + "&p2" + "=" + location;
				var a = document.createElement("img");
				a.setAttribute("width","0");
				a.setAttribute("height","0");
				if(window.location.href.indexOf("https")==0){
					a.setAttribute("src", "https://t.agrantsem.com/tt.aspx?" + query);
				}else{
					a.setAttribute("src", "http://t.agrantsem.com/tt.aspx?" + query);
				}
		        document.body.appendChild(a);

		    }
		}
	}