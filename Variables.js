// The grid of symbols
var cols = 19,
    rows = 9;

// Allow horizontal & vertical
var allowOrto = true;

// Allow the line to walk through the OUTER border
var borderCrossing = false;

// Be fast or efficient
var fastThanEfficient = false;

// Avoid borders at all cost
var avoidBorders = false;

// Draw all the spots
var drawAllSpots = false;

// Draw spots on the open & closed sets
var drawSetSpots = true;

// How many symbols are missing at each outer border
// Don't go too crazy with it!
var gap = 0;

// The chance to have a symbol of any type
var symbolChance = 0.5;

// The start and the end of the maze
var startSpot = {
    i: 6,
    j: 4
};
var endSpot = {
    i: cols * 4 - 6,
    j: rows * 4 - 4
};