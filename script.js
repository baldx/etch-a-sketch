let sketchContainer = document.querySelector(".sketch-div");
const btn = document.querySelectorAll("button");

const pixel = document.createElement("div");
const sketch = document.querySelector(".sketch-div");
const pixelBtn = document.querySelectorAll(".pixel-button");

const px16 = document.querySelectorAll("#px16");
const px32 = document.querySelectorAll("#px32");
const px64 = document.querySelectorAll("#px64");
const px128 = document.querySelectorAll("#px128");




px16.forEach(button => {
    button.addEventListener("click", () => {
        if (button.onclick = px16) {
            console.log("16");
        }
    });
});

px32.forEach(button => {
    button.addEventListener("click", () => {
        if (button.onclick = px32) {
            console.log("32");
        }
    });
});

px64.forEach(button => {
    button.addEventListener("click", () => {
        if (button.onclick = px64) {
            console.log("64");
        }
    });
});

px128.forEach(button => {
    button.addEventListener("click", () => {
        if (button.onclick = px128) {
            console.log("128");
        }
    });
});