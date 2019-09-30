import React from 'react';
import { StyleSheet, Text, View, Linking, Button } from 'react-native';
import {
  FontAwesome,
  Feather,
  Entypo,
  SimpleLineIcons,
  AntDesign,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import ControllContainer from '../actions/ControllContainer';
import getLink from '../actions/getLink';

const ButtonSet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cell_odd}>
        <Feather
          color="white"
          size={50}
          name="user-check"
          onPress={() => {
            getLink.getLink('Lafayette', 'phoneDirectory');
          }}
        />
        <Text style={styles.text}>Phone Directory</Text>
      </View>
      <View style={styles.cell_even}>
        <AntDesign
          color="white"
          size={50}
          name="user"
          onPress={() => {
            getLink.getLink('Lafayette', 'adminLine');
          }}
        />
        <Text style={styles.text}>Admin Line</Text>
      </View>
      <View style={styles.cell_odd}>
        <MaterialIcons
          color="white"
          size={50}
          name="store"
          onPress={() => {
            getLink.getLink('Lafayette', 'jobApply');
          }}
        />
        <Text style={styles.text}>Job Apply</Text>
      </View>
      <View style={styles.cell_even}>
        <MaterialCommunityIcons
          color="white"
          size={60}
          name="store"
          onPress={() => {
            getLink.getLink('Lafayette', 'commissary');
          }}
        />
        <Text style={styles.text}>Commissary</Text>
      </View>

      <View style={styles.cell_odd}>
        <Feather
          color="white"
          size={60}
          name="video"
          onPress={() =>
            ControllContainer.getInstance().openViewName(
              'ModalView',
              'BasicModalB'
            )
          }
        />
        <Text style={styles.text}>Video Visitation</Text>
      </View>
      <View style={styles.cell_even}>
        <FontAwesome
          color="white"
          size={60}
          name="users"
          onPress={() => {
            getLink.getLink('Lafayette', 'visitationPolicy');
          }}
        />
        <Text style={styles.text}>Visitation Policy</Text>
      </View>
      <View style={styles.cell_odd}>
        <MaterialCommunityIcons
          color="white"
          size={60}
          name="magnify"
          onPress={() => {
            getLink.getLink('Lafayette', 'immateLookup');
          }}
        />
        <Text style={styles.text}>Inmate lookup</Text>
      </View>
      <View style={styles.cell_even}>
        <MaterialCommunityIcons
          color="white"
          size={50}
          name="clipboard-account"
          onPress={() => {
            getLink.getLink('Lafayette', 'gunPermits');
          }}
        />
        <Text style={styles.text}>Gun Permits</Text>
      </View>
      <View style={styles.cell_odd}>
        <AntDesign
          color="white"
          size={50}
          name="car"
          onPress={() => {
            getLink.getLink('Lafayette', 'crashReports');
          }}
        />
        <Text style={styles.text}>Crash Report</Text>
      </View>
      <View style={styles.cell_even}>
        <MaterialCommunityIcons
          color="white"
          size={50}
          name="account-search"
          onPress={() => {
            getLink.getLink('Lafayette', 'recordsRequest');
          }}
        />
        <Text style={styles.text}>Records Request</Text>
      </View>
      <View style={styles.cell_odd}>
        <MaterialCommunityIcons
          color="white"
          size={50}
          name="dog-side"
          onPress={() => {
            getLink.getLink('Lafayette', 'animalControl');
          }}
        />
        <Text style={styles.text}>Animal Control</Text>
      </View>

      <View style={styles.cell_even}>
        <MaterialCommunityIcons
          color="white"
          size={50}
          name="security"
          onPress={() =>
            ControllContainer.getInstance().openViewName(
              'ModalView',
              'BasicModalD'
            )
          }
        />
        <Text style={styles.text}>Security and extra patrol request</Text>
      </View>
      <View style={styles.cell_odd}>
        <MaterialIcons
          color="white"
          size={50}
          name="monetization-on"
          onPress={() => {
            getLink.getLink('Lafayette', 'taxWarrants');
          }}
        />
        <Text style={styles.text}>Tax Warrants</Text>
      </View>

      <View style={styles.cell_even}>
        <Entypo
          color="white"
          size={50}
          name="traffic-cone"
          onPress={() =>
            ControllContainer.getInstance().openViewName('Email', '')
          }
        />
        <Text style={styles.text}>Traffic complaints</Text>
      </View>
      <View style={styles.cell_odd}>
        <MaterialCommunityIcons
          color="white"
          size={50}
          name="sale"
          onPress={() =>
            ControllContainer.getInstance().openViewName(
              'ModalView',
              'BasicModalC'
            )
          }
        />
        <Text style={styles.text}>Sheriff's Sale</Text>
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
