import React, { Component } from 'react';
import {View} from 'react-native';
import { SearchBar } from 'react-native-elements';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons"
import { color } from 'react-native-reanimated';
import { TabView } from 'react-native-tab-view';

interface SwitchProps {
  search?: string;
}
interface SwitchState {
  search?: string;
}


export default class TopSwitch extends Component<SwitchProps,SwitchState> {
props:SwitchProps = {
  search : '',
}  
state:SwitchState = {
  search : '',
};
updateSearch = (search:string):void => {
  this.setState({ search });
};
  render() {
    
    return (
      <View>
        {/* <View> */}
          <SearchBar
            containerStyle={{backgroundColor: '#000000', borderWidth: 1, borderRadius: 5}}
            inputStyle={{color:"#ffffff"}}
            placeholder="검색"
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
        {/* </View> */}
        {/* <TabView>

        </TabView> */}
      </View>

    );
  }
}
