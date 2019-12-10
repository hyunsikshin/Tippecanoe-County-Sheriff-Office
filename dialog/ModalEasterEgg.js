import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import { Text, TouchableOpacity, View } from 'react-native';
import getLink from '../actions/getLink';
import styles from "./Styles";

export default class ModalContackUs extends Component {
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
            <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.TitleText}>EasterEgg! Made By</Text>
          </View>
          <View style={{ alignItems: 'center' }}>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() => getLink.getLink('SujiLink')}>
              <Text adjustsFontSizeToFit  numberOfLines={1}  style={styles.InnerText}>Suji Lee</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() => getLink.getLink('JungminLink')}>
              <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText}>Jungmin Son</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() => getLink.getLink('HyunsikLink')}>
              <Text adjustsFontSizeToFit  numberOfLines={1} style={styles.InnerText}>Hyunsik Shin</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() => getLink.getLink('MingyunLink')}>
              <Text adjustsFontSizeToFit  numberOfLines={1}  style={styles.InnerText}>Mingyun Oh</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerText}
              onPress={() => getLink.getLink('ByongJoonLink')}>
              <Text adjustsFontSizeToFit  numberOfLines={1}  style={styles.InnerText}>ByoungJoon Im</Text>
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