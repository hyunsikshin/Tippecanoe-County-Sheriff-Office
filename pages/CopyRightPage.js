import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';


class CopyRightPage extends Component {
  state = {
    myCount: 0,
    isLoaded: false,
    error: null,
    name: null,
    city: null,
    tempertature: null,
  };

  render() {
    return (
        <View>
            <Text>
                수지 바보
            </Text>
        </View>
    );
  }
}

export default CopyRightPage;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qnaContainer: {
    height: 23,
    width: width,
    backgroundColor: '#bdc3c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginLeft: 10,
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
     height : 10
  }
});
