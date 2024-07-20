function handleClick(){
    window.location.href = "index.html"
}

function register(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdCXSJTCqI_P3n4Ut3NcNi8snPAxrh24yfITV0bpZR-G6leiw/viewform"
}

let sidebar = document.getElementById('bar');
let resizeTimeout;
let initialWidth = window.innerWidth;
let initialHeight = window.innerHeight;

window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Handle resize event here
        let currentWidth = window.innerWidth;
        let currentHeight = window.innerHeight;
        if (currentWidth === initialWidth && currentHeight === initialHeight) {
            console.log('Window has returned to its original size (unresized).');
            sidebar.style.width = '350px';
            sidebar.classList.add('sticky')
            // Perform actions for unresize event here
        }
        else{
            console.log('Window has been resized!');
            sidebar.style.width = '70vw';
            sidebar.classList.remove('sticky')
        }
    }, 0); // Adjust debounce delay as needed (in milliseconds)
});

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    console.log('User is on a mobile device');
    sidebar.style.width = '70vw';
    sidebar.classList.remove('sticky')
} else {
    console.log('User is not on a mobile device');

}