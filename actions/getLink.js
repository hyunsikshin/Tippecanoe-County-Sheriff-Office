import constants from './Links';
import { Linking ,Alert} from 'react-native';
import ControllContainer from '../actions/ControllContainer';


const getLink = {
  openView: function(Type, event) {
    ControllContainer.getInstance().openViewName(Type,event);
  },
  
  getLink: function(event) {
    let str = '';
    
    switch (ControllContainer.getInstance().location) {
      case 'Lafayette':
        str = constants.Lafayette[event];
      case 'Clinton':
        //str = constants.Clinton[event];
     // default :
      //Alert.alert(ControllContainer.getInstance().location);
    }
 
    if(str == 'Null')
      Alert.alert("Not Ready For this Service");
    else if (str != '')  
      Linking.openURL(str);
  },
};

export default getLink;

