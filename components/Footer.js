import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import getLink from '../actions/getLink';

const Footer = () => {
  return (
    <View style={styles.container}>
      <FontAwesome
        color="white"
        size={30}
        name="twitter-square"
        onPress={() => {
          getLink.getLink('twitter');
        }}
      />
      <FontAwesome
        color="white"
        size={30}
        name="facebook-square"
        onPress={() => {
          getLink.getLink('facebook');
        }}
      />
      <FontAwesome
        color="white"
        size={30}
        name="instagram"
        onPress={() => {
          getLink.getLink('instargram');
        }}
      />
    </View>
  );
};

export default Footer;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-around',
    backgroundColor: '#a4b0be',
    padding: 5,
  },
});
