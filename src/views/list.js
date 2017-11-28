import React from 'react';
import styled from 'styled-components/native';
import { FlatList, Dimensions } from 'react-native';
import { firebaseAction } from '../redux/actions/firebaseActions';
import { connect } from 'react-redux';
import { get } from 'lodash/fp';
import { toArray } from 'lodash';

const { width } = Dimensions.get('window');

const getColor = () => {
  return '#' + '0123456789abcdef'.split('').map((v, i, a) => {
      return i > 5 ? null : a[Math.floor(Math.random() * 16)]
    }).join('');
};

const rowRenderer = ({ item }) => {
  const { label } = item;

  return (
    <Row width={width}>
      <Circle background={getColor()} />
      <Title>{label}</Title>
    </Row>
  );
};

class List extends React.Component {
  componentWillMount() {
    const meta = {
      method: 'SUBSCRIBE',
      path: '/items'
    };

    this.props.firebaseAction(null, meta);
  }

  render() {
    const { navigation, items } = this.props;
    const data = toArray(items);

    return (
      <Container>
        <FlatList
          data={data}
          renderItem={rowRenderer}
        />
        <Button onPress={() => navigation.navigate('NewItem')}>
          <Plus>+</Plus>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  items: get('items', state.firebase)
});

export default connect(mapStateToProps, {
  firebaseAction
})(List);

const Container = styled.View`
  background-color: #222;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
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

const Row = styled.View`
  width: ${({ width }) => width}px;
  height: 70px;
  display: flex;
  flex-direction: row;
  border-bottom-color: #333;
  border-bottom-width: 1px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Title = styled.Text`
  color: #d5d5d5;
  font-size: 16px;
`;

const Circle = styled.View`
  margin-right: 10px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ background }) => background};
`;