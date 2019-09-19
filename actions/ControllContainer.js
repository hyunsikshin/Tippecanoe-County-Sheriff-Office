import React from 'react';
import AdminSet from '../components/AdminSet';
import ButtonSet from '../components/ButtonSet';
import CorrectionSet from '../components/CorrectionSet';
import ServiceSet from '../components/ServiceSet';
import SnsSet from '../components/SnsSet';
import BaiscModal from '../BasicModal';
import BaiscModalA from '../BasicModalA';

export default class ControllContainer{

    //#region Singleton
    //Singleton
    myinstance = null;
    ButtonControl = null;
    ModalControl = null;

    static getInstance() {
        if (ControllContainer.myinstance == null) {
            ControllContainer.myinstance = new ControllContainer();
        }
        return this.myinstance;
    }
    //#endregion

    buttonlist = [
        { name: "Main", isShow: false , list :<ButtonSet></ButtonSet>},
        { name: "Admin", isShow: false , list :<AdminSet></AdminSet>},
        { name: "Corrections", isShow: false ,list : <CorrectionSet></CorrectionSet>},
        { name: "Service", isShow: false , list : <ServiceSet></ServiceSet> },
        { name: "SocialMedia", isShow: false ,list : <SnsSet></SnsSet>},
      ];

    modallist = [
        { name: "BasicModal", isShow: false , list :<BaiscModal></BaiscModal>},
        { name: "BasicModalA", isShow: false , list :<BaiscModalA></BaiscModalA>},
    ];

    
    initButtonControl(object){
        this.ButtonControl = object;
    }

    initModalControl(object){
        this.ModalControl = object;
    }


    isMainScreen(){
        if(this.buttonlist[0].isShow == true)
            return true;
        else
            return false;
    }

    isModalOn(){
      for(i = 0;i<this.modallist.length;i++)
        if(this.modallist[i].isShow == true)
             return true;
      return false;
    }
    
     openListByName(itemlist,name){
      for(i = 0;i<itemlist.length;i++)
         if(itemlist[i].name == name) 
             itemlist[i].isShow = true;
         else
             itemlist[i].isShow = false;
     }


     openButton(name){
          this.openListByName(this.buttonlist,name);
          this.ButtonControl.forceUpdate();
      }

      openModal(name){
          this.openListByName(this.modallist,name);
          this.ModalControl.forceUpdate();
      }

      closeModal(){
        for(i = 0;i<this.modallist.length;i++)
            this.modallist[i].isShow = false;
        this.ModalControl.forceUpdate();
      }

      getListByShow(itemlist){
        for(i = 0;i<itemlist.length;i++){
         if(itemlist[i].isShow == true)
              return itemlist[i].list;  
        }
         return null;
       }

      checkItems(num){
        if(num == "Modal")
           return this.getListByShow(this.modallist);
        else
        {
          result= this.getListByShow(this.buttonlist);
          return result == null ? <ButtonSet></ButtonSet> : result;
        }
      }
 
    
}