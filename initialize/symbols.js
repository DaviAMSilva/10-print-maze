function initializeSymbols(symbols) {

    for (var i = 0; i < cols; i++) {
        symbols[i] = [];
        for (var j = 0; j < rows; j++) {
            symbols[i][j] = random() < .5 ? slash : invSlash;
        }
    }

}