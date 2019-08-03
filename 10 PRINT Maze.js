const cols = 16,
    rows = 9;
const size = 37;

var squares = [];
var spots = [];

var start, end;

function setup() {
    createCanvas(cols * size, size * rows);

    initializeSpots();


    //THIS sfheiuf

    start = squares[1][1].top;
    end = squares[cols - 2][rows - 2].bottom;
}

function draw() {
    for (const s of spots) {
        if (s === start || s === end) {
            stroke(255, 0, 0);
            strokeWeight(10);
        } else {
            stroke(0);
            strokeWeight(5);
        }
        s.draw();
    }

    strokeWeight(3);
    for (const sq_ of squares) {
        for (const sq of sq_) {
            sq.draw();
        }
    }
}