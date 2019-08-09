import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Mars = props => (
  <View style={styles.container}>
    <Image
      style={{ width: 350, height: 350 }}
      source={{ uri: "https://media1.giphy.com/media/Zc1LkMyPjcFLa/giphy.gif" }}
    />
    <Text style={styles.name}>Mars</Text>
    <Text style={styles.distance}>2.663 AU</Text>
    <Text style={styles.distance}>247,541,315 Miles</Text>
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

export default Mars;
