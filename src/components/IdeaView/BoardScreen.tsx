import React, { Component } from 'react';
import { Text, View,  StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Image from 'react-native-scalable-image';


export default class RecommandScreen extends Component {
  componentDidMount() {
      StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <View style={styles.container}>

          <View style={styles.flexOne}>
              <Text style={styles.text}>아직 저장한 아이디어가 없습니다.</Text>
          </View>
          <View style={{alignSelf:"center"}}>
              <TouchableOpacity style={styles.btnFindIdea}>
                  <Text style={styles.textFindIdea}>아이디어 찾기</Text>
              </TouchableOpacity>
          </View>

    </View>
    );
  }
}



const styles = StyleSheet.create({
  flexOne:{
    flex:1,
    margin:50
  },
  container: {
    backgroundColor:'#000000',
    flex: 1,
    flexDirection: 'column'
  },
  buttonContainer: {
    backgroundColor:'#000000',
    justifyContent: 'center',
  },
  btnFindIdea:{
    backgroundColor:"#383838",
    justifyContent: 'center',
    alignItems: 'center',
    width:140,
    height:55,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius:20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    bottom:"50%"
  },
  text:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'gray',
    textAlign:"center",
    fontSize: 25,
    fontWeight:"600"
  },
  textFindIdea:{
    fontWeight:"600",
    color: 'white',
    fontSize: 17,
  }


});