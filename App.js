import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import CopyRightPage from './pages/CopyRightPage';

const App = createStackNavigator(
  {
    MainPage: { screen: MainPage },
    SearchPage: { screen: SearchPage },
    CopyRightPage: { screen: CopyRightPage },
  },
  {
    initialRouteName: 'MainPage',
  }
);

export default createAppContainer(App);
