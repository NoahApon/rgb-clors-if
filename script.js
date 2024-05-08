// RGB Colors

let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
let whiteEl = document.getElementById("White");
let blackEl = document.getElementById("Black");
let widthEl = document.getElementById("width");
let heightEl = document.getElementById("height");

redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
blackEl.addEventListener("click", blackBtn);
whiteEl.addEventListener("click", whiteBtn);
widthEl.addEventListener("input", size);
heightEl.addEventListener("input", size);

function blackBtn() {
displayEl.style.backgroundColor = "black"
}

function whiteBtn() {
displayEl.style.backgroundColor = "white"
}

function size () {
    let widthNumber = +widthEl.value;
    let heightNumber = +heightEl.value;
    let width = widthNumber + "px";
    let height = heightNumber + "px";

    if (widthNumber < 20) {
        widthNumber = 20;
        widthEl.value = 20;
    } else if (widthNumber > 500) {
        widthNumber = 500;
        widthEl.value = 500;
    }

    if (heightNumber < 20) {
        heightNumber = 20;
        heightEl.value = 20;
    } else if (heightNumber > 500) {
        heightNumber = 500;
        heightEl.value = 500;
    }



    displayEl.style.width = width;
    displayEl.style.height = height;
}

function rgbPreview() {
    let rValue = +redInEl.value;
    let gValue = +greenInEl.value;
    let bValue = +blueInEl.value;

    if (rValue < 0) {
        rValue = 0;
        redInEl.value = 0;
    } else if (rValue > 255) {
        rValue = 255;
        redInEl.value = 255;
    }

    if (gValue < 0) {
        gValue = 0;
        greenInEl.value = 0;
    } else if (gValue > 255) {
        gValue = 255;
        greenInEl.value = 255;
    }

    if (bValue < 0) {
        bValue = 0;
        blueInEl.value = 0;
    } else if (gValue > 255) {
        bValue = 255;
        blueInEl.value = 255;
    }

    let rgbString = "rgb(" + rValue + "," + gValue + "," + bValue + ")";
    rgbStringOutEl.innerHTML = rgbString;
    displayEl.style.background = rgbString;
}
