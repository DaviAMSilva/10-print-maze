const cols = 16,
    rows = 9;

var size, u;

var spots = [],
    symbols = [];

var start, end;

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(3);

    size = min(height / rows, width / cols);
    u = min(height / (4 * rows), width / (4 * cols));

    initializeSymbols(symbols);
    initializeSpots(spots);
}

function draw() {
    background(255);

    for (var i = 0; i < cols * 4 + 1; i++) {
        for (var j = 0; j < rows * 4 + 1; j++) {
            spots[i][j].draw();
        }
    }
}