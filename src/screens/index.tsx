import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, View } from 'react-native';
import {NavigationScreenProp, SafeAreaView, withNavigation} from 'react-navigation';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import Image from 'react-native-scalable-image';
import Home from './Home/index';
import Search from './Search/index';
import Idea from './Idea/index';
import Notification from './Nofification/index';

export interface IndexState{
  index?:number;
  routes?: {key:string, title:string}[];
}

class Index extends React.Component< IndexState> {

    state:IndexState ={
      index: 0,
      routes: [
      { key: 'first', title: 'Home' },
      { key: 'second', title: 'Search' },
      { key: 'third', title: 'Idea' },
      { key: 'four', title: 'Notification' },
      ]
    };
    _updateRoute(newIdx:number):any {
      this.setState({index: newIdx})
    }

   render(){
    return (
    <SafeAreaView style={{backgroundColor:"#000000", flex:1}}> 
        <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: Home,
                    second : Search,
                    third : Idea,
                    four : Notification
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderTabBar={() => null}
                swipeEnabled={false}
                useNativeDriver/> 
        <View style={styles.container}>
        <View style={styles.buttonContainer} >
            <TouchableOpacity onPress={() =>{this._updateRoute(0)} }>
            <Image style={styles.image} width={30}  source={require('../assets/img/pinterIcon.jpg') } />
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer} >
            <TouchableOpacity onPress={ () =>{ this._updateRoute(1);} } >
            <Image style={styles.icon} width={30}  source={require('../assets/img/search.png') } />
            </TouchableOpacity>          
        </View>
        <View style={styles.buttonContainer} >
        <TouchableOpacity onPress={ () =>{this._updateRoute(2)} } >
            <Image style={[
                styles.icon,
                {
                tintColor:"gray"
            }
            ]} width={30}  source={require('../assets/img/bell.png') } />
            </TouchableOpacity >             
        </View>
        <View style={styles.buttonContainer} >
        <TouchableOpacity onPress={ () =>{this._updateRoute(3)} }>
            <Image style={styles.icon} width={30}  source={require('../assets/img/user.png') } />
            </TouchableOpacity>             
        </View>
        </View> 
    </SafeAreaView>
    );
    }
}
const styles = StyleSheet.create({
    image:{
      borderTopLeftRadius: 50,
      borderBottomLeftRadius:50,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50
    },
    icon:{
      tintColor: 'gray',
      borderTopLeftRadius: 50,
      borderBottomLeftRadius:50,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50
    },
    iconClick:{
      tintColor: '#ffffff',
      borderTopLeftRadius: 50,
      borderBottomLeftRadius:50,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50
    },
      container: {
          flexDirection: 'row',
          width: '70%', 
          height: 60, 
          backgroundColor: '#292929', 
          justifyContent: 'flex-end',
          alignItems: 'center',
          position: 'absolute',
          left:"15%",
          right:"15%",
          bottom: 50,
          borderTopLeftRadius: 50,
          borderBottomLeftRadius:50,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50
        },
  
      buttonContainer: {
        flex: 0.5,
        marginLeft:"9%",
        backgroundColor:'#292929',
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

export default withNavigation(Index);