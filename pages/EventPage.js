import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { sendEmail } from '../actions/SendEmail';

const EventPage = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  const [request, setRequest] = React.useState('');
  const [area, setArea] = useState('');
  const [time, setTime] = useState('');
  const [info, setInfo] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  active_send_email = () => {
    sendEmail('tlshdtlr@gmail.com', name, request);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Name"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={text => setName(text)}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Phone"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={text => setPhone(text)}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Request"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={text => setRequest(text)}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Area"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={text => setArea(text)}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Info"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={text => setInfo(text)}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={this.active_send_email}>
        <Text style={styles.submitButtonText}> Send </Text>
      </TouchableOpacity>
    </View>
  );
};

EventPage.navigationOptions = {
  title: 'Event Page',
};

export default EventPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
