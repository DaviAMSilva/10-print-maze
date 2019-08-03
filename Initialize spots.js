function initializeSpots() {

    for (var i = 0; i < cols; i++) {
        squares[i] = [];
        for (var j = 0; j < rows; j++) {
            // LEFT
            if (i > 0) {
                var left = squares[i - 1][j].right;
            } else {
                var left = new Spot(size * i, size * (j + .5));
                spots.push(left);
            }

            // RIGHT
            var right = new Spot(size * (i + 1), size * (j + .5));
            spots.push(right);

            // TOP
            if (j > 0) {
                var top = squares[i][j - 1].bottom;
            } else {
                var top = new Spot(size * (i + .5), size * j);
                spots.push(top);
            }

            // BOTTOM
            var bottom = new Spot(size * (i + .5), size * (j + 1));
            spots.push(bottom);

            // TYPE
            if (i === 0 || j === 0 || i === cols - 1 || j === rows - 1) {
                var type = " ";
            } else {
                var type = null;
            }

            squares[i][j] = new Square(size * i, size * j, left, right, top, bottom, type);
        }
    }

}