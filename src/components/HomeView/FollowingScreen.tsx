import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native';
import Image from 'react-native-scalable-image';
import { checkPropTypes } from 'prop-types';
// import { Button } from 'react-native-elements';
export default class FollowingScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', width:"100%"}}>
            <TouchableOpacity style={{ flexDirection: 'row', padding:20, flex:1}}>
              <View>
                <Image style={styles.avataImage} width={50}  source={require('../../assets/img/pearl.png') } />
              </View>
                <View style={{ flexDirection: 'column',  alignItems: 'center',  padding:15}}>
                  <Text style={styles.avataName}>큐플레이스</Text>
                  <Text style={styles.avataFollower}> 1.5만 팔로워</Text>
                </View>
            </TouchableOpacity>
            <View style={{ padding:30}} >
              <TouchableOpacity 
                style={styles.followButton}
                onPress={() => {}}>
                <Text style={styles.followText}>팔로우</Text>                
              </TouchableOpacity>
            </View>
          </View>
        <View style={{ flexDirection: 'row', width:"100%", justifyContent:"space-evenly"}}>
          <View style={{ flexDirection: 'column',  alignItems: 'flex-start'}}>
            <Image style={styles.image} width={190} height={280} source={require('../../assets/img/pearl.png') } />
            <Image style={styles.image} width={190} height={280} source={require('../../assets/img/pearl.png') } />
          </View>
          <View style={{ flexDirection: 'column',  alignItems: 'flex-end'}}>
            <Image style={styles.image} width={190} height={280} source={require('../../assets/img/pearl.png') } />
            <Image style={styles.image} width={190} height={280} source={require('../../assets/img/pearl.png') } />
          </View>
        </View>
        <View style={{ flexDirection: 'row', width:"100%"}}>
            <TouchableOpacity style={{ flexDirection: 'row', padding:20, flex:1}}>
              <View>
                <Image style={styles.avataImage} width={50}  source={require('../../assets/img/pearl.png') } />
              </View>
                <View style={{ flexDirection: 'column',  alignItems: 'center',  padding:15}}>
                  <Text style={styles.avataName}>큐플레이스</Text>
                  <Text style={styles.avataFollower}> 1.5만 팔로워</Text>
                </View>
            </TouchableOpacity>
            <View style={{ padding:30}} >
              <TouchableOpacity 
                style={styles.followButton}
                onPress={() => {}}>
                <Text style={styles.followText}>팔로우</Text>                
              </TouchableOpacity>
            </View>
          </View>
        <View style={{ flexDirection: 'row', width:"100%", justifyContent:"space-evenly"}}>
          <View style={{ flexDirection: 'column',  alignItems: 'flex-start'}}>
            <Image style={styles.image} width={190} height={280} source={require('../../assets/img/pearl.png') } />
            <Image style={styles.image} width={190} height={280} source={require('../../assets/img/pearl.png') } />
          </View>
          <View style={{ flexDirection: 'column',  alignItems: 'flex-end'}}>
            <Image style={styles.image} width={190} height={280} source={require('../../assets/img/pearl.png') } />
            <Image style={styles.image} width={190} height={280} source={require('../../assets/img/pearl.png') } />
          </View>
        </View>
        </View>
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
          // flex:0.0005,
          borderTopLeftRadius: 25,
          borderBottomLeftRadius:25,
          borderTopRightRadius: 25,
          borderBottomRightRadius: 25,
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
