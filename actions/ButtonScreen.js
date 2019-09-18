import React, { Component } from 'react';
import { View } from 'react-native';
import ControllContainer from './ControllContainer';

export default class ButtonScreen  extends Component {
    constructor(){
      super();
      ControllContainer.getInstance().initButtonControl(this);
    }

    render() {
      return (
        <View >
           {ControllContainer.getInstance().checkItems("Button")}
        </View>
      );
    }

  }
  