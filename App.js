import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainPage from './pages/MainPage';
import MailPage from './pages/MailPage';
import SearchPage from './pages/SearchPage';

const App = createStackNavigator(
  {
    MainPage: { screen: MainPage },
    MailPage: { screen: MailPage },
    SearchPage: { screen: SearchPage },
  },
  {
    initialRouteName: 'MainPage',
  }
);

export default createAppContainer(App);
