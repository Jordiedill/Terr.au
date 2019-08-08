import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './App.js';
import Earth from './Planets/earth.js';
import Jupiter from './Planets/jupiter.js';
import Mars from './Planets/mars.js';
import Mercury from './Planets/mercury.js';
import Neptune from './Planets/neptune.js';
import Saturn from './Planets/saturn.js';
import Uranus from './Planets/uranus.js';
import Venus from './Planets/venus.js';


//
import { DrawerItems, SafeAreaView, ScrollView, DrawerNavigator, createDrawerNavigator } from 'react-navigation';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);


const Drawers = createDrawerNavigator(
    {
      App: App,
      Earth: Earth,
      Jupiter: Jupiter,
      Mars: Mars,
      Mercury: Mercury,
      Neptune: Neptune,
      Saturn: Saturn,
      Uranus: Uranus,
      Venus: Venus
    },
    {
      hideStatusBar: true,
      drawerBackgroundColor: 'transparent',
      overlayColor: '#6b52ae',
      contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#6b52ae',
      },
    }
  );
export default createAppContainer(Drawers);
