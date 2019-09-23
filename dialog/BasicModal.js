import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import { Text, TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import { Linking } from 'expo';
import ControllContainer from '../actions/ControllContainer';
import getLink from '../actions/getLink';

export default class BasicModal extends Component {
  render() {
    const modalBackgroundStyle = {
      backgroundColor: 'rgba(105, 89, 71, 50)',
      offset: 0.5,
    };
    return (
      <Modal
        open={true}
        style={{ modalBackgroundStyle, alignItems: 'center' }}
        modalDidClose={() => ControllContainer.getInstance().closeModal()}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Contact</Text>
          <TouchableOpacity
            style={{ margin: 10, fontSize: 20, alignItems: 'center' }}
            onPress={() => Linking.openURL('tel:7654239388')}>
            <Text>wwwwwwww</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10, alignItems: 'center' }}
            onPress={() => ControllContainer.getInstance().closeModal()}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  TitleText: {
    color: 'white',
    alignItems: 'center',
    fontSize: 40,
  },

  InnerText: {
    fontSize: 40,
    color: 'white',
    textDecorationLine: 'underline',
  },

  Cell_Title: {
    width: 330,
    height: 55,
    margin: 5,
    backgroundColor: '#55330E',
    alignItems: 'center',
  },

  Cell_Close: {
    width: 300,
    height: 45,
    marginVertical: 10,
    backgroundColor: '#D6D8D7',
  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(78,62,46, 1)',
    margin: -10,
    alignItems: 'center',
  },
});
