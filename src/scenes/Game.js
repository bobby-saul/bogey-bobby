import Phaser, { Display } from 'phaser';
import Disc from '../objects/Disc';
import Player from '../objects/Player';
class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  init(data) {

  }

  preload() {

  }

  create() {
    // Camera
    this.cameras.main.setBackgroundColor('#95A472');

    // Basket
    this.basket = this.add.image(700, 100, 'basket');
    this.basket.setScale(1 / 8, 1 / 8);

    // Player
    this.player = new Player(this, 100, 550);

    // Disc
    this.disc = new Disc(this, 84, 566);
  }

  update() {

  }
}

export default Game;
