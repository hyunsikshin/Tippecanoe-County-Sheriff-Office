import constants from './Links';
import { Linking } from 'react-native';
import { String } from 'core-js';

//  호출부에서
//  import getLink from './getLink';
//  import {Linking} from 'react-native'
//  onPress={ ()=> Linking.openURL(getLink.getLink('Lafayette','phoneDirectory'))}

const getLink = {
  getLink: function(location, event) {
    let str = '';
    switch (location) {
      case 'Lafayette':
        str = constants.Lafayette[event];
    }
    if (str != '')  Linking.openURL(str);
    else return;
  },
};

export default getLink;
