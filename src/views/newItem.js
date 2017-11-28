import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { firebaseAction } from '../redux/actions/firebaseActions';

class NewItem extends React.Component {
  state = {
    text: '',
    focused: false
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  toggleFocus = () => {
    const { focused } = this.state;

    this.setState({ focused: !focused });
  };

  handleClick = () => {
    const { navigation, firebaseAction } = this.props;
    const key = this.uuid();
    const data = {
      key,
      label: this.state.text
    };
    const meta = {
      method: 'SET',
      path: `/items/${key}`
    };

    firebaseAction(data, meta);

    navigation.navigate('List');
  };

  render() {
    const { focused } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        <Title>Add new item</Title>

        <Input
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          focused={focused}
        />

        <Button onPress={this.handleClick}>
          <Label>Add Item</Label>
        </Button>
      </Container>
    );
  }
}

export default connect(undefined, {
  firebaseAction
})(NewItem);

const Container = styled.View`
  background-color: #222;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 40px; 
  border-color: ${({ focused }) => focused ? '#6740B4' : '#444'};
  border-Width: 2px; 
  width: 80%;
  padding: 0 20px;
  border-radius: 20px;
  color: #d5d5d5;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  margin-bottom: 10px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
