let gridSize = 16;
let coloringMode = 'Classic';

let grid = document.getElementById('grid-container');

let coloringModeHeader = document.getElementById('coloring-mode');

let sizeButton = document.getElementById('size-button');
sizeButton.addEventListener('click', changeGridSize);

let clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearGrid);

let classicButton = document.getElementById('classic-button');
classicButton.addEventListener('click', () => changeMode('Classic'));

let modernButton = document.getElementById('modern-button');
modernButton.addEventListener('click', () => changeMode('Modern'));

let psychodelicButton = document.getElementById('psychodelic-button');
psychodelicButton.addEventListener('click', () => changeMode('Psychodelic'));


function changeGridSize(){
    removeAllChildNodes(grid);
    let newSize = prompt('Size must be between 1 and 100');
    if (isNaN(newSize) || newSize < 1 || newSize > 100){
        alert('Invalid input');
        return;
    }else{
        gridSize = newSize;
        createGrid();
    }

}

function changeMode(mode){
    coloringMode = mode;
    coloringModeHeader.textContent = mode;

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clearGrid(){
    removeAllChildNodes(grid);
    createGrid();
}

function getRandomColor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
    return rgb;
}
function incrementBlackness(block){
    const blockOldRGB = window.getComputedStyle(block).backgroundColor;
    const rgbValue = blockOldRGB.substring(4, blockOldRGB.length-1).replace(/ /g, '').split(',')[0];
    if (rgbValue > 0){
        const rgb = `rgb(${rgbValue - 26},${rgbValue - 26},${rgbValue - 26})`;
        return rgb;
    }else{
        return blockOldRGB;
    }
}

function changeColor(block){
    if (coloringMode == 'Classic'){
        block.style.backgroundColor = 'black';
    }
    if (coloringMode == 'Modern'){
        block.style.backgroundColor = incrementBlackness(block);
    }
    if (coloringMode == 'Psychodelic'){
        block.style.backgroundColor = getRandomColor();
    }
    
}


function createGrid(){
    for (let x = 0; x < gridSize; ++x) {
        let column = document.createElement('div'); // create column
        column.classList.add('column');
        for (let y = 0; y < gridSize; ++y) {
            let block = document.createElement('div'); // create row
            block.classList.add('block');
            block.addEventListener('mouseover', () => changeColor(block));
            column.appendChild(block); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
}

createGrid();