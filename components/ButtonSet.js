import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import getLink from '../actions/getLink';

const ButtonSet = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        {/* <Button
          title="a"
          onPress={() => {
            getLink.getLink('Lafayette', 'jobApply');
          }}></Button> */}
        <Text>Admin</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => navigate('MailPage')}>Sex Offenders</Text>
      </View>
      <View style={styles.cell}>
        <Text>Corrections</Text>
      </View>
      <View style={styles.cell}>
        <Text>We-Tip</Text>
      </View>
      <View style={styles.cell}>
        <Text>Contacts</Text>
      </View>
      <View style={styles.cell}>
        <Text>Services</Text>
      </View>
      <View style={styles.cell}>
        <Text>Social Media</Text>
      </View>
      <View style={styles.cell}>
        <Text>Privacy Policy</Text>
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