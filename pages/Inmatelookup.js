import React, { Component } from "react";
import { WebView } from "react-native-webview";

class Inmatelookup extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: "http://www3.tippecanoe.in.gov/InmateListing/InmateSearch.aspx",
        }}
      />
    );
  }
}

Inmatelookup.navigationOptions = {
  title: "Inmatelookup",
};

export default Inmatelookup;
