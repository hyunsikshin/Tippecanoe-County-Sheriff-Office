import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import tipslogo from '../assets/tipslogo.png';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: 'weather-pouring',
  Clear: 'weather-sunny',
  Thunderstorm: 'weather-lightning',
  Drizzle: 'weather-hail',
  Snow: 'weather-snowy',
  Clouds: 'weather-cloudy',
  Haze: 'weather-fog',
  Mist: 'weather-fog',
};

function Weather({ temp, city, weatherName }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color="white"
        size={30}
        name={weatherCases[weatherName]}
      />
      <Text style={styles.temp}>{city}</Text>
      <Text style={styles.temp}> {temp}°F</Text>
    </View>
  );
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
  },
  temp: {
    fontSize: 20,
    color: 'white',
  },
  vertical_con: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
  },
});
