// Variables
const myCert = document.getElementById('myCert');
const certPic = document.getElementById('certPic');


// Added smooth scroll effect to sections
document.querySelector('.nav').addEventListener('click', function(e) {
    e.preventDefault();
  
      if (e.target.classList.contains('nav-link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
       console.log(id);
      }
  });

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
