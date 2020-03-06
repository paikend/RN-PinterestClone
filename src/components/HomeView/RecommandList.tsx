import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState, useEffect } from 'react';
import { Text, View,  StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Image from 'react-native-scalable-image';

const GET_PIN_LIST = gql`
  query {
    allPins{
      id
      title
      photoUrl
    }
  }
`;


function RecommandList(){
    const { loading, error, data } = useQuery(GET_PIN_LIST);
    let leftSide, rightSide = [];
    if (loading) return (<View>
      <Text>loading</Text>
    </View>);
    if (error) return (<View>
      <Text>err</Text>
    </View>);
    leftSide = data['allPins'].splice(0, Math.ceil(data['allPins'].length /2));
    rightSide = data['allPins'];
    return (
        <>
        <View style={ styles.leftContainer }>
        { leftSide.map((pin:any) =>(
         <View style={styles.flexOne}>
           <Image style={ styles.image} width={190} source= {{ uri:pin.photoUrl }}  />
           <View style={styles.imageText}>
             <Text style={styles.text}> { pin.title }</Text>
             <TouchableOpacity style={styles.tochableEtc}><Text style={styles.etc}>···</Text></TouchableOpacity>
           </View>
         </View>
        ))}
    </View>
    <View style={ styles.rightContainer }>
    { rightSide.map((pin:any) =>(
         <View style={styles.flexOne}>
           <Image style={ styles.image} width={190} source= {{ uri:pin.photoUrl }}  />
           <View style={styles.imageText}>
             <Text style={styles.text}> { pin.title }</Text>
             <TouchableOpacity style={styles.tochableEtc}><Text style={styles.etc}>···</Text></TouchableOpacity>
           </View>
         </View>
    
    ))}
    </View>
    </>
    )

    
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
export default RecommandList