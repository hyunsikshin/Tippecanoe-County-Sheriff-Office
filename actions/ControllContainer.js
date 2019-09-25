import constants from './ViewContainer';

export default class ControllContainer{


    //Singleton
    myinstance = null;
    ButtonControl = null;
    ModalControl = null;
    
    modalName= "close";
    viewName = "";

    static getInstance() {
        if (ControllContainer.myinstance == null) {
            ControllContainer.myinstance = new ControllContainer();
        }
        return this.myinstance;
    }

    intitObject(type,object){
      if(type == "ButtonView")
        this.ButtonControl = object;
      else
        this.ModalControl = object;
    }

    openViewName(type,name)
    {
       if(type == "ButtonView"){
          this.viewName = name;
          this.ButtonControl.forceUpdate();
       }
       else if(type == "ModalView"){
          this.modalName = name;
          this.ModalControl.forceUpdate();
       }
       else if("Email"){
          this.ModalControl.props.navigation.navigate('MailPage');
       }
    }

    checkView()
    {
       if(this.viewName =="")
          return constants.buttonList["Main"];  
       else
          return constants.buttonList[this.viewName];  
    }
    
    checkModal()
    {
      if(this.modalName =="")
          return null;
      else
          return constants.modallist[this.modalName]; 
    }

    getViewName(type)
    {
      if(type == "ButtonView")
         return this.viewName;
      else
         return this.modalName;
    }
}