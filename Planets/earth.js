import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Earth = props => (
  <View style={styles.container}>
    <Image
      style={{ width: 350, height: 350 }}
      source={{ uri: "https://media0.giphy.com/media/p0Tx9sBFyuYYU/giphy.gif" }}
    />
    <Text style={styles.name}>Earth</Text>
    <Text style={styles.distance}>Mostly harmless</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  },
  distance: {
    color: "#fff"
  },
  name: {
    color: "#fff",
    margin: 100,
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default Earth;
