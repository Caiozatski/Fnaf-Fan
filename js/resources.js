
let contentBox = document.querySelectorAll(".content-box");


function moveFlashlight(event){
  let boxPosition = event.currentTarget.getBoundingClientRect();
  let x = event.clientX - boxPosition.left;
  let y = event.clientY - boxPosition.top
  event.currentTarget.style.setProperty("--mouse-x", x + "px")
  event.currentTarget.style.setProperty("--mouse-y", y + "px")
}

contentBox.forEach(contentBox => {
  contentBox.addEventListener("mousemove", moveFlashlight);
});

