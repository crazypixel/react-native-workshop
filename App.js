import React from 'react';
import { View } from 'react-native';
import Welcome from './src/views/welcome';
import styled from 'styled-components/native';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Welcome />
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
`;
