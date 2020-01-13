// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, SafeAreaView, Button,  Alert, StyleSheet } from 'react-native';
import { DeclareInterface } from '@babel/types';
//import all the components we are going to use.
// interface props {}
export default class RecommandScreen extends Component {
  constructor(props:DeclareInterface){
    super(props);
    this.state={
        show:false
    }
  }
  showCancel=()=>{
    this.setState({show:true})
  };

  hideCancel=()=>{
      this.setState({show:false})
  };  
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.buttonContainer} >
            <Button title="m" onPress={this.showCancel} />
          </View>
          <View style={styles.buttonContainer} >
            <Button title="m" onPress={this.hideCancel}/>
          </View>
          <View style={styles.buttonContainer} >
            <Button title="m" onPress={() => Alert.alert('Simple Button pressed')} />
          </View>
          <View style={styles.buttonContainer} >
            <Button title="m" onPress={() => Alert.alert('Simple Button pressed')} />
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '75%', 
        height: 75, 
        backgroundColor: '#4e4e4e', 
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        left: '15%',
        right: '15%',
        bottom: 20,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius:50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
        
        // bottom: 0
    },

    buttonContainer: {
      flex: 1,
      backgroundColor:'#4e4e4e',
      justifyContent: 'center',
      borderTopLeftRadius: 50,
      borderBottomLeftRadius:50,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50
    },
      fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
  });