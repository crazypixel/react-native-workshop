import React from 'react';
import {
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  InteractionManager
} from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

class Welcome extends React.Component {
  constructor() {
    super();

    this.setAnimationInterpolations();
  }

  setAnimationInterpolations = () => {
    this.animation = new Animated.Value(0);

    this.buttonWidth = this.animation.interpolate({
      inputRange: [0, 100, 200],
      outputRange: [200, 40, height * 2],
      extrapolate: 'clamp'
    });

    this.buttonHeight = this.animation.interpolate({
      inputRange: [0, 100, 200],
      outputRange: [40, 40, height * 2],
      extrapolate: 'clamp'
    });

    this.labelOpacity = this.animation.interpolate({
      inputRange: [0, 40],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    this.backgroundColor = this.animation.interpolate({
      inputRange: [0, 100, 200],
      outputRange: ['transparent', 'white', '#222'],
      extrapolate: 'clamp'
    });
  };

  login = () => {
    const firstAnimation = Animated.timing(
      this.animation,
      { toValue: 100, duration: 500 }
    );

    const secondAnimation = Animated.timing(
      this.animation,
      { toValue: 200, duration: 1000 }
    );

    firstAnimation.start(() => {
      secondAnimation.start(() => {
        this.props.navigation.navigate('List');

        InteractionManager.runAfterInteractions(() => this.animation.setValue(0));
      })
    });
  };

  render() {
    const buttonStyles = [
      styles.button,
      {
        width: this.buttonWidth,
        height: this.buttonHeight,
        backgroundColor: this.backgroundColor
      }
    ];

    const labelStyles = [
      styles.label,
      {
        opacity: this.labelOpacity
      }
    ];

    return (
      <Container>
        <Title>Welcome to 500Todo</Title>

        <TouchableOpacity onPress={ this.login }>
          <Animated.View style={ buttonStyles }>
            <Animated.Text style={ labelStyles }>Get Started</Animated.Text>
          </Animated.View>
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    margin: 50,
    borderWidth: 2,
    borderRadius: 400,
    borderColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

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