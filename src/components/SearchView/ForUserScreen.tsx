import React, { Component } from 'react';
import { Text, View,  StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Image from 'react-native-scalable-image';


export default class ForUserScreen extends Component {
  componentDidMount() {
      StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <ScrollView  showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  flexOne:{
    flex:1
  },
  container: {
    backgroundColor:'#000000',
    flex: 1,
    flexDirection: 'row'
  },
  leftContainer: {
    // padding:1,
    // margin:10,
    marginLeft:5,
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000000',
  },
  rightContainer: {
    marginRight:5,
    // margin:10,
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000000',
  },
  buttonContainer: {
    // flex: 1,
    backgroundColor:'#000000',
    justifyContent: 'center',
  },
  image:{
    flex:1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius:25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25
  },
  imageText:{
    flex:1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // height:"10%"
  },
  text:{
    flex:1,
    marginTop:"3%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#EEEEEC',
    // alignItems: 'center',
    fontSize: 15,
  },
  tochableEtc:{
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  etc:{
    // position:'',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#EEEEEC',
    fontSize: 20,
    fontWeight: 'bold'
  }
});