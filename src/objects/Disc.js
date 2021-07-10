class Disc {
  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.disc = scene.add.image(x, y, 'disc');
    this.disc.setScale(1 / 8, 1 / 8);
  }

  update(cursors) {

  }
}

export default Disc;
