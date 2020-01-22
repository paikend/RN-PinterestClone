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
            <View style={{alignSelf:"center", flex:1, width:"95%",
}}>
                <TouchableOpacity style={styles.btnNewMessage}>
                    <Text style={styles.textNewMessage}>새 메시지</Text>
                </TouchableOpacity>
            </View>  
            <View style={styles.flexOne}>
                <Text style={styles.text}>메시지를 보내서 프로젝트를 계획하고, 아이디어를 교환하며, 발견한 멋진 내용을 공유하세요.</Text>
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
      backgroundColor:'#000000',
      justifyContent: 'center',
    },
    btnNewMessage:{
      top:15,
      backgroundColor:"#e40017",
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%",
      height:50,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius:10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10
    },
    text:{
      flex:1,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffff',
      textAlign:"center",
      fontSize: 30,
      fontWeight:'600',

    },
    textNewMessage:{
      fontWeight:'600',
      color: '#ffffff',
      fontSize: 20,
    }
  
  
  });