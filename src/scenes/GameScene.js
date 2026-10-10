import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from '../config.js';
import Player from '../entities/Player.js';

// A cena principal: é aqui que a partida acontece.
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  // create() roda uma vez, quando a cena começa.
  create() {
    this.player = new Player(this, GAME_WIDTH / 2, GAME_HEIGHT / 2);
  }

  // update() roda a cada quadro (cerca de 60 vezes por segundo).
  update() {
    this.player.update();
  }
}
