import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Proptypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ['#00c6fb', '#005bea'],
    title: 'Rain shower! REMIXXXX!',
    subtitle: 'For more info look outside!!',
    icons: 'weather-pouring',
  },
  Clear: {
    colors: ['#fef253', '#ff7300'],
    title: 'Sunny as fuck!!',
    subtitle: "It's time to surf!!",
    icons: 'weather-sunny',
  },
  Thunderstorm: {
    colors: ['#00ecbc', '#007adf'],
    title: 'Thunder! feel the thunder!',
    subtitle: 'Lightning and the thunder! THUNDER!!!',
    icons: 'weather-lightning',
  },
  Drizzle: {
    colors: ['#89f7fe', '#66a6ff'],
    title: 'Drizzle',
    subtitle: 'Is it a raining???',
    icons: 'weather-hail',
  },
  Snow: {
    colors: ['#7de2fc', '#b9b6e5'],
    title: 'I hate fucking cold weather!!',
    subtitle: 'Do you wanna build a snowman??',
    icons: 'weather-snowy',
  },
  Clouds: {
    colors: ['#d7d2cc', '#304352'],
    title: 'Cloudy...',
    subtitle: 'Not thing to say anymore.',
    icons: 'weather-cloudy',
  },
  Haze: {
    colors: ['#89f7fe', '#66a6ff'],
    title: 'Haze',
    subtitle: 'Is it a raining???',
    icons: 'weather-fog',
  },
  Mist: {
    colors: ['#d7d2cc', '#304352'],
    title: 'Mist!',
    subtitle: 'Something is exist beyond fog!!',
    icons: 'weather-fog',
  },
};

function Weather({ temp, weatherName }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icons}
        />
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.Proptypes = {
  temp: Proptypes.number.isRequired,
  weatherName: Proptypes.string.isRequired,
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  temp: {
    fontSize: 48,
    color: 'white',
    marginTop: 10,
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 40,
  },
});
