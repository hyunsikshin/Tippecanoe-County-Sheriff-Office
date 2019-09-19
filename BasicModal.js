import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import { Text, TouchableOpacity, View } from 'react-native';
import { Linking } from 'expo';
import ControllContainer from './actions/ControllContainer';


export default class BasicModal extends Component {   
  render() {
    const modalBackgroundStyle = {
      backgroundColor: 'rgba(103, 89, 71, 50)',
      offset : 0.5
    };
    return (
        <Modal
          open ={true}
          style={{ modalBackgroundStyle , alignItems: 'center' }}
          modalDidClose={() => ControllContainer.getInstance().closeModal()}
          >
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
