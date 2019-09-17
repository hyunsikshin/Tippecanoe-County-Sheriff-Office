import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function CorrectionSet() {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Text>Inmate lookup</Text>
      </View>
      <View style={styles.cell}>
        <Text>Commissary</Text>
      </View>
      <View style={styles.cell}>
        <Text>Video Visitation</Text>
      </View>
      <View style={styles.cell}>
        <Text>Visitation Policy</Text>
      </View>
      <View style={styles.cell}>
        <Text>BACK</Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
    </View>
  );
}

export default CorrectionSet;

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
