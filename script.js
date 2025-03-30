//console.log( " Voici le score :",tableScore)
//console.log( " Voici le chiffre :",button)

let scoreOne = document.getElementById("scoreScreenOne");
let scoreTwo = document.getElementById("scoreScreenTwo");
let countHome = 0;
let countGuest = 0

function addScoreOneHome() {
  countHome += 1;
  scoreOne.innerText = countHome;
}
function addScoreTwoHome() {
  countHome += 2;
  scoreOne.innerText = countHome;
}
function addScoreThreeHome() {
  countHome += 3;
  scoreOne.innerText = countHome;
}

function addScoreOneGuest() {
  countGuest += 1;
  scoreTwo.innerText = countGuest;
}
function addScoreTwoGuest() {
  countGuest += 2;
  scoreTwo.innerText = countGuest;
}
function addScoreThreeGuest() {
  countGuest += 3;
  scoreTwo.innerText = countGuest;
}

