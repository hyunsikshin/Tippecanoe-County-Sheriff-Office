import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import Weather from '../components/Weather';
import ButtonScreen from '../actions/ButtonScreen';
import ControllContainer from '../actions/ControllContainer';
import { BackHandler } from 'react-native';
import MailPage from './MailPage';
import Logo from '../assets/logo.svg';
import ButtonSet from '../components/ButtonSet';
import { Dimensions } from "react-native";
import getLink from '../actions/getLink';


const API_KEY = 'e02b7ad151e0ceafbbe427b2ac4dbc2f'; //날씨 api key

class MainPage extends Component {
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
    if (ControllContainer.getInstance().getViewName('Modal') == '')
      ControllContainer.getInstance().openViewName('ModalView', 'close');
    else if (
      ControllContainer.getInstance().getViewName('ButtonView') == 'Main'
    )
      return false;
    else ControllContainer.getInstance().openViewName('ButtonView', 'Main');
    return true;
  }

  static navigationOptions = {
    title: 'Main Page',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#5A4E40',
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
      <ScrollView style={{ backgroundColor: '#5A4E40' }}>
        <View style={styles.container}>
          <Button title="Go to Search" onPress={() => navigate('SearchPage')} />
          <View style={ styles.qnaContainer}>
            <Text
            onPress={() => {
              getLink.getLink('Lafayette', 'qna');
            }}
            >Q&A</Text>
          </View>
          <Weather
            style={styles.header}
            temp={Math.ceil(((tempertature - 273.15) * 9) / 5 + 32)}
            city={city}
            weatherName={name}
          />
          <Logo width={380} height={200} />
          <ButtonSet />
          {ControllContainer.getInstance().checkModal()}
        </View>
      </ScrollView>
    );
  }
}

export default MainPage;

var width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A4E40',
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
});
