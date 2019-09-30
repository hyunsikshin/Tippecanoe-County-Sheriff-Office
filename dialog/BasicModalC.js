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
import { Dimensions } from "react-native";

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
            <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.TitleText}>Sheriff's Sale</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.InnerText}
              onPress={() =>
                getLink.getLink('Lafayette', 'sheriffsSaleGuideline')
              }>
              <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText}>SHERIFF'S SALE GUIDELINE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() =>
                getLink.getLink('Lafayette', 'sheriffsSaleListing')
              }>
              <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText}>SHERIFF'S SALE LISTING</Text>
            </TouchableOpacity>

            <View style={styles.Cell_Close}>
              <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => ControllContainer.getInstance().openViewName("ModalView","close")}>
                <Text adjustsFontSizeToFit  numberOfLines={1} style={{ fontSize: 30 }}>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
var width = Dimensions.get('window').width
const styles = StyleSheet.create({
  TitleText: {
    textAlignVertical: "center",
    textAlign: "center",
    color: 'white',
    alignItems: 'center',
    fontSize:0.05*width,
    padding: 5,
  },

  InnerText: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize:0.05*width,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },

  Cell_Title: {
    width: 0.8*width,
    height: 52,
    margin: 5,
    backgroundColor: '#55330E',
    alignItems: 'center',
    marginBottom: 5,
  },

  Cell_Close: {
    width: 0.8*width,
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
