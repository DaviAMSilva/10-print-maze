const cols = 16,
    rows = 9;

var size, unit;

var spots = [],
    symbols = [];

var start, end;

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(3);

    size = min(height / rows, width / cols);
    unit = min(height / (4 * rows), width / (4 * cols));

    initializeSymbols(symbols);
    initializeSpots(spots);
    initializeNeighbors(spots);
}

function draw() {
    background(255);

    // for (var i = 0; i < cols * 4 + 1; i++) {
    //     for (var j = 0; j < rows * 4 + 1; j++) {
    //         spots[i][j].draw();
    //     }
    // }

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            stroke(0);
            symbols[i][j].draw(i * size, j * size, size);
        }
    }
}