function initializeSpots(spots) {

   for (var i = 0; i < cols * 4 + 1; i++) {
      spots[i] = [];
      for (var j = 0; j < rows * 4 + 1; j++) {
         // Initialize the spots in a grid pattern to save memory
         if ((i + j) % 2 === 0) {
            var atBorder = (i === 0 || i === cols * 4 || j === 0 || j === rows * 4);
            spots[i][j] = new Spot(size * i / 4, size * j / 4, false, atBorder);
         }
      }
   }

   // Add walls
   for (var i = 0; i < cols * 4; i += 4) {
      for (var j = 0; j < rows * 4; j += 4) {
         if (symbols[i / 4] && symbols[i / 4][j / 4]) {
            for (const s of symbols[i / 4][j / 4]) {
               var xIndex = i + s.x;
               var yIndex = j + s.y;
               spots[xIndex][yIndex] = new Spot(xIndex * unit, yIndex * unit, true);
               // true means is a wall
            }
         }
      }
   }
}