var size, unit;

var spots = [],
    symbols = [];

var openSet = [];
var closedSet = [];
var path = [];

var start, end;

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeJoin(ROUND);
    noFill();

    size = min(height / rows, width / cols);
    unit = min(height / (4 * rows), width / (4 * cols));

    initializeSymbols(symbols);
    initializeSpots(spots);
    initializeNeighbors(spots);

    start = spots[startSpot.i][startSpot.j];
    end = spots[endSpot.i][endSpot.j];

    openSet.push(start);
}

function draw() {

    // Am I still searching?
    if (openSet.length > 0) {

        // Best next option
        var winner = 0;

        if (fastThanEfficient) {
            for (var i = 0; i < openSet.length; i++) {
                if (openSet[i].h < openSet[winner].h) {
                    winner = i;
                } else if (openSet[i].h === openSet[winner].h) {
                    if (openSet[i].f < openSet[winner].f) {
                        winner = i;
                    }
                }
            }
        } else {
            for (var i = 0; i < openSet.length; i++) {
                if (openSet[i].f < openSet[winner].f) {
                    winner = i;
                } else if (openSet[i].f === openSet[winner].f) {
                    if (openSet[i].h < openSet[winner].h) {
                        winner = i;
                    }
                }
            }
        }

        var current = openSet[winner];

        // Did I finish?
        if (current === end) {
            noLoop();
            console.log("DONE!");
            console.log("Framecount:", frameCount);
            console.log("Path Length", path.length);
        }

        // Best option moves from openSet to closedSet

        var index = openSet.indexOf(current);
        openSet.splice(index, 1);
        closedSet.push(current);

        // Check all the neighbors
        var neighbors = current.neighbors;
        for (var i = 0; i < neighbors.length; i++) {
            var neighbor = neighbors[i];

            // Valid next spot ?
            if (!closedSet.includes(neighbor) && !neighbor.wall) {
                var tempG = current.g + heuristic(neighbor, current);

                // Is this a better path than before?
                var newPath = false;
                if (openSet.includes(neighbor)) {
                    if (tempG < neighbor.g) {
                        neighbor.g = tempG;
                        newPath = true;
                    }
                } else {
                    neighbor.g = tempG;
                    newPath = true;
                    openSet.push(neighbor);
                }

                // Yes, it's a better path
                if (newPath) {
                    neighbor.h = heuristic(neighbor, end);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.previous = current;
                }
            }

        }
        // Uh oh, no solution
    } else {
        console.log('no solution');
        noLoop();
        return;
    }


    // -----===== DRAWING =====----- //


    background(255);

    // Draws all the spots
    // for (var i = 0; i < cols * 4 + 1; i++) {
    //     for (var j = 0; j < rows * 4 + 1; j++) {
    //         if (spots[i][j]) spots[i][j].draw();
    //     }
    // }

    // Draws all the symbols
    stroke(0);
    strokeWeight(3);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            stroke(0);
            symbols[i][j].draw(i * size, j * size, size);
        }
    }

    // Makes the path
    path = [];
    var temp = current;
    path.push(temp);
    while (temp.previous) {
        path.push(temp.previous);
        temp = temp.previous;
    }

    // Draws the path
    stroke(255, 0, 100);
    strokeWeight(7);
    beginShape();
    for (var i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
    }
    endShape();
}