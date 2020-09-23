import * as Phaser from 'phaser';
import { gameConfig } from './config';

export const Game = {
    gameConfig: gameConfig,
    createGame: () => {
        new Phaser.Game(gameConfig);
    }
}