import Phaser from 'phaser';

// A cena principal: é aqui que a partida acontece.
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  // create() roda uma vez, quando a cena começa.
  create() {
    this.add
      .text(480, 270, 'Olá, Phaser!', { fontSize: '48px', color: '#ffffff' })
      .setOrigin(0.5);
  }
}
