import Phaser from 'phaser';
import { PLAYER } from '../config.js';

// O jogador: um círculo com física que se move com WASD ou setas.
export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    // Cria a textura (imagem) do círculo uma única vez e reaproveita.
    if (!scene.textures.exists('player')) {
      const g = scene.add.graphics();
      g.fillStyle(PLAYER.color, 1);
      g.fillCircle(PLAYER.radius, PLAYER.radius, PLAYER.radius);
      g.generateTexture('player', PLAYER.radius * 2, PLAYER.radius * 2);
      g.destroy();
    }

    super(scene, x, y, 'player');
    scene.add.existing(this);          // aparece na tela
    scene.physics.add.existing(this);  // ganha corpo físico
    this.setCollideWorldBounds(true);  // não sai da tela

    // Teclas: setas + W A S D
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.wasd = scene.input.keyboard.addKeys('W,A,S,D');
  }

  // update() é chamado a cada quadro pela cena.
  update() {
    const left = this.cursors.left.isDown || this.wasd.A.isDown;
    const right = this.cursors.right.isDown || this.wasd.D.isDown;
    const up = this.cursors.up.isDown || this.wasd.W.isDown;
    const down = this.cursors.down.isDown || this.wasd.S.isDown;

    // Direção: -1, 0 ou 1 em cada eixo.
    const dx = (right ? 1 : 0) - (left ? 1 : 0);
    const dy = (down ? 1 : 0) - (up ? 1 : 0);

    // normalize() deixa o vetor com tamanho 1, então andar na diagonal
    // não fica mais rápido que andar reto.
    const direcao = new Phaser.Math.Vector2(dx, dy).normalize();
    this.setVelocity(direcao.x * PLAYER.speed, direcao.y * PLAYER.speed);
  }
}
