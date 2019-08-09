import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Uranus = props => (
    <View style={styles.container}>
        <Image
          style={{width: 350, height: 350}}
          source={{uri: 'https://i.ytimg.com/vi/MLwIc0kgvyo/maxresdefault.jpg'}}>

        </Image>
        <Text style={styles.name}>
                  Uranus
        </Text>
        
    <Text style={styles.distance}>
        19.642 AU

    </Text>
    <Text style={styles.distance}>
    18,258,380,000,000,000 Miles
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

export default Uranus;