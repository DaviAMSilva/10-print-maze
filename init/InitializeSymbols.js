function initializeSymbols(symbols) {

    for (var i = 0; i < cols; i++) {
        symbols[i] = [];
        for (var j = 0; j < rows; j++) {
            symbols[i][j] = blank;
        }
    }

    for (var i = 0; i < cols - 0; i++) {
        for (var j = 0; j < rows - 0; j++) {
            if (random() < 1.0) symbols[i][j] = random() < .5 ? slash : invSlash;
        }
    }

}