import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Clouds from '../assets/weather/weather-cloudy.svg';
import Rain from '../assets/weather/weather-pouring.svg';
import Clear from '../assets/weather/weather-sunny.svg';
import Thunderstorm from '../assets/weather/weather-lightning.svg';
import Snow from '../assets/weather/weather-snowy';
import Drizzle from '../assets/weather/weather-hail';
import Mist from '../assets/weather/weather-fog';

function Weather({ temp, city, weatherName }) {
  switch (weatherName) {
    case 'Rain':
      return (
        <View style={styles.container}>
          <Rain height="30" width="30" />
          <Text style={styles.temp}>{city}</Text>
          <Text style={styles.temp}> {temp}°F</Text>
        </View>
      );

    case 'Clear':
      return (
        <View style={styles.container}>
          <Clear height="30" width="30" />
          <Text style={styles.temp}>{city}</Text>
          <Text style={styles.temp}> {temp}°F</Text>
        </View>
      );
    case 'Thunderstorm':
      return (
        <View style={styles.container}>
          <Thunderstorm height="30" width="30" />
          <Text style={styles.temp}>{city}</Text>
          <Text style={styles.temp}> {temp}°F</Text>
        </View>
      );
    case 'Drizzle':
      return (
        <View style={styles.container}>
          <Drizzle height="30" width="30" />
          <Text style={styles.temp}>{city}</Text>
          <Text style={styles.temp}> {temp}°F</Text>
        </View>
      );
    case 'Snow':
      return (
        <View style={styles.container}>
          <Snow height="30" width="30" />
          <Text style={styles.temp}>{city}</Text>
          <Text style={styles.temp}> {temp}°F</Text>
        </View>
      );
    case 'Clouds':
      return (
        <View style={styles.container}>
          <Clouds height="30" width="30" />
          <Text style={styles.temp}>{city}</Text>
          <Text style={styles.temp}> {temp}°F</Text>
        </View>
      );
    case 'Haze':
      return (
        <View style={styles.container}>
          <Haze height="30" width="30" />
          <Text style={styles.temp}>{city}</Text>
          <Text style={styles.temp}> {temp}°F</Text>
        </View>
      );
    case 'Mist':
      return (
        <View style={styles.container}>
          <Mist height="30" width="30" />
          <Text style={styles.temp}>{city}</Text>
          <Text style={styles.temp}> {temp}°F</Text>
        </View>
      );

    default:
      return (
        <View style={styles.container}>
          <Text>Update Weather..</Text>
        </View>
      );
  }
}
export default Weather;

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  temp: {
    marginLeft: 5,
    fontSize: 20,
    color: 'black',
  },
  vertical_con: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
  },
});
