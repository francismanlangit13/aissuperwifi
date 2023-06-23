const togglePassword = 
    document.querySelector('#togglePassword'); 
    const password = document.querySelector('#id_password');
  
togglePassword.addEventListener('click', function (e) {
  
	// Toggle the type attribute
	const type = password.getAttribute(
	'type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
  
    // Toggle the eye slash icon
    if (togglePassword.src.match("assets/images/eye-close.png")) {
        togglePassword.src ="assets/images/eye-open.png";
        } else {
            togglePassword.src ="assets/images/eye-close.png";
        }
});