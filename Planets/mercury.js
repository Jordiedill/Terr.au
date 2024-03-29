import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";
import getEnvVars from "../environment";
const { apiUrl } = getEnvVars();

export default class Mercury extends Component {
  constructor(props) {
    super(props);
    this.state = {
      au: ".87 AU",
      mi: "80,871,552 miles"
    };
  }

  //   componentDidMount() {
  //     axios.get(`/auth?app_id=${apiUrl.amplitudeApiKey}&app_secret=${apiUrl.amplitudeApiSecret}`)
  //     .then((response) => {
  //         console.log('this is JWT: ', response)
  //         let apiToken = response.data.token;
  //         axios.get('/positions/mercury', {
  //             params: {
  //                 Authorization: "Bearer " + apiToken,
  //                 lat: 30.267153,
  //                 lon: -97.743057,
  //                 from_year: 2019,
  //                 from_month: 7,
  //                 from_day: 15,
  //                 to_year: 2019,
  //                 to_month: 8,
  //                 to_day: 8

  //             }
  //         })
  //         .then((results) => {
  //             let auDistance = results.data.table.rows[0].cells[0].from_earth.au;
  //             let kmDistance = results.data.table.rows[0].cells[0].from_earth.km;
  //             this.setState({
  //                 au: auDistance,
  //                 km: kmDistance
  //             })
  //             console.log(results);
  //         }).catch((err) => {
  //             console.log(err);
  //         })
  //     })
  //   }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 350, height: 350 }}
          source={{
            uri: "https://media.giphy.com/media/l0HlO4V8iCRME3i0g/giphy.gif"
          }}
        />
        <Text style={styles.name}>Mercury</Text>
        <Text style={styles.distance}>{this.state.au}</Text>
        <Text style={styles.distance}>{this.state.mi}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  },
  distance: {
    color: "#fff",
    fontSize: 20
  },
  name: {
    color: "#fff",
    margin: 100,
    fontSize: 40,
    fontWeight: "bold"
  }
});
