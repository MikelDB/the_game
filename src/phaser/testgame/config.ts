import * as Phaser from 'phaser';
import { GameScene } from './scenes/test';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'phaser-game',
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
 
  backgroundColor: '#000000',

  scene:  GameScene,
};