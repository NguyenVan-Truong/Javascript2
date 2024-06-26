
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo= document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth

  );

  window.scrollTo(s1coords.left, s1coords.top);

  // window.scrollTo({
  //   left : s1coords.left + window.pageXOffset,
  //   top : s1coords.top + window.pageYOffset,
  //   behavior : 'smooth',
  // })

    section1.scrollIntoView({behavior : 'smooth'});

});


const ramdomInt = (min , max) =>
  Math.floor(Math.random()* (max - min + 1) +min);
  const randomColor = () =>
  `rgb(${ramdomInt(0,225)},${ramdomInt(0,225)},${ramdomInt(0,225)})`;

  document.querySelector('.nav_link').addEventListener('click',function(e){
      this.style.backgroundColor = randomColor();
      console.log('LINK', e.target, e.currentTarget);
      console.log(e.currentTarget === this)

      // e.stopPropagation();
  });

  document.querySelector('nav_links').addEventListener('click' , function(e){
      this.style.backgroundColor = randomColor();
      console.log('CONTAINER', e.target , e.currentTarget);
    });
  
  document.querySelector('.nav').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target,e.currentTarget);
  })   
  

  document.querySelectorAll('.nav_link').forEach(function(el){
    el.addEventListener('click',function(e){
      e.preventDefault();
      const id = this.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  document.querySelector('.nav_links').addEventListener('click',function(e){
    e.preventDefault();
     if( e.target.classList.contains('nav_link')){
      const id = e.target.getAttribute('href');
      
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
     }
      
    });



