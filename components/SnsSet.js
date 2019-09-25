import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ControllContainer from '../actions/ControllContainer';
import getLink from '../actions/getLink';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

function SnsSet() {
  return (
    <View style={styles.container}>
      <View style={styles.cell_odd}>
        <AntDesign
          color="white"
          size={60}
          name="facebook-square"
          onPress={() => {
            getLink.getLink('Lafayette', 'faceBook');
          }}
        />
        <Text style={styles.text}>Facebook</Text>
      </View>
      <View style={styles.cell_even}>
        <FontAwesome
          color="white"
          size={50}
          name="twitter-square"
          onPress={() => {
            getLink.getLink('Lafayette', 'twitter');
          }}
        />
        <Text style={styles.text}>Twitter</Text>
      </View>
      <View style={styles.cell_odd}>
        <AntDesign
          color="white"
          size={50}
          name="instagram"
          onPress={() => {
            getLink.getLink('Lafayette', 'instargram');
          }}
        />
        <Text style={styles.text}>Instagram</Text>
      </View>
      <View style={styles.cell_even}>
        <Ionicons
          color="white"
          size={50}
          name="md-arrow-round-back"
          onPress={() => ControllContainer.getInstance().openViewName('ButtonView','Main')}
        />
        <Text style={styles.text}>BACK</Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
    </View>
  );
}

export default SnsSet;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell_odd: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 105,
    margin: 0,
    backgroundColor: '#846C4D',
  },
  cell_even: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 105,
    margin: 0,
    backgroundColor: '#998668',
  },
  gone: {
    width: 105,
    height: 105,
    margin: 0,
    opacity: 0.4,
  },
  text: {
    color: 'white',
  },
});
