"use strict";
function disableImg(imgName) {
    document.getElementById(imgName).style.visibility = "hidden";
    console.log(imgName);
}
function changeColor() {
    let input = document.getElementById('colorInput');
    let color = input.value;
    let square = document.getElementById('colorSquare');
    square.style.backgroundColor = color;
}
