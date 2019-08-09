import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Venus = props => (
    <View style={styles.container}>
        <Image
          style={{width: 350, height: 350}}
          source={{uri: 'https://media.giphy.com/media/eAMJgzoGAEwCc/giphy.gif'}}>

        </Image>
        <Text style={styles.name}>
                  Saturn
        </Text>
    <Text style={styles.distance}>
        1.731 AU
    </Text>
    <Text style={styles.distance}>
    160,906,502 Miles
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

      }
  });

export default Venus;