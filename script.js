let sketchContainer = document.querySelector(".sketch-div");
const btn = document.querySelectorAll("button");

const pixel = document.createElement("div");
const sketch = document.querySelector(".sketch-div");
const pixelBtn = document.querySelectorAll(".pixel-button");

const px16 = document.querySelector("#px16");
const px32 = document.querySelector("#px32");
const px64 = document.querySelector("#px64");
const px128 = document.querySelector("#px128");

pixelBtn.forEach(button => {
    button.addEventListener("click", () => {
        pixel.classList.add("pixel");
        sketch.appendChild(pixel); 
    });
});


