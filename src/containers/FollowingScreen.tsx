// Setting screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View,Image } from 'react-native';
//import all the components we are going to use.
import FloatButton from '../components/FloatButton';
export default class FollowingScreen extends Component {
  
  render() {
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../img/pearl.png')} />
         <FloatButton/>
      </View>
    );
  }
}
