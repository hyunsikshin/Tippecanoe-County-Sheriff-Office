import constants from './ViewContainer';

export default class ControllContainer {
  //Singleton
  myinstance = null;
  modalControl = null;

  modalName = 'close';
  location = 'Lafayette';

  static getInstance() {
    if (ControllContainer.myinstance == null) {
      ControllContainer.myinstance = new ControllContainer();
    }
    return this.myinstance;
  }

  setLocation(loc, navigate) {
    this.location = loc;
    navigate('MainPage');
  }

  getLocation() {
    return this.location;
  }

  intitObject(type, object) {
    this.modalControl = object;
  }

  openViewName(type, name) {
    if (type == 'ModalView') {
      this.modalName = name;
      this.modalControl.forceUpdate();
    } else if (type == 'Traffic') {
      this.modalControl.props.navigation.navigate('TrafficPage');
    } else if (type == 'Extra') {
      this.modalControl.props.navigation.navigate('ExtraPage');
    } else if (type == 'Event') {
      this.modalControl.props.navigation.navigate('EventPage');
    }
  }

  checkModal() {
    if (this.modalName == '' || this.modalName == 'close') return null;
    else return constants.modallist[this.modalName];
  }
}
