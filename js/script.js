//Light door button

function turnLights(){
  homeContent.classList.toggle("lights-on");
  lightButton.classList.toggle("light-panel-on")
}

function doorClose(){
  doorButton.classList.toggle("door-panel-on");
  doorImage.classList.toggle("door-close");
}

let doorImage = document.querySelector(".door-image");

let homeContent = document.querySelector(".home-main-content");

let lightButton = document.querySelector(".light-button");
lightButton.addEventListener("click", turnLights);


let doorButton = document.querySelector(".door-button");
doorButton.addEventListener("click", doorClose)