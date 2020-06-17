import React, { Component } from "react";
import { WebView } from "react-native-webview";

class AnimalControl extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "http://www.tippecanoe.in.gov/473/Animal-Control" }}
      />
    );
  }
}

AnimalControl.navigationOptions = {
  title: "AnimalControl",
};

export default AnimalControl;
