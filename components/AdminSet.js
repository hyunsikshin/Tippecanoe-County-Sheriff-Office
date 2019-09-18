import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function AdminSet() {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Text>Phone Directory</Text>
      </View>
      <View style={styles.cell}>
        <Text>Admin Line</Text>
      </View>
      <View style={styles.cell}>
        <Text>Job Apply</Text>
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
      <View style={styles.gone}>
        <Text></Text>
      </View>
    </View>
  );
}

export default AdminSet;

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