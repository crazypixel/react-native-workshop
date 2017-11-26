import React from 'react';
import styled from 'styled-components/native';

const List = ({ navigation }) => (
  <Container>
    <Title>Todo list</Title>
    <Button onPress={() => navigation.navigate('NewItem')}>
      <Plus>+</Plus>
    </Button>
  </Container>
);

export default List;

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

const Button = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #6740B4;
  position: absolute;
  bottom: 30px;
  right: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Plus = styled.Text`
  color: #fff;
  font-size: 30px;
`;
