import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import down from '../assets/down.png';
import up from '../assets/up.png';
import Megaphone from '../assets/megaphone.svg';

class QnA extends Component {
  state = {
    contents: [
      {
        title: '  Top 5 Frequently Ask Questions',
        body:
        
        <Text style={styles.boldtext}>1. Why should I get my pet spayed/neutered?
        <Text style={styles.normaltext}>{` 
 Spaying a dog or cat before their 1st heat cycle virtually eliminates the possibility of the pet getting mammary (breast) cancer. Neutering will eliminate the possibility of the pet getting testicular cancer and greatly cut down on any prostate problems. Spaying and neutering sterilizes the animal and thus reduces unwanted litters. It also may reduce undesirable behaviors such as spraying, marking, aggression towards other animals, roaming and mating behaviors. Please call 765-423-9388 for more information.
 `}</Text>
        <Text style={styles.boldtext}>2. Where do I get a building permit?</Text>
        <Text style={styles.normaltext}>{`
 If you reside inside the city limits of Lafayette, call 765-807-1050. If you reside inside the city limits of West Lafayette, call 765-775-5130. If you reside in Union Township, call 765-477-0116. If you reside outside any of these areas, you would be considered to be in the county, call 765-423-9225. If you reside in Battle Ground, Clarks Hill or Dayton call the Area Plan Commission at 765-423-9242.
 `}</Text>
        <Text style={styles.boldtext}>3. What happens if I miss my Court date?</Text>
        <Text style={styles.normaltext}>{`
 Court is not an appointment that can be missed or rescheduled. If you miss your court date for a criminal case, a warrant may be issued for your arrest. If the hearing is not a criminal matter, you will likely lose the case by default. If you have a serious reason why you cannot go to court on the assigned day, please contact the court in advance of the date. Some of the courts in Tippecanoe County require you to request a schedule change in writing.
 `}</Text>
        <Text style={styles.boldtext}>4. Does every death involve the coroner?</Text>
        <Text style={styles.normaltext}>{`
 Coroners have jurisdiction over all deaths that occur in their county under suspicious, unusual or unnatural circumstances. The Coroner may also be involved in natural deaths that were unattended by a physician. The Coroner will actually investigate approximately 12% of the deaths in their county and 60% of those may be natural deaths.
 `}</Text>
        <Text style={styles.boldtext}>5. What is a CASA volunteer?</Text>
        <Text style={styles.normaltext}>{`
 A Court Appointed Special Advocate (CASA) volunteer is a trained citizen who is appointed by a judge to represent the best interests of a child in court. Children helped by CASA volunteers include those for whom home placement is being determined in juvenile court. Most of the children are victims of abuse and neglect. Please call 765-423-9109 for more information.
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
    fontWeight:'bold'

  },
  icon_size: {
    width: 20,
    height: 20,
    
  },
  qna: {
   display : 'flex',
   flexDirection : 'row',
   alignItems: 'center',
  }
});
