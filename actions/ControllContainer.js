import React from 'react';
import AdminSet from '../components/AdminSet';
import ButtonSet from '../components/ButtonSet';
import CorrectionSet from '../components/CorrectionSet';
import ServiceSet from '../components/ServiceSet';
import SnsSet from '../components/SnsSet';


export default class ControllContainer{

    //#region Singleton
    //Singleton
    static myinstance = null;

    static getInstance() {
        if (ControllContainer.myinstance == null) {
            ControllContainer.myinstance = new ControllContainer();
        }
        return this.myinstance;
    }
    //#endregion

    ButtonControl = null;
    buttonlist = [
        { name: "Admin", isShow: false , list :<AdminSet></AdminSet>},
        { name: "Corrections", isShow: false ,list : <CorrectionSet></CorrectionSet>},
        { name: "Service", isShow: false , list : <ServiceSet></ServiceSet> },
        { name: "SocialMedia", isShow: false ,list : <SnsSet></SnsSet>},
      ];

    
    initButtonControl(object){
        this.ButtonControl = object;
    }

     showButtonList(name){
        for(i = 0;i<this.buttonlist.length;i++)
        if(this.buttonlist[i].name == name)
            this.buttonlist[i].isShow = true;
        else
            this.buttonlist[i].isShow = false;

            this.ButtonControl.forceUpdate();
      }
    
      
      checkButton(){
        for(i = 0;i<this.buttonlist.length;i++){
                if(this.buttonlist[i].isShow == true)
                     return this.buttonlist[i].list;  
        }
        return <ButtonSet></ButtonSet>;
    }
    
}