

const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-button");
const listItems = document.getElementById("list-items");
const nameBox = document.getElementById("name-box");
let button = document.createElement("button");
let name = nameBox.value;

addButton.addEventListener("click", addTask);
function addTask() {
  if(inputBox.value === '' || nameBox.value === '') {
    let warning = document.querySelector (".popup")
    warning.style.display = "block";
  
    setTimeout(() => {
      warning.style.display = "none"
    }, 2500);

    // alert("The both boxes must be filled..!!")
  }

  // else { 
  //   let div = document.createElement(div);
  //   li.innerHTML = inputBox.value;
  //   div.appendChild (li);
  //   div.classList (line);
  //   listItems.appendChild(li);
  // }
  inputBox.value = '';

}

nameBtn.addEventListener("click", showPlayBtn);
let listline = document.querySelector(".listline")
function showPlayBtn(){
  let name = nameBox.value
  button.innerHTML = name;
  listItems.appendChild(listline)
}

// Nav slide section
var Airdrops = document.querySelector(".Airdrops")
var Testnets = document.querySelector(".Testnets")

var gameForm = document.querySelector(".gameForm");
var airdropForm = document.querySelector(".airdropForm");
var testnetForm = document.querySelector(".testnetForm");

var AirdropsSlide = document.querySelector(".AirdropsSlide");
var TestnetsSlide = document.querySelector(".TestnetsSlide");


var games = document.querySelector("#games")
games.addEventListener("click", togame);
var gamesSlide = document.querySelector(".gamesSlide");
function togame() {
  alert("game")
}







games.addEventListener("click", showGames);
function showGames() {
  gamesSlide.style.display = "block";
  gameForm.style.display = "block";
  AirdropsSlide.style.display = "none";
  airdropForm.style.display = "none";
  TestnetsSlide.style.display = "none";
  testnetForm.style.display = "none";
}

Airdrops.addEventListener("click", showAirdrops);
function showAirdrops() {
  AirdropsSlide.style.display = "block";
  // airdropForm.style.display = "block";
  
  gamesSlide.style.display = "none";
  gameForm.style.display = "none";
  TestnetsSlide.style.display = "none";
  testnetForm.style.display = "none";
}






// Airdrops.addEventListener("click", toAirdrops);
// function toAirdrops() {

// }

Testnets.addEventListener("click", toTestnets);
function toTestnets() {
  TestnetsSlide.style.display = "block";
  testnetForm.style.display = "block";
  AirdropsSlide.style.display = "none";
  airdropForm.style.display = "none";
  gamesSlide.style.display = "none";
  gameForm.style.display = "none";
}