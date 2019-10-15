import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from "./Styles";
import getLink from '../actions/getLink';

export default class BasicModalD extends Component {
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
            <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.TitleText}>
              Security and Extra Patrol Request
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.InnerText}
              onPress={() => getLink.openView("Email","")}>
              <Text   adjustsFontSizeToFit  numberOfLines={1}   style={styles.InnerText}>
                SECURITY REQUEST
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() =>getLink.openView("Email","")}>
              <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText}>EXTRA PATROL REQUEST</Text>
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