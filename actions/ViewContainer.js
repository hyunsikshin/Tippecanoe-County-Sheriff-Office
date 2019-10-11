import React from 'react';

import ButtonSet from '../components/ButtonSet';
import CorrectionSet from '../components/CorrectionSet';
import ServiceSet from '../components/ServiceSet';
import SnsSet from '../components/SnsSet';

import BasicModal from '../dialog/BasicModal';
import BasicModalA from '../dialog/BasicModalA';
import BasicModalB from '../dialog/BasicModalB';
import BasicModalC from '../dialog/BasicModalC';
import BasicModalD from '../dialog/BasicModalD';


const buttonList = {
      Main :<ButtonSet></ButtonSet>,
      Corrections :<CorrectionSet></CorrectionSet>,
      Service :<ServiceSet></ServiceSet>,
      SocialMedia :<SnsSet></SnsSet>,
  };

const modallist = {
    BasicModal :<BasicModal></BasicModal>,
    BasicModalA :<BasicModalA></BasicModalA>,
    BasicModalB :<BasicModalB></BasicModalB>,
    BasicModalC :<BasicModalC></BasicModalC>,
    BasicModalD :<BasicModalD></BasicModalD>,
};
  
 export default {
    buttonList,
    modallist
  };
  