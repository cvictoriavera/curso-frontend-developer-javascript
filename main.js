const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu(){
    const isAsideMenuClosed = aside.classList.contains('inactive');

    if(!isAsideMenuClosed){
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideMenuClosed = aside.classList.contains('inactive');

    if(!isAsideMenuClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCartAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
        
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

