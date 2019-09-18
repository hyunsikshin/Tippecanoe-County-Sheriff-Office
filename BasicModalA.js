import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Linking } from 'expo';
import ControllContainer from './actions/ControllContainer';

export default class BasicModalA extends Component {
  render() {
    const modalBackgroundStyle = {
      backgroundColor: 'rgba(103, 89, 71, 50)',
    };

    return (
      <Modal
      open ={true}
      offset = { 0 }
      style={{ modalBackgroundStyle , alignItems: 'center' }}
      modalDidClose={() => ControllContainer.getInstance().closeModal()}
      >
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Contact</Text>
        <TouchableOpacity
          style={{ margin: 10, fontSize: 20, alignItems: 'center' }}
          onPress={() => Linking.openURL('tel:7654239388')}>
          <Text>모달 테스트 2</Text>
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
