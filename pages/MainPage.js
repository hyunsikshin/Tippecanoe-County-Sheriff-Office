import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Dimensions,
  BackHandler,
} from 'react-native';
import Weather from '../components/Weather';
import ButtonScreen from '../actions/ButtonScreen';
import ControllContainer from '../actions/ControllContainer';
import MailPage from './MailPage';
import Logo from '../assets/logo.svg';
import ButtonSet from '../components/ButtonSet';
import Footer from '../components/Footer';
import getLink from '../actions/getLink';

const API_KEY = 'e02b7ad151e0ceafbbe427b2ac4dbc2f'; //날씨 api key

class MainPage extends Component {
  state = {
    isLoaded: false,
    error: null,
    name: null,
    city: null,
    tempertature: null,
  };

  constructor(props) {
    super(props);
    ControllContainer.getInstance().intitObject('', this);
    console.disableYellowBox = true;
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick() {
    return true;
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
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
        this.setState({
          city: json.name,
          name: json.weather[0].main,
          tempertature: json.main.temp,
          isLoaded: true,
        });
      });
  };



  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ backgroundColor: '#f1f2f6' }}>
        <View style={styles.container}>
          <Button title="Go to Search" onPress={() => navigate('SearchPage')} />
          <View style={styles.qnaContainer}>
            <Text
              onPress={() => {
                getLink.getLink('Lafayette', 'qna');
              }}>
              Q&A
            </Text>
          </View>
          <Weather
            style={styles.header}
            temp={Math.ceil(((this.state.tempertature - 273.15) * 9) / 5 + 32)}
            city={this.state.city}
            weatherName={this.state.name}
          />
          <Logo width={380} height={200} />
          <ButtonSet />
          <Footer />
          {ControllContainer.getInstance().checkModal()}
        </View>
      </ScrollView>
    );
  }
}

export default MainPage;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
  },

  qnaContainer: {
    backgroundColor: '#228B22',
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
    height: 30,
  },
});
