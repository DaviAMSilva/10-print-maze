// Different heuristic give different results

function heuristic(a, b) {
    // Cartesian distance
    var d = dist(a.x, a.y, b.x, b.y);

    // Manhattan distance
    var d = abs(a.x, a.y) + abs(b.x, b.y);

    // Constant distance
    var d = 1;

    // Random distance :P
    // var d = random(100);

    // Negative distance (Amazing results)
    // var d = -1;

    return d;
}