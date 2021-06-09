const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  //direction: 'vertical',
  direction: 'horizontal',
  loop: true,
  autoplay: {
      delay: 5000, 
  }, //object
  effect: 'fade',

  // If we need pagination
  /* pagination: {
    el: '.swiper-pagination',
  }, */

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, //object

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */
});

flatpickr('.datepicker', {minDate: 'today'});

//https://github.com/cferdinandi/smooth-scroll
new SmoothScroll('a[href*="#"]');

//az 500 az kb. a slideshow vége
window.addEventListener('scroll', function(){
  //console.log(window.scrollY);
  if(window.scrollY >= 500){
    document.querySelector('header').classList.add('darken');
  } else{
    document.querySelector('header').classList.remove('darken');
  }
});

//ha let-el hozunk létre változót, annak értékét később tudjuk módosítani
//a const-al létrehozott változó értékét nem tudjuk módosítani.
let endValue = 567;
//ha számot adunk értékül az number típus
let currentValue = 0;
//ennek egy egész html tag a típusa
const counter = document.querySelector('.counter');
//boolean: két értéke lehet: true, vagy false
let alreadyPlayed = false;

//tudjuk módosítani a counter értékét.
//counter.innerText = 5;


//ez egy vizsgáló, megnézi, hogy mikor érünk oda ahhoz az elemhez
//amikor a felhasználó számára láthatóvá válik az az elem
const observer = new IntersectionObserver(function(entries){
  // isIntersecting is true when element and viewport are overlapping
  // isIntersecting is false when element and viewport don't overlap
  //!alreadyPlayed = hogy csak egyszer fusson le, ha megtalálta, utána már ne, vagy úgy is megadhatnánk, hogy alreadyPlayed != true
  if(entries[0].isIntersecting === true && !alreadyPlayed) { 
    console.log('Most lett látható az elem');
    alreadyPlayed = true;
    const timer = setInterval(function(){
      //ha eléri az endValue értékét, akkor álljon meg
      if(currentValue >= endValue) {
        clearInterval(timer);
      }
      counter.innerText = currentValue;
      //megnöveljük a változó értékét 1-el, tehát currentValue = currentValue + 1;
      currentValue++;
    }, 2);
  } 
});

//az observer kezdje el vizsgálni a countert
observer.observe(counter);

