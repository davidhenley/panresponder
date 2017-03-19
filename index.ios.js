import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  Animated
} from 'react-native';

class App extends Component {
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
      },
      onPanResponderMove: Animated.event([
      ]),
      onPanResponderRelease: (e, {vx, vy}) => {
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View {...this._panResponder.panHandlers}>
          <Image source={require('./assets/target.png')} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('panresponder', () => App);
