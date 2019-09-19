import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { sendEmail } from '../actions/SendEmail';

class MailPage extends Component {
  static navigationOptions = {
    title: 'Mail Page',
  };

  state = {
    email: 'bj.max.lim@gmail.com', //This is target email address
    title: 'This is title test.',
    content: 'This is content test.',
  };
  handleTitle = text => {
    this.setState({ title: text });
  };
  handleContent = text => {
    this.setState({ content: text });
  };
  active_send_email = () => {
    sendEmail(this.state.email, this.state.title, this.state.content);
  };

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Title"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleTitle}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Content"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleContent}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.active_send_email}>
          <Text style={styles.submitButtonText}> Send </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MailPage;

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
