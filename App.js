import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainPage from './pages/MainPage';
import MailPage from './pages/MailPage';

const App = createStackNavigator(
  {
    MainPage: { screen: MainPage },

    MailPage: { screen: MailPage },
  },
  {
    initialRouteName: 'MainPage',
  }
);





export default createAppContainer(App);
