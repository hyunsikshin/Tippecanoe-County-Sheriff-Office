import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import down from '../assets/down.png';
import up from '../assets/up.png';
import Megaphone from '../assets/megaphone.svg';
import getLink from '../actions/getLink';

class QnA extends Component {
  state = {
    contents: [
      {
        title: '  Top 5 Frequently Ask Questions',
        body:
        
        <Text style={styles.boldtext}>1. What are the different types of severe weather alerts and what do they mean?
        <Text style={styles.normaltext}>{` 
 SPS or Special Weather Statement is issued in anticipation of hazardous weather as far out as 5-7days in advance. These can also be used to clear counties from severe weather watches.
 `}{`Severe Thunderstorm Watch is issued when thunderstorms are possible in the watch area. severe Thunderstorm Warning is issued when sever thunderstorms are occurring or imminent in the warning area. Find more information on the TEMA page.
 `}{`
 `}</Text>
        <Text style={styles.boldtext}>2. Where can I recycle hazardous household waste?</Text>
        <Text style={styles.normaltext}>{`
 For information on how and where to dispose of hazardous cleaning cleaners, batteries, solvents, etc. Please see the Tippecanoe County Solid Waste Management District website at the following web address:
 `}
 <Text style={styles.underlinestyle}
 onPress={() => {
   getLink.getLink('waste');
 }}
>http://www.tippecanoewaste.org</Text>
{` or call them at`}
<Text style={styles.underlinestyle}
 onPress={() => {
   getLink.getLink('wastephone');
 }}
>{` 765-423-2858
`}</Text>
</Text>{`
 `}
        <Text style={styles.boldtext}>3. Where can I reserve a picnic shelter for a family gathering?</Text>
        <Text style={styles.normaltext}>{`
 Lafayette, West Lafayette, Tippecanoe County, and Prophetstown State Park all have picnic shelters available. Some require fees. Use the the following contact information to locate and reserve a shelter:
 `}{
 `Lafayette Parks Dept.`}
 <Text style={styles.underlinestyle}
 onPress={() => {
   getLink.getLink('LafayetteParksDept');
 }}
>{`765-807-1500
`}</Text>

 {`
 West Lafayette Park Dept.`}
 <Text style={styles.underlinestyle}
 onPress={() => {
   getLink.getLink('WestLafayetteParkDept');
 }}
>{`765-775-5110
`}</Text>

 {`
 Prophetstown State Park`}
 <Text style={styles.underlinestyle}
 onPress={() => {
   getLink.getLink('ProphetstownStatePark');
 }}
>{`866-622-6746
`}</Text>

 {`
 For all county shelters please call the Tippecanoe County Park Administration Dept.`}
 <Text style={styles.underlinestyle}
 onPress={() => {
   getLink.getLink('TippecanoeCountyParkAdministrationDept');
 }}
>{`765-423-2306
`}</Text>

 </Text>{`
 `}
        <Text style={styles.boldtext}>4. Veterans Treatment Court- Where can I get more information</Text>
        <Text style={styles.normaltext}>{`
 Follow this link to locate the `}<Text style={styles.underlinestyle}
 onPress={() => {
   getLink.getLink('vtc');
 }}
>VTC web page</Text>
{` and contact information.
`}</Text>{`
`}
        <Text style={styles.boldtext}>5.Where Can I Report a Pothole?</Text>
        <Text style={styles.normaltext}>{`
 Follow this `}
 <Text style={styles.underlinestyle}
 onPress={() => {
   getLink.getLink('pothole');
 }}
>link</Text>
{` to the Tippecanoe County Highway page and you can report a pothole.
`}</Text>
</Text>
        
          
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
          {this.state.contents
            ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={down}
                    visibleImage={up}
                    header={
                      <View style={styles.qna}>
                           <Megaphone
                           style = {{marginLeft: 5,}}
                            height={styles.icon_size.height}
                            width={styles.icon_size.width}/>
                        <Text
                          style={{
                            fontSize: 13,
                            color: 'black',
                          }}>
                          {param.title}
                        </Text>
                      </View>
                    }>
                    <Text
                      style={[
                        styles.txt,
                        {
                          fontSize: 20,
                        },
                      ]}>
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
            : null}
        </ScrollView>
      </View>
    );
  }
}

export default QnA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
    
  },

  normaltext:{
    fontWeight:'normal',
    fontSize:13
  },

  boldtext:{
    fontWeight:'bold',
    fontSize:20

  },
  icon_size: {
    width: 20,
    height: 20,
    
  },

  underlinestyle:{
    color:'blue'
  },
  
  qna: {
   display : 'flex',
   flexDirection : 'row',
   alignItems: 'center',
  }
});
