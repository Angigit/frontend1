//először deklaráljuk a változókat
let activePlayer, roundScore, scores;

function init() {
  // első játékos kezd mindig
  activePlayer = 0;
  //adott kör alatt megszerzett pont
  roundScore = 0; 

  // mindkét játékosnak beállítjuk nullára a kezdőpontszámát
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;

  // array: több változót tárol egy darab típusban
  // tömbbe lehet rakni tömböt is, vagy más típusút is
  // a scores tömb nulladik eleme az első játékos pontszámait jelenti
  // a második elem pedig a másik játékos pontszámait
  scores = [0, 0];

  // és a jelenlegi pontszámokat is lenullázzuk
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;

  // hogy kezdetben ne látszódjon a kocka
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".btn-roll").style.display = "block";
  document.querySelector(".btn-hold").style.display = "block";

  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  // első játékos kezd
  document.querySelector(".player-0-panel").classList.add("active");
}

init();

// mi történik akkor ha vki rákatttint a roll-dice gombra
document.querySelector(".btn-roll").addEventListener("click", function () {
  
  // 1. generálunk egy random számot 1-6 között
  let dice = Math.floor(Math.random() * 6) + 1;

  // 2. jelenítsük meg az eredményt (a dobott értéket)
  let diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.setAttribute("src", "dice-" + dice + ".png");

  // 3. ha a dobott érték nem 1
  if (dice !== 1) {
    // akkor a dobott értéket adjuk hozzá a round score változóhoz
    roundScore = roundScore + dice;
    // és az eredményt jelenítsük meg a képernyőn
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    // ha a játékos 1-est dob, akkor a következő játékos jön
    nextPlayer();
  }
});

//DRY = DO NOT REPEAT YOURSELF!
//így ezt a függvényt már többször is meghívhatjuk
function nextPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  roundScore = 0;
  //nullázzuk a current táblákat
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;

  //toggle = ha rajta volt, akkor leveszi, ha nem volt rajta, akkor rárakja
  //egyikről a másikra átkerül, úgy hogy az egyikről leveszi, és rárakja a másikra
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-hold").addEventListener("click", function () {
  // 1. a játékos megszerzi a kör alatt szerzett pontjait
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // 2. az eredményt frissítjük a UI-nak
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  // 3. nézzük meg, hogy van-e nyertes
  if (scores[activePlayer] >= 20) {
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".btn-hold").style.display = "none";
    document.querySelector(".btn-roll").style.display = "none";
  } else {
    nextPlayer();
  }
});

document.querySelector('.btn-new').addEventListener('click', init);


//függvény deklarálás
// function sayHello() {
//   window.alert('Hello player!');
// }

//függvény meghívása
//sayHello();

// a és b  a függvény bemeneti paraméterei
function addTwoNumbers(a, b) {
  const eredmeny = a + b;
  // a függvény visszaadja az eredmény változó értékét
  return eredmeny;
}

const eredmeny = addTwoNumbers(3, 4);
console.log(eredmeny);

// függvényen belül, meg függvényen kívül az teljesen más