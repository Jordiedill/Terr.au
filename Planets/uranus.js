import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Uranus = props => (
    <View style={styles.container}>
    <Text>
        Uranus
        19.642 AU
        18,258,380,000,000,000 Miles

    </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Uranus;