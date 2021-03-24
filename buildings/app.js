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