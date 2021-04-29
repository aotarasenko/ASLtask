const burgerMenu = document.querySelector('.menu__burger');
const navList = document.querySelector('.nav__list');
const navMain = document.querySelector('.nav__main');
const logoText = document.querySelector('.logo__text');
const header = document.querySelector('.header__main');
const slide = document.querySelector('.slide');
const sliderDots = document.querySelectorAll('.dot');
const arrowLeft = document.querySelector('.arrow__left'),
      arrowRight = document.querySelector('.arrow__right');

const sources = ['0.jpeg', '1.jpeg', '2.jpeg', '3.jpeg'];

let slideIndex = 0;

function changeSlide(index) {
    console.log(index);
    slide.style.backgroundImage = `url('../images/${index}.jpeg')`;
    for (let i = 0; i < sliderDots.length; i++) {
        if (i === index) {
            sliderDots[i].classList.add('active');
        }else{
            sliderDots[i].classList.remove('active');
        }
        
    }

}

setInterval(() => {
    if(slideIndex == sources.length){
        slideIndex = 0;
    }
    changeSlide(slideIndex++);
}, 3000);

arrowLeft.addEventListener('click', (Event) => {
    if(slideIndex == 0){
        slideIndex = sources.length;
    }
    changeSlide(slideIndex--);
});
arrowRight.addEventListener('click', (Event) => {
    if(slideIndex == sources.length){
        slideIndex = 0;
    }
    changeSlide(slideIndex++);
});

burgerMenu.addEventListener('click', (Event) => {
    navList.classList.toggle('visible');
});

window.addEventListener('scroll', (Event) => {
    if(window.pageYOffset > 0 && window.innerWidth <= 768){
        header.style.backgroundColor = 'rgba(80,80,80,1)';
        header.style.transition = '1s all ease';
        logoText.style.color = '#fff';
    }else if(window.pageXOffset < 30){
        header.style.backgroundColor = 'rgba(0,0,0,0)';
        header.style.opasity = 0;
        header.style.transition = '1s all ease';
        logoText.style.color = '#666666';
    }
});