var blank = [];
blank.draw = function () { }

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