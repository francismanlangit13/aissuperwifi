var body = document.getElementsByTagName('body')[0];
// Wait for the page to load
window.addEventListener('load', function() {
    // Set a timeout to fade out the loading screen after 4 seconds
    setTimeout(function(){
        var loading = document.getElementById('loading');
        loading.classList.add('fade-out');
        setTimeout(function(){
            loading.style.display = 'none';
        }, 1000);
    }, 2500);
});