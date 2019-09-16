import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import getLink from '../actions/getLink';

const ButtonSet = ({ navigate }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cell}>
          <Button
            title="a"
            onPress={() => {
              getLink.getLink('Lafayette', 'jobApply');
            }}></Button>
        </View>
        <View style={styles.cell}>
          <Text onPress={() => navigate('MailPage')}>b</Text>
        </View>
        <View style={styles.cell}>
          <Text>c</Text>
        </View>
        <View style={styles.cell}>
          <Text>d</Text>
        </View>
        <View style={styles.cell}>
          <Text>e</Text>
        </View>
        <View style={styles.cell}>
          <Text>f</Text>
        </View>
        <View style={styles.cell}>
          <Text>g</Text>
        </View>
        <View style={styles.cell}>
          <Text>h</Text>
        </View>
        <View style={styles.cell}>
          <Text>i</Text>
        </View>
      </View>
    </>
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
});
