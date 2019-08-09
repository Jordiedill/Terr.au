import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Neptune = props => (
    <View style={styles.container}>
        <Image
          style={{width: 350, height: 350}}
          source={{uri: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Bu140tZ/animation-of-the-planet-neptune_qjhuaasu__F0000.png'}}>

        </Image>
        <Text style={styles.name}>
                  Neptune
              </Text>
    <Text style={styles.distance}>
        29.07 AU
    </Text>
    <Text style={styles.distance}>
        27,022,253,000,000,000 Miles
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

export default Neptune;