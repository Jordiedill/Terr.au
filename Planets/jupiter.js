import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Jupiter = props => (
    <View style={styles.container}>
    <Text>
        Jupiter
        4.723 AU
        439,030,278 Miles

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

export default Jupiter;