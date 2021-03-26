//ha a menu-button-re rákattintunk...
document.querySelector('.menu-button').addEventListener('click', function () {
  console.log('you clicked the menu button!');
  //css class-t kapnak bizonyos elemek
  document.querySelector('body').classList.add('js-menu-open');
  document.querySelector('.menu-button').classList.add('js-hidden');
  document.querySelector('header .main-menu').classList.add('js-show');
  document.querySelector('.close-menu').classList.remove('js-hidden');
});

//ha a menu bezárást megnyomjuk...
document.querySelector('.close-menu').addEventListener('click', function () {
  console.log('you closed the menu!');
  //css class-t kapnak bizonyos elemek
  document.querySelector('body').classList.remove('js-menu-open');
  document.querySelector('.menu-button').classList.remove('js-hidden');
  document.querySelector('header .main-menu').classList.remove('js-show');
  document.querySelector('.close-menu').classList.add('js-hidden');
});

//minden esetben, amikor a user átméretezi a böngésző ablakot, lefut ez a kód
window.addEventListener('resize', function () {
  //megvizsgáljuk hogy a body-n rajta van-e a js-menu-open class
  if (document.querySelector('body').classList.contains('js-menu-open')) {
    //ez vagy igaz, vagy hamis értéket ad vissza
    //ha nyitva van a menu, akkor megnézzük h a böngésző szélessége mekkora:
    if (window.innerWidth >= 650) {
      //ha 650px felett van a böngésző szélessége, akkor a js rákattint a menü bezárására
      document.querySelector('.close-menu').click();
    }
  }
});