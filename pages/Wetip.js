import React, { Component } from "react";
import { WebView } from "react-native-webview";

class Wetip extends Component {
  render() {
    return <WebView source={{ uri: "https://wetip.com" }} />;
  }
}

Wetip.navigationOptions = {
  title: "Wetip",
};

export default Wetip;
