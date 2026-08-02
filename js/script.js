function openMenu(){
  headerContent.classList.toggle("menu-open");
}

let menuButton = document.querySelector(".menu-button");
let headerContent = document.querySelector(".header-content");

menuButton.addEventListener("click", openMenu);