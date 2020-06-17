import React, { Component } from "react";
import { WebView } from "react-native-webview";

class VideoVisitation extends Component {
  render() {
    return <WebView source={{ uri: "https://tippecanoein.gtlvisitme.com" }} />;
  }
}

VideoVisitation.navigationOptions = {
  title: "VideoVisitation",
};

export default VideoVisitation;
