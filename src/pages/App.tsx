import React from 'react';
import styled from 'styled-components';

import { Link, Button } from '../atoms';

const Container = styled.div`
  background-color: #282c34;
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
      <Link href="www.google.com" text="Artizarra" />
      <Link href="www.google.com" text="Github" />
      <Button href="www.google.com" text="Dame algo" />
    </Container>
  );
}

export default App;
