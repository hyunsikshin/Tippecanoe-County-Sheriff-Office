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
import styles from "./Styles";

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
                <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText_close}>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}