import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ControllContainer from '../actions/ControllContainer';
import getLink from '../actions/getLink';

function ServiceSet() {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Text  onPress={() => ControllContainer.getInstance().openModal("BasicModalC")} >Sheriff's Sale</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => {getLink.getLink('Lafayette', 'gunPermits')}}>Gun Permits</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => {getLink.getLink('Lafayette', 'crashReports')}}>Crash Report</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => {getLink.getLink('Lafayette', 'recordsRequest')}}>Records Request</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => {getLink.getLink('Lafayette', 'animalControl')}}>Animal Control</Text>
      </View>
      <View style={styles.cell}>
        <Text  onPress={() => ControllContainer.getInstance().openModal("BasicModalD")} >Security and extra patrol request</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => {getLink.getLink('Lafayette', 'taxWarrants')}}>Tax Warrants</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => ControllContainer.getInstance().setMailPage()} >Traffic complaints</Text>
      </View>
      <View style={styles.cell}>
        <Text onPress={() => ControllContainer.getInstance().openButton("Main")}>BACK</Text>
      </View>
    </View>
  );
}

export default ServiceSet;

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
    backgroundColor: '#2ecc71',
  },
  gone: {
    width: 100,
    height: 100,
    margin: 5,
    opacity: 0.4,
  },
});