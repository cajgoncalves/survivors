import Phaser from 'phaser';
import GameScene from './scenes/GameScene.js';
import { GAME_WIDTH, GAME_HEIGHT } from './config.js';

// Configuração geral do jogo Phaser.
const config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: '#1a1a2e',
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
  scene: [GameScene],
};

new Phaser.Game(config);
