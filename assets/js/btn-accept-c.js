const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = ()=>{
	//setting cookie for day, after one day it'll be expired automatically
	document.cookie = "CookieBy=AIS_SuperWIFI; max-age=86400";
	if(document.cookie){ //if cookie is set
		cookieBox.classList.add("hide"); //hide cookie box
	} else{ //if cookie not set then alert an error
		alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
	}
}
let checkCookie = document.cookie.indexOf("CookieBy=AIS_SuperWIFI"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");