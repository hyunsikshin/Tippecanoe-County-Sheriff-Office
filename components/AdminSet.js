import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  AntDesign,
  Feather,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import ControllContainer from '../actions/ControllContainer';
import getLink from '../actions/getLink';

function AdminSet() {
  return (
    <View style={styles.container}>
      <View style={styles.cell_odd}>
        <Feather
          color="white"
          size={50}
          name="user-check"
          onPress={() => {
            getLink.getLink('Lafayette', 'phoneDirectory');
          }}
        />
        <Text>Phone Directory</Text>
      </View>
      <View style={styles.cell_even}>
        <AntDesign
          color="white"
          size={50}
          name="user"
          onPress={() => {
            getLink.getLink('Lafayette', 'adminLine');
          }}
        />
        <Text>Admin Line</Text>
      </View>
      <View style={styles.cell_odd}>
        <MaterialIcons
          color="white"
          size={50}
          name="store"
          onPress={() => {
            getLink.getLink('Lafayette', 'jobApply');
          }}
        />
        <Text>Job Apply</Text>
      </View>
      <View style={styles.cell_even}>
        <Ionicons
          color="white"
          size={50}
          name="md-arrow-round-back"
          onPress={() => ControllContainer.getInstance().openButton('Main')}
        />
        <Text>BACK</Text>
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

export default AdminSet;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell_odd: {
    width: 105,
    height: 105,
    margin: 0,
    backgroundColor: '#846C4D',
  },
  cell_even: {
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
});
