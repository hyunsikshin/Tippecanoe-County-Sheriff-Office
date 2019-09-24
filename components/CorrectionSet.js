import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';
import ControllContainer from '../actions/ControllContainer';
import getLink from '../actions/getLink';

function CorrectionSet() {
  return (
    <View style={styles.container}>
      <View style={styles.cell_odd}>
        <MaterialCommunityIcons
          color="white"
          size={60}
          name="magnify"
          onPress={() => {
            getLink.getLink('Lafayette', 'immateLookup');
          }}
        />
        <Text style={styles.text}>Inmate lookup</Text>
      </View>
      <View style={styles.cell_even}>
        <MaterialCommunityIcons
          color="white"
          size={60}
          name="store"
          onPress={() => {
            getLink.getLink('Lafayette', 'commissary');
          }}
        />
        <Text style={styles.text}>Commissary</Text>
      </View>

      <View style={styles.cell_odd}>
        <Feather
          color="white"
          size={60}
          name="video"
          onPress={() =>
            ControllContainer.getInstance().openViewName('ModalView','BasicModalB')
          }
        />
        <Text style={styles.text}>Video Visitation</Text>
      </View>
      <View style={styles.cell_even}>
        <FontAwesome
          color="white"
          size={60}
          name="users"
          onPress={() => {
            getLink.getLink('Lafayette', 'visitationPolicy');
          }}
        />
        <Text style={styles.text}>Visitation Policy</Text>
      </View>
      <View style={styles.cell_odd}>
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
    </View>
  );
}

export default CorrectionSet;

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
