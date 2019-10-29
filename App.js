import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainPage from './pages/MainPage';
import TrafficPage from './pages/TrafficPage';
import EventPage from './pages/EventPage';
import ExtraPage from './pages/ExtraPage';
import SearchPage from './pages/SearchPage';
import CopyRightPage from './pages/CopyRightPage';

const App = createStackNavigator(
  {
    MainPage: { screen: MainPage },
    TrafficPage: { screen: TrafficPage },
    EventPage: { screen: EventPage },
    ExtraPage: { screen: ExtraPage },
    SearchPage: { screen: SearchPage },
    CopyRightPage : {screen: CopyRightPage},
  },
  {
    initialRouteName: 'MainPage',
  }
);

export default createAppContainer(App);
