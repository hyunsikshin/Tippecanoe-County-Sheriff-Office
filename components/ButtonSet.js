import React from 'react';
import { StyleSheet, Text, View, Linking, Button } from 'react-native';
import {
  FontAwesome,
  Feather,
  Entypo,
  SimpleLineIcons,
} from '@expo/vector-icons';
import ControllContainer from '../actions/ControllContainer';
import getLink from '../actions/getLink';

const ButtonSet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cell_odd}>
        <FontAwesome
          color="white"
          size={50}
          name="building-o"
          onPress={() => ControllContainer.getInstance().openButton('Admin')}
        />
        <Text style={styles.text}>Admin</Text>
      </View>
      <View style={styles.cell_even}>
        <FontAwesome
          color="white"
          size={50}
          name="address-card-o"
          onPress={() => {
            getLink.getLink('Lafayette', 'sexOffenders');
          }}
        />
        <Text style={styles.text}>Sex Offenders</Text>
      </View>
      <View style={styles.cell_odd}>
        <Feather
          color="white"
          size={50}
          name="star"
          onPress={() =>
            ControllContainer.getInstance().openButton('Corrections')
          }
        />
        <Text style={styles.text}>Corrections</Text>
      </View>
      <View style={styles.cell_even}>
        <Entypo
          color="white"
          size={50}
          name="light-bulb"
          onPress={() => {
            getLink.getLink('Lafayette', 'weTip');
          }}
        />
        <Text style={styles.text}>We-Tip</Text>
      </View>
      <View style={styles.cell_odd}>
        <SimpleLineIcons
          color="white"
          size={50}
          name="people"
          onPress={() =>
            ControllContainer.getInstance().openModal('BasicModalA')
          }
        />
        <Text style={styles.text}>Contacts</Text>
      </View>
      <View style={styles.cell_even}>
        <Entypo
          color="white"
          size={50}
          name="hand"
          onPress={() => ControllContainer.getInstance().openButton('Service')}
        />
        <Text style={styles.text}>Services</Text>
      </View>
      <View style={styles.cell_odd}>
        <Feather
          color="white"
          size={50}
          name="globe"
          onPress={() =>
            ControllContainer.getInstance().openButton('SocialMedia')
          }
        />
        <Text style={styles.text}>Social Media</Text>
      </View>
      <View style={styles.cell_even}>
        <Feather
          color="white"
          size={50}
          name="phone"
          onPress={() => {
            getLink.getLink('Lafayette', 'privacyPolicy');
          }}
        />
        <Text style={styles.text}>Privacy Policy</Text>
      </View>
      <View style={styles.gone}>
        <Text></Text>
      </View>
    </View>
  );
};

export default ButtonSet;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell_odd: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 105,
    margin: 0,
    backgroundColor: '#846C4D',
  },
  cell_even: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 105,
    margin: 0,
    backgroundColor: '#998668',
  },
  gone: {
    width: 105,
    height: 105,
    margin: 0,
    opacity: 0.4,
  },
  text: {
    color: 'white',
  },
});
