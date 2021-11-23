let gridContainer = document.getElementById('gridContainer');

let gridSize = 16;
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

    for (i=0;i<gridSize*gridSize;i++){
        let drawSquare = document.createElement('div');
        drawSquare.classList.add('drawSquare');
        //drawSquare.style.border = '1px solid black';
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

function clear(){
    gridContainer.innerHTML = "";
    for (i=0;i<gridSize*gridSize;i++){
        let drawSquare = document.createElement('div');
        drawSquare.classList.add('drawSquare');
        //drawSquare.style.border = '1px solid black';
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

function resetGrid(){
    gridContainer.innerHTML = "";
    defaultGrid();
}


function defaultGrid(){
    gridSize = 16;
    let r = document.querySelector(':root');
    r.style.setProperty('--rows', gridSize);
    r.style.setProperty('--columns', gridSize);
    for (i=0;i<gridSize*gridSize;i++){
        let drawSquare = document.createElement('div');
        drawSquare.classList.add('drawSquare');
        //drawSquare.style.border = '1px solid black';
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
defaultGrid();


