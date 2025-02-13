

const linkInput = document.getElementById("input-box");
const nameInput = document.getElementById("name-box");
const addBtn = document.getElementById("addBtn");
const listItem = document.getElementById("items");
let listcontainer = document.getElementById("listcontainer");


let addTask = () => {


  if(linkInput.value === '' || nameInput.value === '') {
    let warning = document.getElementById("popup")
    warning.style.display = "block";
  
    setTimeout(() => {
      warning.style.display = "none"
    }, 2500);

  }

  else {
    
    listItem.innerHTML += `
    
    <div class="line line1"  id="line">
      <li class="list" id="link">List 1</li>
      <button class="nameBtn btn1" id="projectName">Play</button>
    </div>
    
    `;
    listItem.style.display = "flex";
    listItem.style.flexDirection = "column";
    projectName.innerHTML = nameInput.value;
    acceptData()

  }
  saveData()
}

addBtn.addEventListener("click", addTask);

const link = document.getElementById("link").innerHTML = linkInput.value;
var projectName = document.getElementById("projectName");


function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML)
}
function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

