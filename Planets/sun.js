import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const Sun = props => (
  <ImageBackground
    source={{
      uri:
        "https://images.wallpaperscraft.com/image/eclipse_moon_sun_129559_938x1668.jpg"
    }}
    style={styles.container}
  >
    <Text />
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Sun;
