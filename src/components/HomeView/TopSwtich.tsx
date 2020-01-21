import React, { Component } from 'react';
import {View} from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import Home from "../../screens/Home/index"
import { TabView } from 'react-native-tab-view';

interface SwitchProps {
  isScreen?: number;
  switchOn?: (value:any) => any;
}
interface SwitchState {
  isScreen?: number;
}

export default class FollowingScreen extends Component<SwitchProps,SwitchState> {
props:SwitchProps = {
  isScreen : 0,
}  
state:SwitchState = {
    isScreen : 0,
};

  switchOn = (value:any):any=>{
    <Home>
      {/* <TabView  onIndexChange={this.setState({index : value})}></TabView> */}
    </Home>
  }
  render() {
    
    return (
      <View style={{ flex: 0.075, justifyContent: 'flex-start', alignItems: 'center'}}>
            <SwitchSelector
                style={{width:'30%', backgroundColor:'#000000', borderColor:'#000000'}}
                value={this.props.isScreen}
                initial={this.props.isScreen}
                textColor={'#EEEEEC'} 
                onPress={(value) => { this.switchOn(value); }}
                selectedColor={'#000000'}
                backgroundColor={'#000000'}
                buttonColor={'#EEEEEC'}
                borderColor={'#000000'}
                height={50}
                fontSize={18}
                // hasPadding
                options={[
                    { label: "추천", value: 0},
                    { label: "팔로잉", value: 1}
                ]}
                />
      </View>
    );
  }
}
