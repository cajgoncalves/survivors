import Phaser from 'phaser';
import GameScene from './scenes/GameScene.js';

// Configuração geral do jogo Phaser.
const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  backgroundColor: '#1a1a2e',
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
  scene: [GameScene],
};

new Phaser.Game(config);
