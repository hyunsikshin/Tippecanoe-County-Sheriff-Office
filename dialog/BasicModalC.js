import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import getLink from '../actions/getLink';
import styles from "./Styles";

export default class BasicModalC extends Component {
  render() {
    return (
      <Modal
        style={styles.container}
        open={true}
        transparent={true}
        animationType="slide"
        closeOnTouchOutside = {false}
        disableOnBackPress = {true}
        >
        <View style={[styles.container, styles.modalBackgroundStyle]}>
          <View style={styles.Cell_Title}>
            <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.TitleText}>Sheriff's Sale</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.InnerText}
              onPress={() =>
                getLink.getLink('sheriffsSaleGuideline')
              }>
              <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText}>SHERIFF'S SALE GUIDELINE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() =>
                getLink.getLink('sheriffsSaleListing')
              }>
              <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText}>SHERIFF'S SALE LISTING</Text>
            </TouchableOpacity>

            <View style={styles.Cell_Close}>
              <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => getLink.openView("ModalView","close")}>
                <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText_close}>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}