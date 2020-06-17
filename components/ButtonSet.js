import React, { Component } from "react";
import { Text, View, Dimensions, Alert, Platform } from "react-native";
import { WebView } from "react-native-webview";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  FontAwesome,
  Feather,
  Entypo,
  SimpleLineIcons,
  AntDesign,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import getLink from "../actions/getLink";
//svg files
import EventSecurity from "../assets/buttonIcons/EventSecurity.svg";
import AnimalControl from "../assets/buttonIcons/AnimalControl.svg";
import Commissary from "../assets/buttonIcons/Commissary.svg";
import Contacts from "../assets/buttonIcons/Contacts.svg";
import CrashReport from "../assets/buttonIcons/CrashReport.svg";
import Gun from "../assets/buttonIcons/Gun.svg";
import Inmatelookup from "../assets/buttonIcons/Inmatelookup.svg";
import Jobapply from "../assets/buttonIcons/Jobapply.svg";
import SocialMedia from "../assets/buttonIcons/SocialMedia.svg";
import RecordRequest from "../assets/buttonIcons/RecordRequest.svg";
import ExtraPatrolRequest from "../assets/buttonIcons/ExtraPatrolRequest.svg";
import SexOffender from "../assets/buttonIcons/Card.svg";
import VideoVisitation from "../assets/buttonIcons/VideoVisitation.svg";
import VisitationPolicy from "../assets/buttonIcons/policy.svg";
import Wetip from "../assets/buttonIcons/Wetip.svg";
import SheriffSale from "../assets/buttonIcons/SheriffSale.svg";
import TaxWarrants from "../assets/buttonIcons/TaxWarrants.svg";
import TrafficComplaints from "../assets/buttonIcons/TrafficComplaints.svg";

import * as Font from "expo-font";
import { sendEmail } from "../actions/SendEmail";

class ButtonSet extends Component {
  state = {
    fontLoaded: false,
  };

  //sendEmail(e-mail address, title, content)
  // e-mail address will be changed
  extraPatrolRequestEmail = () => {
    sendEmail(
      "tcsodispatch@tippecanoe.in.gov",
      "Extra Patrol Request",
      "Name of requestor : \nAddress of request : \nRequestor phone number : \n\nDescription of problem : \nLocation of problem : \nTimes occurring : \nRequest start date : \nRequest end date : \n\nAny additional details of request : \n"
    );
  };

  // Contents and e-mail address will be changed
  eventSecurityEmail = () => {
    sendEmail(
      "rwhainje@tippecanoe.in.gov",
      "Event Security",
      "Name of requestor : \nAddress of request : \nRequestor phone number : \n\nDescription of problem : \nLocation of problem : \nTimes occurring : \nRequest start date : \nRequest end date : \n\nAny additional details of request : \n"
    );
  };

  // Contents and e-mail address will be changed
  trafficComplaintsEmail = () => {
    sendEmail(
      "traffic@tippecanoe.in.gov",
      "Traffic Complaints",
      "Name of requestor : \nAddress of request : \nRequestor phone number : \n\nDescription of problem : \nLocation of problem : \nTimes occurring : \nRequest start date : \nRequest end date : \n\nAny additional details of request : \n"
    );
  };

  async componentDidMount() {
    await Font.loadAsync({
      CustomFont: require("../assets/fonts/SCDream6.otf"),
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
            // onPress={() => {
            //   getLink.getLink('immateLookup');
            // }}
            onPress={() => this.props.navigate("Inmatelookup")}
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
              Platform.OS == "ios"
                ? this.props.navigate("VideoVisitation")
                : getLink.openView("ModalView", "ModalVideoVisitation")
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
              this.props.navigate("VisitationPolicy");
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
              this.props.navigate("Commissary");
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
              this.props.navigate("CrashReport");
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
              this.props.navigate("RecordRequest");
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
            onPress={() => this.trafficComplaintsEmail()}
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
              this.props.navigate("Wetip");
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
              this.props.navigate("SexOffender");
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
            onPress={() => getLink.openView("ModalView", "ModalSheriffSale")}
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
              this.props.navigate("TaxWarrants");
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
              this.props.navigate("Gun");
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
            onPress={() => getLink.openView("ModalView", "ModalContackUs")}
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
              this.props.navigate("Career");
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
              this.props.navigate("AnimalControl");
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
            onPress={() => getLink.openView("ModalView", "ModalSocialMdeida")}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>Social Media</Text>
          ) : null}
        </View>

        <View style={styles.cell}>
          <EventSecurity
            height={styles.icon_size.height}
            width={styles.icon_size.width}
            onPress={() => this.eventSecurityEmail()}
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

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#ced6e0",
    padding: 20,
  },
  cell: {
    justifyContent: "center",
    alignItems: "center",
    width: "110rem",
    height: "110rem",
    backgroundColor: "white",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontFamily: "CustomFont",
    fontSize: 13,
  },
  icon_size: {
    width: "60rem",
    height: "60rem",
  },
});
