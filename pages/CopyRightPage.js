import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import getLink from '../actions/getLink';

class CopyRightPage extends Component {
  state = {
    myCount: 0,
    isLoaded: false,
    error: null,
    name: null,
    city: null,
    tempertature: null,
  };

  render() {
    return (
        <ScrollView>
           <View style={styles.cell}>

           <Text style ={{fontWeight: 'bold'}}>[Inmate lookup]</Text>
            <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('inmatelookupIcon');
            }}
          >Freepik </Text>
             from 
          <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
           </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[Video Visitation]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('videovisitationIcon');
            }}
          >Phatplus </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>

          <Text style ={{fontWeight: 'bold'}}>[VisitationPolicy]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('visitationpolicyIcon');
            }}
          >Linector </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[Commissary]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('commissaryIcon');
            }}
          >Payunkeed </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[CrashReport]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('crashreportIcon');
            }}
          >itim2101 </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[RecordsRequest]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('recordrequestIcon');
            }}
          >icongeek26 </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[TrafficComplaints]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('trafficcomplaintsIcon');
            }}
          >Freepik </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[We-tip]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('wetipIcon');
            }}
          >DariusDan </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[SexOffenders]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('sexoffendersIcon');
            }}
          >photo3idea_studio </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[Sheriff Sale]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('sheriffsaleIcon');
            }}
          >Euclayp </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[Tax Warrants]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('taxwarrantsIcon');
            }}
          >Euclayp </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[GunPermits]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('gunpermitsIcon');
            }}
          >Freepik </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[ContactsUs]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('contactsusIcon');
            }}
          >surang </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[Career]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('careerIcon');
            }}
          >itim2101 </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[Animal Control]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('animalcontrolIcon');
            }}
          >Freepik </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[ExtraPatrolRequest]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('extrapatrolrequestlIcon');
            }}
          >Becris </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>

           
          <Text style ={{fontWeight: 'bold'}}>[Social Media]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('socialmediaIcon');
            }}
          >dDara </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[Event Security]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('eventsecurityIcon');
            }}
          >Freepik </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>


          <Text style ={{fontWeight: 'bold'}}>[Weather]</Text>
          <Text>Icon made by 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('eventsecurityIcon');
            }}
          >Freepik </Text>
             from 
            <Text style={styles.underlinestyle}
            onPress={() => {
              getLink.getLink('FlatIcon');
            }}
          >
          www.flaticon.com
            </Text>
          </Text>
          <View style={styles.SpaceText}></View>

          


          </View>



        </ScrollView>
    );
  }
}

export default CopyRightPage;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qnaContainer: {
    height: 23,
    width: width,
    backgroundColor: '#bdc3c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginLeft: 10,
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
     height : 10
  },
  underlinestyle: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#3DB7CC",
    color: "#3DB7CC",
  },
  SpaceText: {
    marginBottom:8,
  }

});
