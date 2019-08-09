import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Venus = props => (
    <View style={styles.container}>
    <Text>
        Venus
        1.731 AU
        160,906,502 Miles
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

export default Venus;