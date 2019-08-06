import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground 
      source={{uri: 'https://images.wallpaperscraft.com/image/eclipse_moon_sun_129559_938x1668.jpg'}}
      style={styles.container} 
      >
        <Text>
          Space is cool
        </Text>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
