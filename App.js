import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import Earth from "./Planets/earth.js";
import Jupiter from "./Planets/jupiter.js";
import Mars from "./Planets/mars.js";
import Mercury from "./Planets/mercury.js";
import Neptune from "./Planets/neptune.js";
import Saturn from "./Planets/saturn.js";
import Uranus from "./Planets/uranus.js";
import Venus from "./Planets/venus.js";
import Sun from "./Planets/sun.js";
import axios from "axios";
import {
  DrawerItems,
  SafeAreaView,
  ScrollView,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

const DrawerContains = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{
        top: "always",
        horizontal: "never",
        drawerBackgroundColor: "transparent"
      }}
    >
      <DrawerItems {...props} style={styles.text} />
    </SafeAreaView>
  </ScrollView>
);

const Drawers = createDrawerNavigator(
  {
    Sun: { screen: Sun },
    Mercury: { screen: Mercury },
    Venus: { screen: Venus },
    Earth: { screen: Earth },
    Mars: { screen: Mars },
    Jupiter: { screen: Jupiter },
    Saturn: { screen: Saturn },
    Uranus: { screen: Uranus },
    Neptune: { screen: Neptune }
  },
  {
    contentComponent: DrawerContains,
    drawerBackgroundColor: "transparent",
    titleColor: "#fff",
    flex: 1,
    drawerPosition: "right",
    drawerWidth: 120
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    textAlign: "right"
  },
  text: {
    color: "white"
  }
});

const App = createAppContainer(Drawers);
export default App;
