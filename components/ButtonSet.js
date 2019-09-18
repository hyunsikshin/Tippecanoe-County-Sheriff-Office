import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import getLink from '../actions/getLink';
import ControllContainer from '../actions/ControllContainer';


const ButtonSet = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Text onPress={() => ControllContainer.getInstance().openButton("Admin")} >Admin</Text>
      </View>
      <View style={styles.cell}>
        <Text  onPress={() => {getLink.getLink('Lafayette', 'sexOffenders')}}>Sex Offenders</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => ControllContainer.getInstance().openButton("Corrections")}>Corrections</Text>
      </View>
      <View style={styles.cell}>
        <Text  onPress={() => {getLink.getLink('Lafayette', 'weTip')}} >We-Tip</Text>
      </View>
      <View style={styles.cell}>
        <Text  onPress={() => ControllContainer.getInstance().openModal("BasicModalA")} >Contacts</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => ControllContainer.getInstance().openButton("Service")}>Services</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => ControllContainer.getInstance().openButton("SocialMedia")}>Social Media</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => {getLink.getLink('Lafayette', 'privacyPolicy')}}>Privacy Policy</Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
    </View>
  );
};

export default ButtonSet;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#3498db',
  },
  gone: {
    width: 100,
    height: 100,
    margin: 5,
    opacity: 0.4,
  },
});
