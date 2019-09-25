import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';
import ControllContainer from '../actions/ControllContainer';
import getLink from '../actions/getLink';

function ServiceSet() {
  return (
    <View style={styles.container}>
      <View style={styles.cell_odd}>
        <MaterialCommunityIcons
          color="white"
          size={50}
          name="sale"
          onPress={() =>
            ControllContainer.getInstance().openViewName('ModalView','BasicModalC')
          }
        />
        <Text style={styles.text}>Sheriff's Sale</Text>
      </View>
      <View style={styles.cell_even}>
        <MaterialCommunityIcons
          color="white"
          size={50}
          name="clipboard-account"
          onPress={() => {
            getLink.getLink('Lafayette', 'gunPermits');
          }}
        />
        <Text style={styles.text}>Gun Permits</Text>
      </View>
      <View style={styles.cell_odd}>
        <AntDesign
          color="white"
          size={50}
          name="car"
          onPress={() => {
            getLink.getLink('Lafayette', 'crashReports');
          }}
        />
        <Text style={styles.text}>Crash Report</Text>
      </View>
      <View style={styles.cell_even}>
        <MaterialCommunityIcons
          color="white"
          size={50}
          name="account-search"
          onPress={() => {
            getLink.getLink('Lafayette', 'recordsRequest');
          }}
        />
        <Text style={styles.text}>Records Request</Text>
      </View>
      <View style={styles.cell_odd}>
        <MaterialCommunityIcons
          color="white"
          size={50}
          name="dog-side"
          onPress={() => {
            getLink.getLink('Lafayette', 'animalControl');
          }}
        />
        <Text style={styles.text}>Animal Control</Text>
      </View>

      <View style={styles.cell_even}>
        <MaterialCommunityIcons
          color="white"
          size={50}
          name="security"
          onPress={() =>
            ControllContainer.getInstance().openViewName('ModalView','BasicModalD')
          }
        />
        <Text style={styles.text}>Security and extra patrol request</Text>
      </View>
      <View style={styles.cell_odd}>
        <MaterialIcons
          color="white"
          size={50}
          name="monetization-on"
          onPress={() => {
            getLink.getLink('Lafayette', 'taxWarrants');
          }}
        />
        <Text style={styles.text}>Tax Warrants</Text>
      </View>

      <View style={styles.cell_even}>
        <Entypo
          color="white"
          size={50}
          name="traffic-cone"
          onPress={() => ControllContainer.getInstance().openViewName("Email","")}
        />
        <Text style={styles.text}>Traffic complaints</Text>
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
    </View>
  );
}

export default ServiceSet;

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
