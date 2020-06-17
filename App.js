import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import CopyRightPage from "./pages/CopyRightPage";
import AnimalControl from "./pages/AnimalControl";
import Career from "./pages/Career";
import Commissary from "./pages/Commissary";
import CrashReport from "./pages/CrashReport";
import Gun from "./pages/Gun";
import Inmatelookup from "./pages/Inmatelookup";
import RecordRequest from "./pages/RecordRequest";
import SexOffender from "./pages/SexOffender";
import TaxWarrants from "./pages/TaxWarrants";
import VideoVisitation from "./pages/VideoVisitation";
import VisitationPolicy from "./pages/VisitationPolicy";
import Wetip from "./pages/Wetip";

const App = createStackNavigator(
  {
    MainPage: { screen: MainPage },
    SearchPage: { screen: SearchPage },
    CopyRightPage: { screen: CopyRightPage },
    AnimalControl: { screen: AnimalControl },
    Career: { screen: Career },
    Commissary: { screen: Commissary },
    CrashReport: { screen: CrashReport },
    Gun: { screen: Gun },
    Inmatelookup: { screen: Inmatelookup },
    RecordRequest: { screen: RecordRequest },
    SexOffender: { screen: SexOffender },
    TaxWarrants: { screen: TaxWarrants },
    VideoVisitation: { screen: VideoVisitation },
    VisitationPolicy: { screen: VisitationPolicy },
    Wetip: { screen: Wetip },
  },
  {
    initialRouteName: "MainPage",
  }
);

export default createAppContainer(App);
