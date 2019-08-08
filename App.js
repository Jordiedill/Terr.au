import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; 
// import CustomDrawerContentComponent from './drawer.js';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderDrawer = this.renderDrawer.bind(this)
  }

  renderDrawer = () => {
    return (
      <View>
        <Text>I am in the drawer!</Text>
      </View>
    );
  };


  render() {
    return (
      <ImageBackground 
      source={{uri: 'https://images.wallpaperscraft.com/image/eclipse_moon_sun_129559_938x1668.jpg'}}
      style={styles.container} 
      >
        {/* <CustomDrawerContentComponent /> */}
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
