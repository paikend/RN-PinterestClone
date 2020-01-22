
import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert, ScrollView  } from 'react-native';
// import Image from 'react-native-scalable-image';
import { checkPropTypes } from 'prop-types';
// import { Button } from 'react-native-elements';
export default class HumanScreen extends Component {
  render() {
    return (
      <ScrollView  showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

        <TouchableOpacity style={{width:"100%",flexDirection:'row',  overflow: 'hidden'}}>
        <View style={styles.container}>
          <View style={{flexDirection:'column', flex:.25}}>
            <View style={{flexDirection:'row', flex:1}}>
                <Image style={styles.avataImage}  source={require('../../assets/img/pearl.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/1.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/2.jpeg')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/5.jpeg')}></Image>
            </View>
          </View>
          <View style={{justifyContent:"flex-end",margin:10,left:5}}>
            <Text style={styles.chName}>
              빅펄
            </Text>
            <Text style={styles.chDetail}>
              5조오억명
            </Text>
            <Text style={styles.chDetail}>
              백경준이 추천함.
            </Text>
          </View>
        </View>
        <TouchableOpacity 
            style={styles.followButton}
            onPress={() => {}}>
            <Text style={styles.followText}>팔로우</Text>                
          </TouchableOpacity>
        </TouchableOpacity>


        <TouchableOpacity style={{width:"100%",flexDirection:'row',  overflow: 'hidden'}}>
        <View style={styles.container}>
          <View style={{flexDirection:'column', flex:.25}}>
            <View style={{flexDirection:'row', flex:1}}>
                <Image style={styles.avataImage}  source={require('../../assets/img/pearl.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/1.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/2.jpeg')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/5.jpeg')}></Image>
            </View>
          </View>
          <View style={{justifyContent:"flex-end",margin:10,left:5}}>
            <Text style={styles.chName}>
              빅펄
            </Text>
            <Text style={styles.chDetail}>
              5조오억명
            </Text>
            <Text style={styles.chDetail}>
              백경준이 추천함.
            </Text>
          </View>
        </View>
        <TouchableOpacity 
            style={styles.followButton}
            onPress={() => {}}>
            <Text style={styles.followText}>팔로우</Text>                
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"100%",flexDirection:'row',  overflow: 'hidden'}}>
        <View style={styles.container}>
          <View style={{flexDirection:'column', flex:.25}}>
            <View style={{flexDirection:'row', flex:1}}>
                <Image style={styles.avataImage}  source={require('../../assets/img/pearl.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/1.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/2.jpeg')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/5.jpeg')}></Image>
            </View>
          </View>
          <View style={{justifyContent:"flex-end",margin:10,left:5}}>
            <Text style={styles.chName}>
              빅펄
            </Text>
            <Text style={styles.chDetail}>
              5조오억명
            </Text>
            <Text style={styles.chDetail}>
              백경준이 추천함.
            </Text>
          </View>
        </View>
        <TouchableOpacity 
            style={styles.followButton}
            onPress={() => {}}>
            <Text style={styles.followText}>팔로우</Text>                
          </TouchableOpacity>
        </TouchableOpacity>


        <TouchableOpacity style={{width:"100%",flexDirection:'row',  overflow: 'hidden'}}>
        <View style={styles.container}>
          <View style={{flexDirection:'column', flex:.25}}>
            <View style={{flexDirection:'row', flex:1}}>
                <Image style={styles.avataImage}  source={require('../../assets/img/pearl.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/1.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/2.jpeg')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/5.jpeg')}></Image>
            </View>
          </View>
          <View style={{justifyContent:"flex-end",margin:10,left:5}}>
            <Text style={styles.chName}>
              빅펄
            </Text>
            <Text style={styles.chDetail}>
              5조오억명
            </Text>
            <Text style={styles.chDetail}>
              백경준이 추천함.
            </Text>
          </View>
        </View>
        <TouchableOpacity 
            style={styles.followButton}
            onPress={() => {}}>
            <Text style={styles.followText}>팔로우</Text>                
          </TouchableOpacity>
        </TouchableOpacity>


        <TouchableOpacity style={{width:"100%",flexDirection:'row',  overflow: 'hidden'}}>
        <View style={styles.container}>
          <View style={{flexDirection:'column', flex:.25}}>
            <View style={{flexDirection:'row', flex:1}}>
                <Image style={styles.avataImage}  source={require('../../assets/img/pearl.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/1.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/2.jpeg')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/5.jpeg')}></Image>
            </View>
          </View>
          <View style={{justifyContent:"flex-end",margin:10,left:5}}>
            <Text style={styles.chName}>
              빅펄
            </Text>
            <Text style={styles.chDetail}>
              5조오억명
            </Text>
            <Text style={styles.chDetail}>
              백경준이 추천함.
            </Text>
          </View>
        </View>
        <TouchableOpacity 
            style={styles.followButton}
            onPress={() => {}}>
            <Text style={styles.followText}>팔로우</Text>                
          </TouchableOpacity>
        </TouchableOpacity>


        <TouchableOpacity style={{width:"100%",flexDirection:'row',  overflow: 'hidden'}}>
        <View style={styles.container}>
          <View style={{flexDirection:'column', flex:.25}}>
            <View style={{flexDirection:'row', flex:1}}>
                <Image style={styles.avataImage}  source={require('../../assets/img/pearl.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/1.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/2.jpeg')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/5.jpeg')}></Image>
            </View>
          </View>
          <View style={{justifyContent:"flex-end",margin:10,left:5}}>
            <Text style={styles.chName}>
              빅펄
            </Text>
            <Text style={styles.chDetail}>
              5조오억명
            </Text>
            <Text style={styles.chDetail}>
              백경준이 추천함.
            </Text>
          </View>
        </View>
        <TouchableOpacity 
            style={styles.followButton}
            onPress={() => {}}>
            <Text style={styles.followText}>팔로우</Text>                
          </TouchableOpacity>
        </TouchableOpacity>



        <TouchableOpacity style={{width:"100%",flexDirection:'row',  overflow: 'hidden'}}>
        <View style={styles.container}>
          <View style={{flexDirection:'column', flex:.25}}>
            <View style={{flexDirection:'row', flex:1}}>
                <Image style={styles.avataImage}  source={require('../../assets/img/pearl.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/1.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/2.jpeg')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/5.jpeg')}></Image>
            </View>
          </View>
          <View style={{justifyContent:"flex-end",margin:10,left:5}}>
            <Text style={styles.chName}>
              빅펄
            </Text>
            <Text style={styles.chDetail}>
              5조오억명
            </Text>
            <Text style={styles.chDetail}>
              백경준이 추천함.
            </Text>
          </View>
        </View>
        <TouchableOpacity 
            style={styles.followButton}
            onPress={() => {}}>
            <Text style={styles.followText}>팔로우</Text>                
          </TouchableOpacity>
        </TouchableOpacity>


        <TouchableOpacity style={{width:"100%",flexDirection:'row',  overflow: 'hidden'}}>
        <View style={styles.container}>
          <View style={{flexDirection:'column', flex:.25}}>
            <View style={{flexDirection:'row', flex:1}}>
                <Image style={styles.avataImage}  source={require('../../assets/img/pearl.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/1.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/2.jpeg')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/5.jpeg')}></Image>
            </View>
          </View>
          <View style={{justifyContent:"flex-end",margin:10,left:5}}>
            <Text style={styles.chName}>
              빅펄
            </Text>
            <Text style={styles.chDetail}>
              5조오억명
            </Text>
            <Text style={styles.chDetail}>
              백경준이 추천함.
            </Text>
          </View>
        </View>
        <TouchableOpacity 
            style={styles.followButton}
            onPress={() => {}}>
            <Text style={styles.followText}>팔로우</Text>                
          </TouchableOpacity>
        </TouchableOpacity>


        <TouchableOpacity style={{width:"100%",flexDirection:'row',  overflow: 'hidden'}}>
        <View style={styles.container}>
          <View style={{flexDirection:'column', flex:.25}}>
            <View style={{flexDirection:'row', flex:1}}>
                <Image style={styles.avataImage}  source={require('../../assets/img/pearl.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/1.png')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/2.jpeg')}></Image>
                <Image style={styles.image}  source={require('../../assets/img/5.jpeg')}></Image>
            </View>
          </View>
          <View style={{justifyContent:"flex-end",margin:10,left:5}}>
            <Text style={styles.chName}>
              빅펄
            </Text>
            <Text style={styles.chDetail}>
              5조오억명
            </Text>
            <Text style={styles.chDetail}>
              백경준이 추천함.
            </Text>
          </View>
        </View>
        <TouchableOpacity 
            style={styles.followButton}
            onPress={() => {}}>
            <Text style={styles.followText}>팔로우</Text>                
          </TouchableOpacity>
        </TouchableOpacity>
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
          // flex:0.05,
          borderRadius: 50,
          borderWidth: 2.5,
          borderColor:"black",
          marginTop:15,
          padding:20,
          // borderEndColor:"black",
          // borderRightColor:"black",
          // shadowColor:"black",
          left:10,
          // borderColor:"black",
          // borderRightWidth:10,
          // padding
          // padding:10,
          width:102.5,
          height:102.5,
        },
        image:{
          left:-35,
          zIndex:-1,
          width:110,
          height:100,
          marginTop:15,
          // borderRadius:10,
          // left
          marginLeft:2.5,
        },
        followButton: {
          backgroundColor:'#e40017',
          alignItems:"center",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius:10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          alignContent:'center',
          justifyContent:'center',
          alignSelf: 'flex-end',
          width:70,
          height:40,
          flexDirection: 'row', 
          // padding:20,
          fontSize: 20,
          fontWeight: 'bold',
          marginRight:10,
          marginBottom:25
        },
        followText:{
          color:"white",
          fontSize:18
        },
        chName:{
          // paddingLeft:5,
          color:"white",
          fontSize:18,
          // marginTop:7,
          // padding:10,
          fontWeight:"bold",          
          textAlign:"left",
          marginTop:10,
          paddingBottom:5
        },
        chDetail:{
          // paddingLeft:5,
          color:"white",
          fontSize:12,
          // marginTop:7,
          // padding:10,
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
