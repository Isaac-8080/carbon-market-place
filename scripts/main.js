
document.addEventListener('scroll', () => {

  const getNavbar = document.querySelector('#navbar');

  if (window.scrollY > 5) {

    getNavbar.classList.remove('nav-on-scroll');

    getNavbar.classList.add('bg-[#FFFFFF]');

    getNavbar.classList.remove('text-[#FFFFFF]');

    getNavbar.classList.add('text-[#000000]');
    
    
  } else {
    
    getNavbar.classList.remove('bg-[#FFFFFF]');
    
    getNavbar.classList.add('nav-on-scroll');
   
    getNavbar.classList.add('text-[#FFFFFF]');

    getNavbar.classList.remove('text-[#000000]');
    
  }

});

// navbar status
let getNavbarStatus = false;
// targets the menu icon
let getToggleNavIcon = document.querySelector('#toggleNavIcon');

// event listener which toggles navigation menu on small screens
getToggleNavIcon.addEventListener('click', () => {

  let getSmNavbar = document.querySelector('.sm-navbar');
  
  let getNavbarUl = document.querySelector('.sm-navbar ul');

  if (getNavbarStatus === false) {

    getSmNavbar.style.width = '80%';
    
    getNavbarUl.style.visibility = 'visible';

    getNavbarStatus = true;

  } else if (getNavbarStatus === true) {

    getSmNavbar.style.width = '0';

    getNavbarUl.style.visibility = 'hidden';

    getNavbarStatus = false;

  };

});

// targets empty space when nav menu is opened
let getExitNavMenu = document.querySelector('#exit-nav');

// event listener which closes navigation menu on small screens
getExitNavMenu.addEventListener('click', () => {

  let getSmNavbar = document.querySelector('.sm-navbar');

  let getNavbarUl = document.querySelector('.sm-navbar ul');

  if (getNavbarStatus === true) {

    getSmNavbar.style.width = '0';

    getNavbarUl.style.visibility = 'hidden';

    getNavbarStatus = false;

  };

});