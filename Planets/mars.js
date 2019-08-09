import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Mars = props => (
    <View style={styles.container}>
    <Text>
        Mars
        2.663 AU
        247,541,315 Miles
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

export default Mars;