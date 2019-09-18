import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function ServiceSet() {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Text>Sheriff's Sale</Text>
      </View>
      <View style={styles.cell}>
        <Text>Gun Permits</Text>
      </View>
      <View style={styles.cell}>
        <Text>Crash Report</Text>
      </View>
      <View style={styles.cell}>
        <Text>Records Request</Text>
      </View>
      <View style={styles.cell}>
        <Text>Animal Control</Text>
      </View>
      <View style={styles.cell}>
        <Text>Security and extra patrol request</Text>
      </View>
      <View style={styles.cell}>
        <Text>Tax Warrants</Text>
      </View>
      <View style={styles.cell}>
        <Text>Traffic complaints</Text>
      </View>
      <View style={styles.cell}>
        <Text>BACK</Text>
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