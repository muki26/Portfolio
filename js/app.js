const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul ');
const mobileItem = document.querySelectorAll('.header .nav-bar .nav-list ul a');
var header = document.getElementById('header');


//hamburger active
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 130) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

mobileItem.forEach((item) => {
    item.addEventListener('click',() =>{
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

    });
});


//resume download



