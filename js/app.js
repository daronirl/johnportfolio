// Variables
const myCert = document.getElementById('myCert');
const certPic = document.getElementById('certPic');


// function to click to view certificate
myCert.addEventListener('click', () => {
    if (myCert.style.display = 'none') {
        certPic.style.display = 'block';
    } else {
        myCert.style.display = 'none';
    }
}) 

// jQuery plugin for animations
let wow = new WOW(
    {
    boxClass:     'wow', 
    animateClass: 'animated',
    offset:       100
    }
    );
    wow.init();
