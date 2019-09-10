import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Header';
import ButtonSet from './ButtonSet';
import background from './assets/background.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <Image style={styles.logo} source={background} />
      <ButtonSet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
  },
  logo: {
    width: 370,
    height: 200,
  },
});
