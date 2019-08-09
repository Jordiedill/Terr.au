import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Neptune = props => (
    <View style={styles.container}>
    <Text>
        Neptune
        29.07 AU
        27,022,253,000,000,000 Miles
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

export default Neptune;