// src/App.jsx
import React from 'react';
import styled from 'styled-components';

const App = () => {

  return (
    <Container>
      <Content>
        <Title>Coming Soon...</Title>
        <br/>
        <Subtitle>We are working hard to give you a better experience.</Subtitle>
      </Content>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  font-family: 'Arial', sans-serif;
`;

const Content = styled.div`
  z-index: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5em;
  color: #fff;
  margin: 0;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #fff;
  margin: 0;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;
