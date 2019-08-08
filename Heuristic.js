// Different heuristic give different results

function heuristic(a, b) {
    // Cartesian distance
    var d = dist(a.x, a.y, b.x, b.y);

    return d;
}