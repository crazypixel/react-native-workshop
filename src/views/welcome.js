import React from 'react';
import styled from 'styled-components/native';

const Welcome = ({ navigation }) => (
  <Container>
    <Title>Welcome to 500Todo</Title>
    <Button onPress={() => navigation.navigate('List')}>
      <Label>Get Started</Label>
    </Button>
  </Container>
);

export default Welcome;

const Container = styled.View`
  background-color: #6740B4;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 30px;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const Button = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  margin: 50px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
