import React, { Component } from "react";
import { WebView } from "react-native-webview";

class CrashReport extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "http://www.tippecanoe.in.gov/486/Crash-Reports" }}
      />
    );
  }
}

CrashReport.navigationOptions = {
  title: "CrashReport",
};

export default CrashReport;
