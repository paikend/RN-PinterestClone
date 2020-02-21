import React, { Component } from 'react';
import { Text, View,  StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Image from 'react-native-scalable-image';
import axios from 'axios'

export default class RecommandScreen extends Component {
  async componentDidMount() {
  const res =  await axios.get('http://localhost:8000/boards/pins').then(res => res.data).catch()
  console.log(res['results'][0]);
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.leftContainer}>
          <View style={styles.flexOne}>
            <Image style={styles.image} width={190}  source={require('../../assets/img/1.png') } />
            <View style={styles.imageText}>
              <Text style={styles.text}> sgfdsfgdsfgdad432</Text>
              <TouchableOpacity style={styles.tochableEtc}><Text style={styles.etc}>···</Text></TouchableOpacity>
            </View>
          </View>
      </View>

        <View style={styles.rightContainer}>
        
          <View style={styles.flexOne}>
            <Image style={styles.image} width={190}  source={require('../../assets/img/2.jpeg') } />
            <View style={styles.imageText}>
              <Text style={styles.text}> </Text>
              <TouchableOpacity><Text style={styles.etc}>···</Text></TouchableOpacity>
            </View>
          </View>

        </View>
    </View>
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