var size, unit;

var spots = [],
    symbols = [];

var openSet = [];
var closedSet = [];
var path = [];

var start, end;

function setup() {
    // randomSeed(3);

    createCanvas(windowWidth, windowHeight);
    strokeWeight(3);

    size = min(height / rows, width / cols);
    unit = min(height / (4 * rows), width / (4 * cols));

    initializeSymbols(symbols);
    initializeSpots(spots);
    initializeNeighbors(spots);

    start = spots[8][6];
    end = spots[58][28];

    openSet.push(start);
}

function draw() {

    // Am I still searching?
    if (openSet.length > 0) {

        // Best next option
        var winner = 0;
        for (var i = 0; i < openSet.length; i++) {
            // for (var i = openSet.length - 1; i >= 0; i--) {
            if (openSet[i].f <= openSet[winner].f) {

                winner = i;
                //////###########

            } else if (openSet[i].f === openSet[winner].f) {

                if (openSet[i].h < openSet[winner].h) {
                    winner = i;
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

        // removeFromArray(openSet, current);
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


    background(255);

    // for (var i = 0; i < cols * 4 + 1; i++) {
    //     for (var j = 0; j < rows * 4 + 1; j++) {
    //         if (spots[i][j]) spots[i][j].draw();
    //     }
    // }

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            stroke(0);
            symbols[i][j].draw(i * size, j * size, size);
        }
    }

    path = [];
    var temp = current;
    path.push(temp);
    while (temp.previous) {
        path.push(temp.previous);
        temp = temp.previous;
    }

    noFill();
    stroke(255, 0, 200);
    beginShape();
    for (var i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
    }
    endShape();
}