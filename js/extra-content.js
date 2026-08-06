let tabButton = document.querySelectorAll(".tab");
let imageArea = document.querySelectorAll(".images-area")
currentImageArea = 0;

tabButton.forEach((button, index) => {
  button.addEventListener("click", function() {
    imageArea[currentImageArea].classList.add("hidden-images");
    tabButton[currentImageArea].classList.remove("tab-toggled")
    currentImageArea = index;
    tabButton[currentImageArea].classList.add("tab-toggled")
    imageArea[currentImageArea].classList.remove("hidden-images")
  })
})