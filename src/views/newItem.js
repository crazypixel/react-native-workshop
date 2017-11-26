import React from 'react';
import styled from 'styled-components/native';

const NewItem = () => (
  <Container>
    <Title>New Item</Title>
  </Container>
);

export default NewItem;

const Container = styled.View`
  background-color: #222;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 30px;
`;
