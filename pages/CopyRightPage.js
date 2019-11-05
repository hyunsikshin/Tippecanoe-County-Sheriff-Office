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
            Icon made by Freepik from www.flaticon.com   
            </Text>
            <Text>
            Icon made by Phatplus from www.flaticon.com   
            </Text>
            <Text>
            Icon made by Linector from www.flaticon.com 
            </Text>
            <Text>
            Icon made by Payunkeed from www.flaticon.com
            </Text>
            <Text>
            Icon made by itim2101 from www.flaticon.com
            </Text>
            <Text>
            Icon made by icongeek26 from www.flaticon.com
            </Text>
            <Text>
            Icon made by Freepik from www.flaticon.com 
            </Text>
            <Text>
            Icon made by DariusDan from www.flaticon.com
            </Text>
            <Text>
            Icon made by photo3idea_studio from www.flaticon.com
            </Text>
            <Text>
            Icon made by Euclayp from www.flaticon.com
            </Text>
            <Text>
            Icon made by Eucalyp from www.flaticon.com
            </Text>
            <Text>
            Icon made by Freepik from www.flaticon.com
            </Text>
            <Text>
            Icon made by surang from www.flaticon.com
            </Text>
            <Text>
            Icon made by itim2101 from www.flaticon.com
            </Text>
            <Text>
            Icon made by Freepik from www.flaticon.com
            </Text>
            <Text>
            Icon made by Becris from www.flaticon.com
            </Text>
            <Text>
             Icon made by dDara from www.flaticon.com
            </Text>
            <Text>
             Icon made by Freepik from www.flaticon.com
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
