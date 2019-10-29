import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
import getLink from '../actions/getLink';
//svg files
import EventSecurity from '../assets/buttonIcons/EventSecurity.svg';
import AnimalControl from '../assets/buttonIcons/AnimalControl.svg';
import Commissary from '../assets/buttonIcons/Commissary.svg';
import Contacts from '../assets/buttonIcons/Contacts.svg';
import CrashReport from '../assets/buttonIcons/CrashReport.svg';
import Gun from '../assets/buttonIcons/Gun.svg';
import Inmatelookup from '../assets/buttonIcons/Inmatelookup.svg';
import Jobapply from '../assets/buttonIcons/Jobapply.svg';
import SocialMedia from '../assets/buttonIcons/SocialMedia.svg';
import RecordRequest from '../assets/buttonIcons/RecordRequest.svg';
import ExtraPatrolRequest from '../assets/buttonIcons/ExtraPatrolRequest.svg';
import SexOffender from '../assets/buttonIcons/Card.svg';
import VideoVisitation from '../assets/buttonIcons/VideoVisitation.svg';
import VisitationPolicy from '../assets/buttonIcons/VisitationPolicy.svg';
import Wetip from '../assets/buttonIcons/Wetip.svg';
import SheriffSale from '../assets/buttonIcons/SheriffSale.svg';
import TaxWarrants from '../assets/buttonIcons/TaxWarrants.svg';
import TrafficComplaints from '../assets/buttonIcons/TrafficComplaints.svg';

import * as Font from 'expo-font';
import { sendEmail } from '../actions/SendEmail';

class ButtonSet extends Component {
  state = {
    fontLoaded: false,
  };
  
  //sendEmail(e-mail address, title, content)
  // e-mail address will be changed
  extraPatrolRequestEmail = () => {
    sendEmail('bj.max.lim@gmail.com', "Extra Patrol Request", "Name of requestor : \nAddress of request : \nRequestor phone number : \n\nDescription of problem : \nLocation of problem : \nTimes occurring : \nRequest start date : \nRequest end date : \n\nAny additional details of request : \n");
  };

  // Contents and e-mail address will be changed
  eventSecurityEmail = () => {
    sendEmail('bj.max.lim@gmail.com', "Event Security", "Name : \nData : \nAddress : \nZip code : \nPhone number : \n");
  };

  // Contents and e-mail address will be changed
  trafficComplaintsEmail = () => {
    sendEmail('bj.max.lim@gmail.com', "Traffic Complaints", "Name : \nData : \nAddress : \nZip code : \nPhone number : \n");
  };

  async componentDidMount() {
    await Font.loadAsync({
      CustomFont: require('../assets/fonts/SCDream6.otf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cell}>
          <Inmatelookup
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('immateLookup');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Inmate Lookup</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <VideoVisitation
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() =>
              getLink.openView('ModalView', 'ModalVideoVisitation')
            }
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Video Visitation</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <VisitationPolicy
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('visitationPolicy');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Visitation Policy</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <Commissary
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('commissary');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Commissary</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <CrashReport
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('crashReports');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Crash Report</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <RecordRequest
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('recordsRequest');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Records Request</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <TrafficComplaints
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => getLink.openView('Traffic', '')}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Traffic Complaints</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <Wetip
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('weTip');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>We-tip</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <SexOffender
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('sexOffenders');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Sex Offenders</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <SheriffSale
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => getLink.openView('ModalView', 'ModalSheriffSale')}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Sheriff Sale</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <TaxWarrants
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('taxWarrants');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Tax Warrants</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <Gun
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('gunPermits');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Gun Permits</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <Contacts
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => getLink.openView('ModalView', 'ModalContackUs')}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Contacts Us</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <Jobapply
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('jobApply');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Career</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <AnimalControl
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => {
              getLink.getLink('animalControl');
            }}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Animal Control</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <ExtraPatrolRequest
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => this.extraPatrolRequestEmail()}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Extra Patrol Request</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <SocialMedia
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => getLink.openView('ModalView', 'ModalSocialMdeida')}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Social Media</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <EventSecurity
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => this.eventSecurityEmail ()}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Event Security</Text>
          ) : null}
        </View>
      </View>
    );
  }
}

export default ButtonSet;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ced6e0',
    padding: 15,
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 110,
    margin: 0,
    backgroundColor: 'white',
  },
  gone: {
    width: 115,
    height: 115,
    margin: 0,
    opacity: 0.4,
  },

  text: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'CustomFont',
    fontSize: 13,
  },
  icon_size: {
    width: 70,
    height: 70,
  },
});
