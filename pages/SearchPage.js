import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ListView, Text } from 'react-native';

import ControllContainer from '../actions/ControllContainer';
class SearchPage extends Component {
  static navigationOptions = {
    title: 'Search Page',
  };

  address = [
    { Location: 'Adams'},
    { Location: 'Allen'},
    { Location: 'Bartholomew'},
    { Location: 'Benton'},
    { Location: 'Blackford'},
    { Location: 'Boone' },
    { Location: 'Brown' },
    { Location: 'Carroll' },
    { Location: 'Cass' },
    { Location: 'Clark'},
    { Location: 'Clay'},
    { Location: 'Clinton' },
    { Location: 'Crawford' },
    { Location: 'Daviess' },
    { Location: 'Dearborn'},
    { Location: 'Decatur'},
    { Location: 'DeKalb' },
    { Location: 'Delaware'},
    { Location: 'Dubois'},
    { Location: 'Lafayette'},
    
  ];
  
  ds;
  constructor() {
    super();

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: this.ds.cloneWithRows(['Mdwqd', 'dqwdwq']),
    };
    this.printAll();
  }

  changelistView(aa) {
    list = [];
    for (i = 0; i < aa.length; i++) 
        list.push(aa[i].Location);
    this.setState((this.state.dataSource = this.ds.cloneWithRows(list)));
  }

  printAll() {
    list = [];
    for (i = 0; i < this.address.length; i++)
      list.push(this.address[i].Location);
    this.setState((this.state.dataSource = this.ds.cloneWithRows(list)));
  }

  onChangeText = searchedText => {
    if (searchedText != '')
      var aa = this.address.filter(function(addresslist) {
        return addresslist.Location.toLowerCase().indexOf(searchedText) > -1;
      });

    if (aa != null) 
      this.changelistView(aa);
    else 
      this.printAll();

    this.forceUpdate();
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextInput
          style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Input your Location!"
          onChangeText={text => this.onChangeText(text.toLowerCase())}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <Text onPress={()=> ControllContainer.getInstance().setLocation(rowData,navigate)} style={styles.rowViewContainer} >{rowData}</Text>
          )}
        />
      </View>
    );
  }
}

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowViewContainer: {
    flex: 1,
    paddingRight: 15,
    paddingTop: 13,
    paddingBottom: 13,
    borderBottomWidth: 0.5,
    borderColor: '#c9c9c9',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
    marginLeft: 10,
  },
});
