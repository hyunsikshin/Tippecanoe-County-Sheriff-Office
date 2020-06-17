import React, { Component } from "react";
import { WebView } from "react-native-webview";

class VisitationPolicy extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: "https://www.tippecanoe.in.gov/468/Inmate-Visitation-Policy",
        }}
      />
    );
  }
}

VisitationPolicy.navigationOptions = {
  title: "VisitationPolicy",
};

export default VisitationPolicy;
