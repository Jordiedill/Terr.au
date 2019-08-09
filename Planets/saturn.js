import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Saturn = props => (
  <View style={styles.container}>
    <Image
      style={{ width: 350, height: 350 }}
      source={{
        uri:
          "https://thumbs.gfycat.com/SomberHospitableGartersnake-size_restricted.gif"
      }}
    />
    <Text style={styles.name}>Saturn</Text>
    <Text style={styles.distance}>9.165 AU</Text>
    <Text style={styles.distance}>18,258,380,000,000,000 Miles</Text>
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

export default Saturn;
