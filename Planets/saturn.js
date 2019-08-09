import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Saturn = props => (
    <View style={styles.container}>
    <Text>
        Saturn
        9.165 AU
        851,939,974 Miles

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

export default Saturn;