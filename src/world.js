"use strict"; // Interpret the code in strict mode

class World {

  // Map gen is super simple for now
  constructor(width, length) {
    this._width = width;
    this._length = length;
    this._state = this.generateMap(this._width, this._length);
  }

  // Getters, Setters
  get state() { return this._state; }
  get width() { return this._width; }
  get length() { return this._length; }

  // Make an empty, rectangular map
  makeEmptyMap(width, length) {
    let arr = new Array(width);

    for(let i = 0; i < width; i++) {
      arr[i] = new Array(length);
    }

    for (var i = 0; i < width; i++) {
      for (var j = 0; j < length; j++) {
        arr[i][j] = {
          tile: null,
          entities: {},
          items: {}
        };
      }
    }

    return arr;
  }

  // Generate our map features
  generateMap(width, length) {
    let arr = this.makeEmptyMap(width, length);

    for (var i = 0; i < width; i++) {
      for (var j = 0; j < length; j++) {
        if (!i || !j || i + 1 == width || j + 1 == length) {
          arr[i][j].tile = tile.wall;
        } else {
          arr[i][j].tile = tile.grass;
        }
      }
    }

    return arr;
  }

  draw(display) {
    for (var i = 0; i < this._width; i++) {
      for (var j = 0; j < this._length; j++) {
        let tile = this._state[i][j].tile;
        display.draw(i, j, tile.char, tile.color, tile.bgColor);
      }
    }
  }
}
