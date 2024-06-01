// const tabs = document.querySelectorAll('.operations__tab ');
// const tabsContainer = document.querySelectorAll('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// tabsContainer.addEventListener ('click',function(e){
//   const clicked = e.target.closest('.operations__tab');
//   console.log(clicked);

//   if(!clicked)return;
//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   tabsContent.forEach(c => c.classList.remove('operations__tab--active'))
//   clicked.classList.add('operations__tab--active');
//   document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
// });

// nav.addEventListener('mouseover',handleHover.blind(0.5));
// nav.addEventListener('mouseout',handleHover.blind(1));

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll',function(){
//   console.log(window.scrollY);
//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky')
// })

const imgObserver = new IntersectionObserver(loadImg,{
  root : null,
  threshold :0,
  rootMargin:'200px',
})

imgTargets.forEach(imgObserver.observe(img));
const slidesconst= slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

// slides.forEach((s,i)=>(s.style.transform=`translateX(${100*i}%)`));

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}
goToSlide = 0;

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide)
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
}


btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
