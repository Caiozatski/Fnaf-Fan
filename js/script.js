//Light door button

function turnLights(){
  console.log("acendeu");
  homeContent.classList.toggle("lights-on");
  lightButton.classList.toggle("light-panel-on")
}

let lightButton = document.querySelector(".light-button");
  let homeContent = document.querySelector(".home-main-content");
  lightButton.addEventListener("click", turnLights);
