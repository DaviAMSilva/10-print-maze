function initializeNeighbors(spots) {
    for (var i = 0; i < cols * 4 + 1; i++) {
        for (var j = 0; j < rows * 4 + 1; j++) {

            // Adds neighbors for all cells
            for (const n of neighborList) {
                var xIndex = i + n.x;
                var yIndex = j + n.y;

                if (spots[xIndex] && spots[xIndex][yIndex]) {
                    spots[i][j].neighbors.push(spots[xIndex][yIndex]);
                }

            }

            // Adds crossig at borders
            if (borderCrossing) {
                if (i === 0 || i === cols * 4) {
                    if (spots[i][j + 4])
                        spots[i][j].neighbors.push(spots[i][j + 4]);
                    if (spots[i][j - 4])
                        spots[i][j].neighbors.push(spots[i][j - 4]);
                }
                if (j === 0 || j === rows * 4) {
                    if (spots[i + 4] && spots[i + 4][j])
                        spots[i][j].neighbors.push(spots[i + 4][j]);
                    if (spots[i - 4] && spots[i - 4][j])
                        spots[i][j].neighbors.push(spots[i - 4][j]);
                }
            }
        }
    }
}