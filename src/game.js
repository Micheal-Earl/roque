"use strict"; // Interpret the code in strict mode

class Game {

  constructor() {
    this._width = 30;
    this._length = 30;

    // Make a new Rot.js display
    this._display = new ROT.Display({ 
      width: this._width, 
      height: this._length,
      fontSize: 16,
      fontFamily: "monospace",
      forceSquareRatio: true
    });

    // Append the Rot.js display to our html
    document.body.appendChild(this._display.getContainer());

    this._world = new World(this._width, this._length);
    
    this._player = new Player(
      "Mike", 
      this._world,
      Math.floor(this._width  / 2), 
      Math.floor(this._length / 2),
      "@",
      "white"
    );

    this.draw();
  }

  // Getters, Setters
  get display() { return this._display }
  get world() { return this._world }
  get player() { return this._player }

  update(action) {
    this._player.update(action, this.world)

  }

  draw() {
    this._world.draw(this._display);
    this._player.draw(this._display);
  }

}
