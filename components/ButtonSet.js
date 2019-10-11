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

//svg files
import AdminLine from '../assets/buttonIcons/AdminLine.svg';
import AnimalControl from '../assets/buttonIcons/AnimalControl.svg';
import Commissary from '../assets/buttonIcons/Commissary.svg';
import Contacts from '../assets/buttonIcons/Contacts.svg';
import CrashReport from '../assets/buttonIcons/CrashReport.svg';
import Gun from '../assets/buttonIcons/Gun.svg';
import Inmatelookup from '../assets/buttonIcons/Inmatelookup.svg';
import Jobapply from '../assets/buttonIcons/Jobapply.svg';
import PhoneDirectory from '../assets/buttonIcons/PhoneDirectory.svg';
import RecordRequest from '../assets/buttonIcons/RecordRequest.svg';
import SecurityAndExtraPatrolRequest from '../assets/buttonIcons/SecurityAndExtraPatrolRequest.svg';
import SexOffender from '../assets/buttonIcons/SexOffender.svg';
import VideoVisitation from '../assets/buttonIcons/VideoVisitation.svg';
import VisitationPolicy from '../assets/buttonIcons/VisitationPolicy.svg';
import Wetip from '../assets/buttonIcons/Wetip.svg';
import SheriffSale from '../assets/buttonIcons/SheriffSale.svg';
import TaxWarrants from '../assets/buttonIcons/TaxWarrants.svg';
import TrafficComplaints from '../assets/buttonIcons/TrafficComplaints.svg';



const ButtonSet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <AdminLine
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'adminLine');
          }}
        />
        <Text style={styles.text}>Admin Line</Text>
      </View>

      <View style={styles.cell}>
        <AnimalControl
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'animalControl');
          }}
        />
        <Text style={styles.text}>Animal Control</Text>
      </View>

      <View style={styles.cell}>
        <Commissary
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'commissary');
          }}
        />
        <Text style={styles.text}>Commissary</Text>
      </View>

      <View style={styles.cell}>
        <Contacts
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'phoneDirectory');
          }}
        />
        <Text style={styles.text}>Contacts</Text>
      </View>

      <View style={styles.cell}>
        <CrashReport
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'crashReports');
          }}
        />
        <Text style={styles.text}>Crash Report</Text>
      </View>

      <View style={styles.cell}>
        <Gun
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'gunPermits');
          }}
        />
        <Text style={styles.text}>Gun Permits</Text>
      </View>

      <View style={styles.cell}>
        <Inmatelookup
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'immateLookup');
          }}
        />
        <Text style={styles.text}>Inmate lookup</Text>
      </View>

      <View style={styles.cell}>
        <Jobapply
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'jobApply');
          }}
        />
        <Text style={styles.text}>Job Apply</Text>
      </View>

      <View style={styles.cell}>
        <PhoneDirectory
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'phoneDirectory');
          }}
        />
        <Text style={styles.text}>Phone Directory</Text>
      </View>

      <View style={styles.cell}>
        <RecordRequest
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'recordsRequest');
          }}
        />
        <Text style={styles.text}>Records Request</Text>
      </View>

      <View style={styles.cell}>
        <SecurityAndExtraPatrolRequest
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() =>
            ControllContainer.getInstance().openViewName(
              'ModalView',
              'BasicModalD'
            )
          }
        />
        <Text style={styles.text}>Security and extra patrol request</Text>
      </View>

      <View style={styles.cell}>
        <SexOffender
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            // we need to check this function
            getLink.getLink('Lafayette', 'sexOffenders');
          }}
        />
        <Text style={styles.text}>Sex Offenders</Text>
      </View>

      <View style={styles.cell}>
        <SheriffSale
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() =>
            ControllContainer.getInstance().openViewName(
              'ModalView',
              'BasicModalC'
            )
          }
        />
        <Text style={styles.text}>Sheriff's Sale</Text>
      </View>

      <View style={styles.cell}>
        <TaxWarrants
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'taxWarrants');
          }}
        />
        <Text style={styles.text}>Tax Warrants</Text>
      </View>

      <View style={styles.cell}>
        <TrafficComplaints
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() =>
            ControllContainer.getInstance().openViewName('Email', '')
          }
        />
        <Text style={styles.text}>Traffic complaints</Text>
      </View>

      <View style={styles.cell}>
        <VideoVisitation
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() =>
            ControllContainer.getInstance().openViewName(
              'ModalView',
              'BasicModalB'
            )
          }
        />
        <Text style={styles.text}>Video Visitation</Text>
      </View>

      <View style={styles.cell}>
        <VisitationPolicy
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'visitationPolicy');
          }}
        />
        <Text style={styles.text}>Visitation Policy</Text>
      </View>

      <View style={styles.cell}>
        <Wetip
          height={styles.icon_size.height}
          width={styles.icon_size.width}
          onPress={() => {
            getLink.getLink('Lafayette', 'weTip');
          }}
        />
        <Text style={styles.text}>We-tip</Text>
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
    backgroundColor: '#ced6e0',
    padding: 10,
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 105,
    margin: 0,
    backgroundColor: 'white',
  },
  gone: {
    width: 105,
    height: 105,
    margin: 0,
    opacity: 0.4,
  },
  text: {
    color: 'black',
  },
  icon_size: {
    width: 70,
    height: 70,
  },
});
