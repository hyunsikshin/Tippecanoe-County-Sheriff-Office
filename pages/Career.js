import React, { Component } from "react";
import { WebView } from "react-native-webview";

class Career extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://www.tippecanoe.in.gov/470/Employment" }}
      />
    );
  }
}

Career.navigationOptions = {
  title: "Career",
};

export default Career;
