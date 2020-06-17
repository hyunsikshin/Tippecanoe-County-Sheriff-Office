import React, { Component } from "react";
import { WebView } from "react-native-webview";

class TaxWarrants extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "http://www.tippecanoe.in.gov/480/Tax-Warrants" }}
      />
    );
  }
}

TaxWarrants.navigationOptions = {
  title: "TaxWarrants",
};

export default TaxWarrants;
