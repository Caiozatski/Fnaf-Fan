let homeContent = document.querySelector(".home-main-content");

//Light door button function

function turnLights(){
  homeContent.classList.toggle("lights-on");
  lightButton.classList.toggle("light-panel-on")
  if (lightButton.classList.contains("light-panel-on")){
    lightSound.play()
  } else{
    lightSound.pause()
  }

}

let lightButton = document.querySelector(".light-button");
lightButton.addEventListener("click", turnLights);
let lightSound = new Audio("/FnafFan/assets/sounds/lights.wav")

// Door close/open button functions

function doorClose(){
  doorButton.classList.toggle("door-panel-on");
  doorImage.classList.toggle("door-close");
  doorSound.currentTime = 0;
  doorSound.play()
}

let doorImage = document.querySelector(".door-image");

let doorButton = document.querySelector(".door-button");
doorButton.addEventListener("click", doorClose)
let doorSound = new Audio("/FnafFan/assets/sounds/door.wav")