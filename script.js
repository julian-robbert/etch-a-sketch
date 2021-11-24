let gridContainer = document.getElementById('gridContainer');

//fills grid with appropriate amount of divs that can be hovered to change colour
function makeSquares(gridSize){
    for (i=0;i<gridSize*gridSize;i++){
        let drawSquare = document.createElement('div');
        drawSquare.classList.add('drawSquare');
        function colorChange(item){
            item.style.backgroundColor = '#424242';
        }
        function whiteToBlack(){
            colorChange(drawSquare);
        }
        drawSquare.addEventListener("mouseover", whiteToBlack);
        gridContainer.append(drawSquare);
    }
}

//defines the standard 16x16 grid and then calls it when the page loads
function defaultGrid(){
    gridSize = 16;
    let r = document.querySelector(':root');
    r.style.setProperty('--rows', gridSize);
    r.style.setProperty('--columns', gridSize);
    makeSquares(gridSize);
}

defaultGrid();

//prompts user for new grid size then changes grid accordingly
function promptGridSize(){
    gridContainer.innerHTML = "";
    gridSize = prompt("Please provide a grid size between 1 and 100");
    while (gridSize > 100){
        alert("Number too high, try again");
        gridSize = prompt("Please provide a grid size between 1 and 100");
    }
    let r = document.querySelector(':root');
    r.style.setProperty('--rows', gridSize);
    r.style.setProperty('--columns', gridSize);
    console.log(gridSize);

    makeSquares(gridSize);
}

//clears the drawing while preserving current grid size
function clearDrawing(){
    gridContainer.innerHTML = "";
    makeSquares(gridSize);
}

//clears drawing and sets grid back to default size
function resetGrid(){
    gridContainer.innerHTML = "";
    defaultGrid();
}