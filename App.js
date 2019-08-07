import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderDrawer = this.renderDrawer.bind(this);
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
        <DrawerLayout
          drawerWidth={200}
          drawerPosition={DrawerLayout.positions.Right}
          drawerType='front'
          drawerBackgroundColor="#ddd"
          renderNavigationView={this.renderDrawer}>
        <View>
        <Text>
          Space is cool
        </Text>
        </View>
        </DrawerLayout>
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
