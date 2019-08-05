function initializeNeighbors(spots) {
    for (var i = 0; i < cols * 4 + 1; i++) {
        for (var j = 0; j < rows * 4 + 1; j++) {

            for (const n of neighborList) {
                var xIndex = i + n.x;
                var yIndex = j + n.y;

                if (spots[xIndex] && spots[xIndex][yIndex]) {
                    spots[i][j].neighbors.push(spots[xIndex][yIndex]);
                }
            }

        }
    }
}