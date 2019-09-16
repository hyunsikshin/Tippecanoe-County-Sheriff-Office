import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function AdminSet() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cell}>
          <Text>aa</Text>
        </View>
        <View style={styles.cell}>
          <Text>ab</Text>
        </View>
        <View style={styles.cell}>
          <Text>ac</Text>
        </View>
        <View style={styles.cell}>
          <Text>ad</Text>
        </View>
        <View style={styles.cell}>
          <Text>ae</Text>
        </View>
        <View style={styles.cell}>
          <Text>af</Text>
        </View>
        <View style={styles.cell}>
          <Text>ag</Text>
        </View>
        <View style={styles.cell}>
          <Text>ah</Text>
        </View>
        <View style={styles.cell}>
          <Text>ai</Text>
        </View>
      </View>
    </>
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
});
