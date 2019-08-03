const cols = 16,
    rows = 9;
const size = 50;

var squares = [];
var spots = [];

var start, end;

function setup() {
    createCanvas(cols * size, size * rows);

    for (var i = 0; i < cols; i++) {
        squares[i] = [];
        for (var j = 0; j < rows; j++) {
            // LEFT
            if (i > 0) {
                var left = squares[i - 1][j].right;
            } else {
                var left = new Spot(size * i, size * (j + .5));
                spots.push(left);
            }

            // RIGHT
            var right = new Spot(size * (i + 1), size * (j + .5));
            spots.push(right);

            // TOP
            if (j > 0) {
                var top = squares[i][j - 1].bottom;
            } else {
                var top = new Spot(size * (i + .5), size * j);
                spots.push(top);
            }

            // BOTTOM
            var bottom = new Spot(size * (i + .5), size * (j + 1));
            spots.push(bottom);

            // TYPE
            if (i ===0 || j===0||i===cols-1||j===rows-1) {
                var type=" ";
            } else {
                var type=null;
            }

            squares[i][j] = new Square(size * i, size * j, left, right, top, bottom, type);
        }
    }

    start = squares[1][1].top;
    end = squares[cols-2][rows-2].bottom;
}

function draw() {
    for (const s of spots) {
        if (s === start || s === end) {
            stroke(255,0,0);
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