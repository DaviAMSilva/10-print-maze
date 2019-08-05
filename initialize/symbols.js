function initializeSymbols(symbols) {

    for (var i = 0; i < cols; i++) {
        symbols[i] = [];
        for (var j = 0; j < rows; j++) {
            symbols[i][j] = blank;
        }
    }

    for (var i = 1; i < cols - 1; i++) {
        for (var j = 1; j < rows - 1; j++) {
            symbols[i][j] = random() < .5 ? slash : invSlash;
        }
    }

}