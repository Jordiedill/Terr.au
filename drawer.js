import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { App } from "./App.js";
import Earth from "./Planets/earth.js";
import Jupiter from "./Planets/jupiter.js";
import Mars from "./Planets/mars.js";
import Mercury from "./Planets/mercury.js";
import Neptune from "./Planets/neptune.js";
import Saturn from "./Planets/saturn.js";
import Uranus from "./Planets/uranus.js";
import Venus from "./Planets/venus.js";
import {
  DrawerItems,
  SafeAreaView,
  ScrollView,
  DrawerNavigator,
  createDrawerNavigator
} from "react-navigation";

const DrawerContains = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View>
        <Text>This is my drawer</Text>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const Drawers = createDrawerNavigator(
  {
    App: { screen: App },
    Earth: { screen: Earth },
    Jupiter: { screen: Jupiter },
    Mars: { screen: Mars },
    Mercury: { screen: Mercury },
    Neptune: { screen: Neptune },
    Saturn: { screen: Saturn },
    Uranus: { screen: Uranus },
    Venus: { screen: Venus }
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: "transparent",
    overlayColor: "#6b52ae",
    contains: DrawerContains,
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#6b52ae"
    }
  }
);
//
const Drawer = createAppContainer(Drawers);
export default Drawer;
