import React, { Component } from "react";
import { WebView } from "react-native-webview";

class SexOffender extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "http://www.icrimewatch.net/index.php?AgencyID=54758" }}
      />
    );
  }
}

SexOffender.navigationOptions = {
  title: "SexOffender",
};

export default SexOffender;
