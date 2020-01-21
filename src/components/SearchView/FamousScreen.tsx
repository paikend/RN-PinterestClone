import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Button, ImageBackground,ScrollView } from 'react-native';
import Image from 'react-native-scalable-image';
// import { Button } from 'react-native-elements';
export default class FamousScreen extends Component {
  render() {
    return (
      <ScrollView  showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
          <View style={{ flexDirection: 'row', width:"100%"}}>
                <View style={{ flexDirection: 'column',  alignItems: 'center',  padding:10}}>
                  <Text style={styles.avataName}>큐플레이스</Text>
                </View>
          </View>
        <View style={{ flexDirection: 'row', width:"100%", justifyContent:"space-evenly"}}>
          <View style={{ flexDirection: 'column',  alignItems: 'flex-start'}}>
            <ImageBackground style={styles.image}  source={require('../../assets/img/1.jpeg') } ><Text style={{ margin:10, fontSize:15, color:"#ffffff", fontWeight:"bold"}}>배경화면</Text></ImageBackground>
            <ImageBackground style={styles.image}  source={require('../../assets/img/1.jpeg') } ><Text style={{ margin:10, fontSize:15, color:"#ffffff", fontWeight:"bold"}}>배경화면</Text></ImageBackground>
          </View>
          <View style={{ flexDirection: 'column',  alignItems: 'flex-end'}}>
          <ImageBackground style={styles.image}  source={require('../../assets/img/1.jpeg') } ><Text style={{ margin:10, fontSize:15, color:"#ffffff", fontWeight:"bold"}}>배경화면</Text></ImageBackground>
            <ImageBackground style={styles.image}  source={require('../../assets/img/1.jpeg') } ><Text style={{ margin:10, fontSize:15, color:"#ffffff", fontWeight:"bold"}}>배경화면</Text></ImageBackground>
          </View>
        </View>
        <View style={{ flexDirection: 'row', width:"100%"}}>
                <View style={{ flexDirection: 'column',  alignItems: 'center',  padding:10}}>
                  <Text style={styles.avataName}>큐플레이스</Text>
                </View>
          </View>
        <View style={{ flexDirection: 'row', width:"100%", justifyContent:"space-evenly"}}>
          <View style={{ flexDirection: 'column',  alignItems: 'flex-start'}}>
            <ImageBackground style={styles.image}  source={require('../../assets/img/1.jpeg') } ><Text style={{ margin:10, fontSize:15, color:"#ffffff", fontWeight:"bold"}}>배경화면</Text></ImageBackground>
            <ImageBackground style={styles.image}  source={require('../../assets/img/1.jpeg') } ><Text style={{ margin:10, fontSize:15, color:"#ffffff", fontWeight:"bold"}}>배경화면</Text></ImageBackground>
            <ImageBackground style={styles.image}  source={require('../../assets/img/1.jpeg') } ><Text style={{ margin:10, fontSize:15, color:"#ffffff", fontWeight:"bold"}}>배경화면</Text></ImageBackground>
          </View>
          <View style={{ flexDirection: 'column',  alignItems: 'flex-end'}}>
          <ImageBackground style={styles.image}  source={require('../../assets/img/1.jpeg') } ><Text style={{ margin:10, fontSize:15, color:"#ffffff", fontWeight:"bold"}}>배경화면</Text></ImageBackground>
          <ImageBackground style={styles.image}  source={require('../../assets/img/1.jpeg') } ><Text style={{ margin:10, fontSize:15, color:"#ffffff", fontWeight:"bold"}}>배경화면</Text></ImageBackground>
          <ImageBackground style={styles.image}  source={require('../../assets/img/1.jpeg') } ><Text style={{ margin:10, fontSize:15, color:"#ffffff", fontWeight:"bold"}}>배경화면</Text></ImageBackground>
          </View>
          
        </View>
        </View>
        </ScrollView>
      );
    }
  }
  
      const styles = StyleSheet.create({
        container: {
          // position: 'relative',
          backgroundColor:'#000000',
          flex: 1,
          flexDirection: 'column'
          // flexDirection: 'row', // 혹은 'column'
        },
        avataImage:{
          flex:0.0005,
          borderTopLeftRadius: 50,
          borderBottomLeftRadius:50,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          marginTop:10
        },
        image:{
          justifyContent: 'flex-end', //Centered vertically
          alignItems: 'flex-start', // Centered horizontally
          flex:1,
          width:190,
          height:95,
          overflow: 'hidden',
          borderRadius: 25,
          marginTop:10,
          // marginLeft:15,
        },
        followButton: {
          backgroundColor:'#e40017',
          alignItems:"center",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius:10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: 'center',
          // alignSelf: 'center',
          width:75,
          height:50,
          // flexDirection: 'row', 
          // padding:20,
          fontSize: 20,
          fontWeight: 'bold',
        },
        followText:{
          // justifyContent: 'center',
          color:"white",
          fontSize:18
          
          // flex:1,
          // fontSize:20
        },
        avataName:{
          // paddingLeft:5,
          color:"white",
          fontSize:18,
          // marginTop:7,
          // padding:10,
          fontWeight:"bold",          
          textAlign:"left",

        },
        avataFollower:{
          // paddingLeft:13,
      
          color:"white",
          fontSize:18,
          textAlign:"left",
          // padding:10,
          // marginTop:7,
        }
      });
