let grid = document.getElementById('grid-container');


let columns=16;
let rows = 16;


for (let x = 0; x < columns; ++x) {
    let column = document.createElement('div'); // create column
    column.classList.add('column');
    for (let y = 0; y < rows; ++y) {
        let row = document.createElement('div'); // create row
        row.classList.add('row' , 'block');
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
document.body.appendChild(grid);