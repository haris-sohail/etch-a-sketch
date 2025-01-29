// Create a webpage with a 16x16 grid of square divs
mainContainer = document.querySelector('.container');

function addHoverEffectToSquare(squareDiv) {
    squareDiv.addEventListener("mouseover", () => {
        squareDiv.style.backgroundColor = "black"
    })
}

function getFlexedRow() {
    // Each row will hold 16 square divs
    rowContainer = document.createElement('div');
    rowContainer.style.display = "flex";

    return rowContainer;
}

function getSquareDiv() {
    squareDiv = document.createElement('div');

    // 100 / 16 = 6.25
    squareDiv.style.height = "calc(6.25vh)"
    squareDiv.style.width = "calc(6.25vw)"

    addHoverEffectToSquare(squareDiv);

    return squareDiv;
}

function create16x16Grid() {
    for (let i = 0; i < 16; i++) {
        rowContainer = getFlexedRow();

        for (let j = 0; j < 16; j++) {
            squareDiv = getSquareDiv();

            rowContainer.appendChild(squareDiv);
        }

        // When a row has been populated with 16 divs
        mainContainer.appendChild(rowContainer);
    }
}

create16x16Grid();