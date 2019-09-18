import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from '../components/Header';
import ButtonSet from '../components/ButtonSet';
import AdminSet from '../components/AdminSet';
import background from '../assets/background.jpg';
import getLink from '../actions/getLink';

const API_KEY = 'e02b7ad151e0ceafbbe427b2ac4dbc2f'; //날씨 api key

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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error,
        });
      }
    );
  }

  _getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          city: json.name,
          name: json.weather[0].main,
          tempertature: json.main.temp,
          isLoaded: true,
        });
      });
  };

  state = {
    isLoaded: false,
    error: null,
    name: null,
    city: null,
    tempertature: null,
  };

  render() {
    const { isLoaded, error, tempertature, name, city } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header
          style={styles.header}
          temp={Math.ceil(((tempertature - 273.15) * 9) / 5 + 32)}
          city={city}
          weatherName={name}
        />
        <Image style={styles.logo} source={background} />
        <ButtonSet navigate={navigate} />
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
