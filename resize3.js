let home = document.getElementById('home');

let resizeTimeout;
let initialWidth = window.innerWidth;
let initialHeight = window.innerHeight;
const maxWidth = 1280;


window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Handle resize event here
        let currentWidth = window.innerWidth;
        let currentHeight = window.innerHeight;
        
            if (currentWidth === initialWidth && currentHeight === initialHeight) {
                if (initialWidth < maxWidth) {
                    // Perform actions when the window width is less than maxWidth
                    console.log('Window width is less than 1280 pixels.');
                    // Example: Changing sidebar width
                    
                    home.style.width = '50px';
                    home.style.height = '100%';
                    
                }
                else if (initialWidth >= maxWidth){
                    
                    console.log('Window has returned to its original size (unresized).');
                    home.style.width = '5%';
                    home.style.height = '5%';
                   
                    // Perform actions for unresize event here
                }
            }
            else{
                console.log('Window has been resized!');
                home.style.width = '50px';
                home.style.height = '100%';
                
            }
        
        
    }, 0); // Adjust debounce delay as needed (in milliseconds)
});

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    console.log('User is on a mobile device');
    home.style.width = '50px';
    home.style.height = '100%';
    
} else {
    console.log('User is not on a mobile device');
    if (initialWidth < maxWidth) {
        // Perform actions when the window width is less than maxWidth
        console.log('Window width is less than 1280 pixels.');
        // Example: Changing sidebar width
        
        home.style.width = '50px';
        home.style.height = '100%';
        
    }
}