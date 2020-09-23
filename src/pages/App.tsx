import React from 'react';
import styled from 'styled-components';

import { Footer } from '../molecules';
import { Game } from '../organisms';

const Container = styled.div`
  background-color: #deffde;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <Container>
      <Game />
      <Footer />
    </Container>
  );
}

export default App;
