import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from '../components/Header';
import ButtonScreen from '../actions/ButtonScreen';
//import ButtonSet from '../components/ButtonSet';
//import AdminSet from '../components/AdminSet';
import background from '../assets/background.jpg';
//import getLink from '../actions/getLink';


class MainPage extends Component {
  static navigationOptions = {
    title: 'Main Page',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };

  state = {
    isAdmin: false,
  };
//ButtonSet navigate={navigate}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <Image style={styles.logo} source={background} />
        <ButtonScreen/>
      </View>
    );
  }
}

export default MainPage;

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
  gone: {
    display: 'none',
  },
});
