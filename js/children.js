let buttonClick = document.querySelectorAll(".hidden-btn")
function buttonActive(event){
  event.currentTarget.closest(".office-area").classList.toggle("button-activated")
}


buttonClick.forEach((button) => {
  button.closest(".office-area")
  button.addEventListener("click", buttonActive);
})