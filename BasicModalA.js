import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import { Text, TouchableOpacity, View, StyleSheet,Button } from 'react-native';
import { Linking } from 'expo';
import ControllContainer from './actions/ControllContainer';
import getLink from './actions/getLink';

export default class BasicModalA extends Component {
  render() {
    return (
        <Modal
        style={styles.container}
          open={true}
          transparent={true}
          animationType='slide'
          modalDidClose={() => ControllContainer.getInstance().closeModal()}>
              
            <View style={[styles.container, styles.modalBackgroundStyle]}>
                <View style={styles.Cell_Title}>
                    <Text style ={styles.TitleText}>Contact</Text>
               </View>
            
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style = {styles.InnerText}
                onPress={() =>  getLink.getLink('Lafayette','administration')}>
                <Text style ={styles.InnerText}>ADMINISTRATION</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.InnerText}
                onPress={() => getLink.getLink('Lafayette','dispatch')}>
                <Text style ={styles.InnerText}>DISPATCH</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.InnerText}
                onPress={() => getLink.getLink('Lafayette','jail')}>
                <Text style ={styles.InnerText}>JAIL</Text>
                </TouchableOpacity>

                <View style={styles.Cell_Close}>
                    <TouchableOpacity
                    style={{alignItems: 'center' }}
                    onPress={() =>  ControllContainer.getInstance().closeModal()}>
                    <Text style ={{fontSize: 30}}>CLOSE</Text>
                    </TouchableOpacity>
                </View>
            </View>
     </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({

  TitleText:{
      color:'white',
      alignItems:'center',
    fontSize:40 
  },

  InnerText:{
    fontSize: 40,
    color:'white',
    textDecorationLine: 'underline',
  },

  Cell_Title: {
    width: 330,
    height: 55,
    margin: 5,
    backgroundColor: '#55330E',
    alignItems:'center',
  },

  Cell_Close: {
    width: 300,
    height: 45,
    marginVertical: 10,
    backgroundColor: '#D6D8D7'
  },
   modalBackgroundStyle : {
    backgroundColor: 'rgba(78,62,46, 1)'
    ,margin : -10
    ,alignItems:'center'
  }

});