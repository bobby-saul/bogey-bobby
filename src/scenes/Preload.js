import Phaser from 'phaser';

import basket from '../assets/disc-basket.png';
import disc from '../assets/disc.png';
import face from '../assets/face.png';
import torso from '../assets/torso.png';
import legs from '../assets/legs.png';

class Preload extends Phaser.Scene {
	constructor() {
		super('preload');
	}

	preload() {
		this.load.image('basket', basket);
		this.load.image('disc', disc);
		this.load.image('face', face);
		this.load.image('torso', torso);
		this.load.image('legs', legs);
	}

	create() {
		this.scene.start('game');
	}
}

export default Preload;