const default_color = "#333333";
const default_mode ="color";
const default_size = 16;

let currentColor = default_color;
let currentMode = default_mode;
let currentSize = default_size;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

const btn = document.querySelectorAll("button");

const colorPicker = document.querySelector(".color");
const colorBtn = document.querySelector(".color-mode");
const rainbowBtn = document.querySelector(".rainbow-mode");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const px16 = document.querySelectorAll("#px16");
const px32 = document.querySelectorAll("#px32");
const px64 = document.querySelectorAll("#px64");
const px128 = document.querySelectorAll("#px128");

const pixel = document.createElement("div");
const grid = document.querySelector(".grid");

const pixelBtn = document.querySelectorAll(".pixel-button");

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode("color");
rainbowBtn.onclick = () => setCurrentMode("rainbow");
eraserBtn.onclick = () => setCurrentColor("eraser");
clearBtn.onclick = () => reloadGrid();
pixelBtn.onclick = (e) => updateSizeValue(e.target.value);


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function updateSizeValue(value) {
    updateSizeValue.innerHTML = `${value} x ${value}`;
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid() {
    clearGrid.innerHTML = " ";
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("pixel");
        gridElement.addEventListener("mouseover", changeColor);
        gridElement.addEventListener("mousedown", changeColor);
        grid.appendChild(gridElement);

    }
}

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    if (currentMode === "rainbow") {
        const RandomR = Math.floor(Math.random() * 256);
        const RandomG = Math.floor(Math.random() * 256);
        const RandomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${RandomR}, ${RandomG}, ${RandomB})`;
    }
    else if (currentColor === "color") {
        e.target.style.backgroundColor = currentColor;
    }
    else if (currentMode === "eraser") {
        e.target.style.backgroundColor = "#fefefe";
    }
}

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
  }

window.onload = () => {
    setupGrid(default_size);
}
/*
px16.forEach(button => {
    button.addEventListener("click", () => {
        if (button.onclick = px16) {
            pixel.classList.add("pixel-16");
            sketch.appendChild(pixel);
            sketch.appendChild(pixel.cloneNode(true));
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
            sketch.appendChild(pixel.cloneNode(true)); 
        }
    }, {once: true});
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
}); OLD CODE*/