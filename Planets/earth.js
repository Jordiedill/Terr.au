
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Earth = props => (
    <View style={styles.container}>
    <Text>
        Hi

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

export default Earth;