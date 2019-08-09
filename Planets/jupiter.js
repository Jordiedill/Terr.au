import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { HitTestResultTypes } from 'expo/build/AR';

const Jupiter = props => (
    <View style={styles.container}>
        <Image
          style={{width: 350, height: 350}}
          source={{uri: 'https://media.giphy.com/media/s2uampOAMWksU/giphy.gif'}}>

        </Image>
        <Text style={styles.name}>
                  Jupiter
        </Text>
    <Text style={styles.distance}>
        4.723 AU

    </Text>
    <Text style={styles.distance}>
    439,030,278 Miles 
    </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    distance: {
        color:'#fff'
    },
    name: {
        color:'#fff',
        margin: 100,
        fontSize: 40,
        fontWeight: 'bold'

      },
  });

export default Jupiter;