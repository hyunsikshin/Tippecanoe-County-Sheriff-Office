import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import tipslogo from '../assets/tipslogo.png';

function Header() {
  return (
    <View style={styles.container}>
      <Image style={{ width: 150, height: 60 }} source={tipslogo} />
      <Text style={styles.temp}>Weather</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  temp: {
    fontSize: 20,
    color: 'black',
  },
});
