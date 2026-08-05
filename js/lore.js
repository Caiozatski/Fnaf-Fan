let spreads = document.querySelectorAll(".spread");

let previousPage = document.querySelectorAll(".previous-page")
let nextPages = document.querySelectorAll(".next-page")

let currentSpread = 0;

nextPages.forEach((next) =>{
  next.addEventListener("click", function(){
    if (currentSpread < spreads.length - 1){
      spreads[currentSpread].classList.add("spread-hidden");
      currentSpread += 1;
      spreads[currentSpread].classList.remove("spread-hidden")
    }
    else{
      console.log("parou")
    }
  });
  
})

previousPage.forEach((previous) => {
  previous.addEventListener("click", function(){
    if (currentSpread > 0){
      spreads[currentSpread].classList.add("spread-hidden")
      currentSpread -= 1;
      spreads[currentSpread].classList.remove("spread-hidden")
    }
    else{
      console.log("pararou")
    }
  })
})

let zoomIn = document.querySelectorAll(".page-img")

zoomIn.forEach((image) =>{
  image.addEventListener("click", function() {
    image.classList.toggle("page-img-toggle")
  })
})