import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FirstGame } from '../../phaser';

const GameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const PhaserGame = styled.div`
    height: 600px;
    width: 800px;
    background-color: gray;
`;



const Game: React.FC = () => {

    useEffect(() => {    
        FirstGame.createGame();
    });

    return (
        <GameContainer>
            <PhaserGame id="phaser-game" />
        </GameContainer>
    );
};

export default Game;