import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import IC_ARR_DOWN from '../assets/ic_arr_down.png';
import IC_ARR_UP from '../assets/ic_arr_up.png';

class QnA extends Component {
  state = {
    contents: [
      {
        title: 'Top 5 Frequently Ask Questions',
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
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
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
});
