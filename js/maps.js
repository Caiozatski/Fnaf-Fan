let cameraButton = document.querySelectorAll(".camera-btn");
let glitchChange = document.querySelector(".glitch-cam");
let currentCamera;

cameraButton.forEach(event => {
    event.addEventListener("click", function() {

        camera = event.classList[1];

        glitchChange.classList.add("hidden");

        if (currentCamera) {
            currentCamera.classList.add("hidden");
        }

        const imageSelected = document.querySelector(`.${camera}`);
        imageSelected.classList.remove("hidden");

        currentCamera = imageSelected;

        console.log(camera);
    });
});