import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import down from '../assets/down.png';
import up from '../assets/up.png';
import Megaphone from '../assets/megaphone.svg';

class QnA extends Component {
  state = {
    contents: [
      {
        title: '  Top 5 Frequently Ask Questions',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
          {this.state.contents
            ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={down}
                    visibleImage={up}
                    header={
                      <View style={styles.qna}>
                           <Megaphone
                           style = {{marginLeft: 5,}}
                            height={styles.icon_size.height}
                            width={styles.icon_size.width}/>
                        <Text
                          style={{
                            fontSize: 13,
                            color: 'black',
                          }}>
                          {param.title}
                        </Text>
                      </View>
                    }>
                    <Text
                      style={[
                        styles.txt,
                        {
                          fontSize: 20,
                        },
                      ]}>
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
            : null}
        </ScrollView>
      </View>
    );
  }
}

export default QnA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
    
  },
  icon_size: {
    width: 20,
    height: 20,
    
  },
  qna: {
   display : 'flex',
   flexDirection : 'row',
   alignItems: 'center',
  }
});
