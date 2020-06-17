import React, { Component } from "react";
import { WebView } from "react-native-webview";

class Gun extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "http://www.tippecanoe.in.gov/477/Firearm-Permits" }}
      />
    );
  }
}

Gun.navigationOptions = {
  title: "Gun Permits",
};

export default Gun;
