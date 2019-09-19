import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Linking } from 'expo';

export default class Dialog extends Component {
  state = { open: false };
  render() {
    const modalBackgroundStyle = {
      backgroundColor: 'rgba(105, 89, 71, 50)',
    };
    const innerContainerTransparentStyle = {
      backgroundColor: '#fff',
      padding: 0,
    };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this.setState({ open: true })}>
          <Text>Contact</Text>
        </TouchableOpacity>

        <Modal
          offset={this.state.offset}
          open={this.state.open}
          modalDidClose={() => this.setState({ open: false })}
          style={{ alignItems: 'center' }}>
          <View style={{ modalBackgroundStyle, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Contact</Text>

            <TouchableOpacity
              style={{ margin: 10, fontSize: 20, alignItems: 'center' }}
              onPress={() => Linking.openURL('tel:7654239388')}>
              <Text>ADMINISTRATION</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ margin: 10, fontSize: 20, alignItems: 'center' }}
              onPress={() => Linking.openURL('tel:7654239321')}>
              <Text>DISPATCH</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ margin: 10, fontSize: 20, alignItems: 'center' }}
              onPress={() => Linking.openURL('tel:7654231655')}>
              <Text>JAIL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ margin: 10, alignItems: 'center' }}
              onPress={() => this.setState({ open: false })}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#2ecc71',
  },
});
