class Player {
  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.head = scene.add.image(x, y - 24, 'face');
    this.head.setScale(1 / 8, 1 / 8);
    this.torso = scene.add.image(x, y, 'torso');
    this.torso.setScale(1 / 8, 1 / 8);
    this.legs = scene.add.image(x, y + 32, 'legs');
    this.legs.setScale(1 / 8, 1 / 8);
  }

  update(cursors) {

  }
}

export default Player;
