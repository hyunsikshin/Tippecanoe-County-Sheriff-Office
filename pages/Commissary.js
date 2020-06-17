import React, { Component } from "react";
import { WebView } from "react-native-webview";

class Commissary extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: "https://deposits.jailatm.com/webdeposits/default.aspx",
        }}
      />
    );
  }
}

Commissary.navigationOptions = {
  title: "Commissary",
};

export default Commissary;
