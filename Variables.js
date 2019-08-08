// The grid of symbols
var cols = 16,
    rows = 8;

// Allow horizontal & vertical
var allowOrto = true;

// Allow the line to walk through the OUTER border
var borderCrossing = true;

// Be fast or efficient
var fastThanEfficient = false;

// How many symbols are missing at each outer border
// Don't go too crazy with it
var gap = 0;

// The chance to have a symbol of any type
var symbolChance = 0.7;

// The start and the end of the maze
var startSpot = {i:6,j:4};
var endSpot = {i:cols*4-6,j:rows*4-4};