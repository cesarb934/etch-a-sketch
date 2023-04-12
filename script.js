let gridSize = 16;

let grid = document.getElementById('grid-container');

let sizeButton = document.getElementById('size-button');
sizeButton.addEventListener('click', changeGridSize);


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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(){
    for (let x = 0; x < gridSize; ++x) {
        let column = document.createElement('div'); // create column
        column.classList.add('column');
        for (let y = 0; y < gridSize; ++y) {
            let block = document.createElement('div'); // create row
            block.classList.add('block');
            block.addEventListener('mouseover', () => { block.style.backgroundColor = ' black' });
            column.appendChild(block); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
}

createGrid();