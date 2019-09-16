function initializeSymbols(symbols) {

    for (var i = 0; i < cols; i++) {
        symbols[i] = [];
        for (var j = 0; j < rows; j++) {
            symbols[i][j] = blank;
        }
    }

    for (var i = gap; i < cols - gap; i++) {
        for (var j = gap; j < rows - gap; j++) {
            if (random() < symbolChance) {
                symbols[i][j] = random(allSymbols);
            }
        }
    }

}