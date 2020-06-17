import React, { Component } from "react";
import { WebView } from "react-native-webview";

class RecordRequest extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: "http://www.tippecanoe.in.gov/524/Public-Record-Requests",
        }}
      />
    );
  }
}

RecordRequest.navigationOptions = {
  title: "RecordRequest",
};

export default RecordRequest;
