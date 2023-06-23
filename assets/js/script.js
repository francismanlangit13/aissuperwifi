function doLogin() {
	document.title = "Authenticating..."; //change/set page title in JavaScript
	document.getElementById("div1").style.display = 'block';
	document.getElementById("Hotspot").style.display="none";
	document.sendin.username.value = document.login.username.value;
	document.sendin.password.value = hexMD5('$(chap-id)' + document.login.password.value + '$(chap-challenge)');
	document.sendin.submit();
	return false;
}