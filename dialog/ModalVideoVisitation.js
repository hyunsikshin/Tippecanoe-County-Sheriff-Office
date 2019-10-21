import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import {
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import getLink from '../actions/getLink';
import styles from "./Styles";

export default class BasicModalB extends Component {
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
            <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.TitleText}>Video Visitation</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.InnerText}
              onPress={() =>
                getLink.getLink('videoVisitationWeb')
              }>
              <Text  
              adjustsFontSizeToFit  numberOfLines={1}
              style={styles.InnerText}
              >GTL VIDEO VISITATION WEB</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() =>
                ToastAndroid.show(
                  'There is no App on your device',
                  ToastAndroid.SHORT
                )
              }>
              <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText}>OPEN THE VISMOBILE APP</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() => getLink.getLink('downloadVismobile')}>
              <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText}>DOWNLOAD VISMOBILE APP</Text>
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