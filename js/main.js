const nav = document.getElementById('nav');//SEARCH THE NAV
const loginBtn = document.getElementById('login-btn');//SEARH THE LOGINBTN 
const loginBtnMobile = document.querySelector('.login-btn-mobile');//SEARCH THE LOGINBTNMOBILE 
const navList = document.querySelector('.nav-list');//SEARCH THE NAVLIST ELEMENT
const openNav = document.querySelector('.open-nav');//SEARCHTHE OPEN-NAVBTN
const closeNav = document.querySelector('.close-nav');//search the close navBtn

//THE SCROLL EVENT TO NAV BACKGROUND
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 500){
        nav.classList.add('nav-background');
    }else if (scrolled < 500){
        nav.classList.remove('nav-background');
    }
});

//LOGIN BTNS EVENTS
loginBtn.addEventListener('click', () => {
    alert('NOT YET :(');
});
loginBtnMobile.addEventListener('click', () => {
    alert('NOT YET :(');
});
//OPEN NAV IN MOBILE SIZES
openNav.addEventListener('click', () => {
    navList.classList.add('nav-visible');
})
//CLOSE NAV
closeNav.addEventListener('click', () => {
    navList.classList.remove('nav-visible');
})

