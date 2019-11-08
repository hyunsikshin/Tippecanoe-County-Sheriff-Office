import constants from './Links';
import { Linking ,Alert} from 'react-native';
import ControllContainer from '../actions/ControllContainer';
//  호출부에서
//  import getLink from './getLink';
//  import {Linking} from 'react-native'
//  onPress={ ()=> Linking.openURL(getLink.getLink('Lafayette','phoneDirectory'))}

const getLink = {
  openView: function(Type, event) {
    ControllContainer.getInstance().openViewName(Type,event);
  },
  
  getLink: function(event) {
    let str = '';
    switch (ControllContainer.getInstance().getLocation()) {
      case 'Lafayette':
        str = constants.Lafayette[event];
      case 'Clinton':
        str = constants.Clinton[event];
    }
 
    if(str == 'Null')
      Alert.alert("Not Ready For this Service");
    else if (str != '')  
      Linking.openURL(str);
  },
};

export default getLink;

