import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  BackHandler,
  Platform
} from 'react-native';
import Weather from '../components/Weather';
import ControllContainer from '../actions/ControllContainer';
import Logo from '../assets/logo.svg';
import ButtonSet from '../components/ButtonSet';
import QnA from '../components/QnA';
import getLink from '../actions/getLink';
import Down from '../assets/buttonIcons/List.svg';

const API_KEY = 'e02b7ad151e0ceafbbe427b2ac4dbc2f'; //날씨 api key

class MainPage extends Component {
  state = {
    myCount: 0,
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

  countUpClickButton() {
    this.state.myCount = this.state.myCount + 1;
    if (this.state.myCount >= 10) {
      this.state.myCount = 0;
      ControllContainer.getInstance().openViewName('Email', null);
    }
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
          <View style={styles.horizontal}>
            <Weather
              temp={Math.ceil(
                ((this.state.tempertature - 273.15) * 9) / 5 + 32
              )}
              city={this.state.city}
              weatherName={this.state.name}
            />
            {/* <Down
              style={styles.btn}
              height="30"
              width="30"
              name="down"
              onPress={() => navigate('SearchPage')}
            /> */}
          </View>
          <View style={styles.space}></View>
          <Logo width={width * 0.95} height={height * 0.25} />
          <View style={styles.space}></View>
          <QnA />
          <View style={styles.space}></View>
          <ButtonSet />
          {ControllContainer.getInstance().checkModal()}
          <Button
            title="저작권"
            onPress={() => navigate('CopyRightPage')}></Button>
        </View>
      </ScrollView>
    );
  }
}

export default MainPage;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qnaContainer: {
    height: 23,
    width: width,
    backgroundColor: '#bdc3c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginLeft: 10,
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
    height: 10,
  },
});
