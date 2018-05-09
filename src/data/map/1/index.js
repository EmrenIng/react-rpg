export const tiles = {
    cols: 12,
    rows: 6, 
    tsize: 72,
    tiles: [
        [0,8,7,0,0,4,0,0,9,3,10,9],
        [2,0,0,0,2,0,0,10,10,10,9,9],
        [0,3,0,0,4,0,0,6,6,10,7,9],
        [0,3,8,0,0,0,11,2,6,10,11,7],
        [0,0,0,7,4,0,0,10,6,4,5,9],
        [0,2,0,0,3,0,0,9,10,10,9,9],
    ], getTile: function(col, row) {
      return this.tiles[row * tiles.cols + col]
    }

}

// 0 = Grass or Walkable. Other # will be other items.
