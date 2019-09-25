import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
  ToastAndroid,
} from 'react-native';
import { Linking } from 'expo';
import ControllContainer from '../actions/ControllContainer';
import getLink from '../actions/getLink';

export default class BasicModalC extends Component {
  render() {
    return (
      <Modal
        style={styles.container}
        open={true}
        transparent={true}
        animationType="slide"
        modalDidClose={() => ControllContainer.getInstance().openViewName("ModalView","close")}>
        <View style={[styles.container, styles.modalBackgroundStyle]}>
          <View style={styles.Cell_Title}>
            <Text style={styles.TitleText}>Sheriff's Slae</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.InnerText}
              onPress={() =>
                getLink.getLink('Lafayette', 'sheriffsSaleGuideline')
              }>
              <Text style={styles.InnerText}>SHERIFF'S SALE GUIDELINE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() =>
                getLink.getLink('Lafayette', 'sheriffsSaleListing')
              }>
              <Text style={styles.InnerText}>SHERIFF'S SALE LISTING</Text>
            </TouchableOpacity>

            <View style={styles.Cell_Close}>
              <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => ControllContainer.getInstance().openViewName("ModalView","close")}>
                <Text style={{ fontSize: 30 }}>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    padding: 5,
  },

  InnerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },

  Cell_Title: {
    width: 330,
    height: 52,
    margin: 5,
    backgroundColor: '#55330E',
    alignItems: 'center',
    marginBottom: 5,
  },

  Cell_Close: {
    width: 300,
    height: 45,
    marginVertical: 10,
    padding: 5,
    backgroundColor: '#D6D8D7',
  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(78,62,46, 1)',
    margin: -10,
    alignItems: 'center',
  },
});
