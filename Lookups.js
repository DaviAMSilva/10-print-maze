var neighborList = [
    // DIAGONALS
    { x: 1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: -1 },
    { x: -1, y: 1 },
];
if (allowOrto) {
    neighborList = neighborList.concat(
        // HORIZANTALS & VERTICALS
        { x: 0, y: 2 },
        { x: 2, y: 0 },
        { x: 0, y: -2 },
        { x: -2, y: 0 }
    )
}



// Symbols

/**
* @param allSymbols is a array that stores the symbols,
* which are a array of objects representing the spots
* with a draw function with coordinates and size as inputs
* Fell free to suggest new symbols
*/

var allSymbols = [];

var blank = [];
blank.draw = function () { }
allSymbols.push(blank);


var invSlash = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 4 }
];
invSlash.draw = function (x, y, size) {
    line(x, y, x + size, y + size);
}
allSymbols.push(invSlash);


var slash = [
    { x: 0, y: 4 },
    { x: 1, y: 3 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 4, y: 0 },
];
slash.draw = function (x, y, size) {
    line(x, y + size, x + size, y);
}
allSymbols.push(slash);