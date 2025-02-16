






const nameDiv = document.getElementById("nameDiv");
let profile = document.getElementById("profile-div");

let profilePic = document.getElementById("blank");
let typename = document.getElementById("typename");
let writeName = document.getElementById("writeName");
let saveName = document.getElementById("saveName");
// let body = document.getElementById("container");

profile.addEventListener("click", editProfile);
function editProfile() {
  nameDiv.style.display = "block";
}


saveName.addEventListener("click", updateProfile);
function updateProfile() {
  if(typename.value === ""){
    alert("Name can`t be blank!")
  }
  else {
    userName.innerHTML = typename.value; //updates the username 
    typename.value = ""; //clears the name input box
    nameDiv.style.display = "none";
    let warning = document.getElementById("popup")
    warning.innerHTML = "Profile saved successfully";
    warning.style.display = "block";
  
    setTimeout(() => {
      warning.style.display = "none"
    }, 2500);
  }
}


// let inputFile = document.getElementById("writeName");

// inputFile.onclick() = function(){
//   profilePic.src = URL.createObjectURL(inputFile.files[0])
// };


const linkInput = document.getElementById("input-box");
const nameInput = document.getElementById("name-box");
const addBtn = document.getElementById("addBtn");
const listItem = document.getElementById("items");
let listcontainer = document.getElementById("listcontainer");
const link = document.getElementById("link");
const projectName = document.getElementById("projectName");
let userName = document.getElementById("userName");




let addTask = (e) => {
  e.preventDefault();


  if(linkInput.value === '' || nameInput.value === '') {
    let warning = document.getElementById("popup")
    warning.style.display = "block";
    warning.innerHTML = "Both fields are required.!"
  
    setTimeout(() => {
      warning.style.display = "none"
    }, 2500);

  }

  else {


    // link.innerHTML = linkInput.value;
    // projectName.innerHTML = `
    //   <button href="${linkInput.value}" class="nameBtn btn1" id="projectName">Play</button>
    // `

    listItem.innerHTML += `
    <div class="line line1"  id="line">
      <li class="list" id="link">${nameInput.value}</li>
      <a href="${linkInput.value}" class="nameBtn btn1" id="projectName"><button>Play</button></a>      
    </div>`;

    nameInput.value = "";
    linkInput.value = "";
    
    listItem.style.display = "flex";
    listItem.style.flexDirection = "column";
    projectName.innerHTML = nameInput.value;
    
    // acceptData()

  }
  saveData()
}

projectName.addEventListener("click", openLink );

function openLink() {
  if (linkInput) { //Checks if the link is empty
    window.open(link, '_blank');
  }
}

addBtn.addEventListener("click", addTask);

// const link = document.getElementById("link").innerHTML = linkInput.value;
// var projectName = document.getElementById("projectName");


function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML)
}
function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

