let sketchContainer = document.querySelector(".sketch-div");
const sketchPixels = document.querySelector(".pixel-button");

function howManyPixels(pixels) {
    pixels = sketchPixels;
    sketchContainer = pixels * pixels;
    return sketchContainer;
}

console.log(howManyPixels());