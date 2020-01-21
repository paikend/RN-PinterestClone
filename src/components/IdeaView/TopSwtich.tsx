import React, { Component } from 'react';
import {View} from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { statement } from '@babel/template';
import { valueToNode } from '@babel/types';
import { checkPropertyChange } from 'json-schema';
interface SwitchProps {
  isScreen?: number;
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
// () => { this.functionOne(); this.functionTwo();
// 
// () => { this.functionOne(); this.functionTwo();
// 
changeSwitch = ():void =>{
  // if(this.state.isScreen == 0){
  //   this.setState({ isScreen: 1 });
  // }else{
  //   this.setState({ isScreen: 0 });
  // }
}
  render() {
    
    return (
      <View style={{ flex: 0.075, justifyContent: 'flex-start', alignItems: 'center'}}>
            <SwitchSelector
                style={{width:'30%', backgroundColor:'#000000', borderColor:'#000000'}}
                initial={this.props.isScreen}
                onPress={() => { this.changeSwitch();} }
                textColor={'#EEEEEC'} 
                selectedColor={'#000000'}
                backgroundColor={'#000000'}
                buttonColor={'#EEEEEC'}
                borderColor={'#000000'}
                height={50}
                fontSize={18}
                // hasPadding
                options={[
                    { label: "보드", value: "r"},
                    { label: "핀", value: "f"}
                ]}
                />
      </View>
    );
  }
}
