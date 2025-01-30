mainContainer = document.querySelector('.container');

function removeGridIfPresent() {
    mainContainer.replaceChildren();
}

function addHoverEffectToSquare(squareDiv) {
    squareDiv.addEventListener("mouseover", () => {
        squareDiv.style.backgroundColor = "black"
    })
}

function getFlexedRow() {
    // Each row will hold square divs
    rowContainer = document.createElement('div');
    rowContainer.style.display = "flex";

    return rowContainer;
}

function getSquareDiv(gridSize) {
    squareDiv = document.createElement('div');

    height = 100 / gridSize;
    width = 100 / gridSize;

    squareDiv.style.height = `calc(${height}vh)`
    squareDiv.style.width = `calc(${width}vw)`

    addHoverEffectToSquare(squareDiv);

    return squareDiv;
}

function createGrid(size) {
    removeGridIfPresent();

    for (let i = 0; i < size; i++) {
        rowContainer = getFlexedRow();

        for (let j = 0; j < size; j++) {
            squareDiv = getSquareDiv(size);

            rowContainer.appendChild(squareDiv);
        }

        // When a row has been populated with square divs
        mainContainer.appendChild(rowContainer);
    }
}

function askUserGridSize() {
    let size;

    gridSizeButton = document.querySelector("#grid-size-button");

    gridSizeButton.addEventListener("click", () => {
        size = prompt("Enter the drawing board size");

        createGrid(size);
    })
}

askUserGridSize();