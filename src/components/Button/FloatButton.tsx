import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';
import { NavigationScreenProp, withNavigation} from 'react-navigation';

export interface NavigationProps {
    navigation: NavigationScreenProp<any, any>
}
interface IProps extends NavigationProps {
}
interface IState {
  selectedButton?: string;
}


class FloatButton extends Component<IProps, IState>{
  constructor(props: IProps) {
    super(props)
}
 state:IState ={
  selectedButton:""
 }
_pageMove(path:string):void{
  this.props.navigation.navigate(path);
}
_selectionOnPress(path:string):void {
  this.setState({ selectedButton: path });
  console.log(this.state.selectedButton);
}
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.buttonContainer} >
            <TouchableOpacity onPress={() =>{this._pageMove('Home')} }>
             <Image style={styles.image} width={30}  source={require('../../assets/img/pinterIcon.jpg') } />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer} >
            <TouchableOpacity onPress={ () =>{ this._pageMove('Search');this._selectionOnPress('Search')} } >
              <Image style={styles.icon} width={30}  source={require('../../assets/img/search.png') } />
            </TouchableOpacity>          
          </View>
          <View style={styles.buttonContainer} >
          <TouchableOpacity onPress={ () =>{this._selectionOnPress('Notification');this._pageMove('Notification')} } >
              <Image style={[
                styles.icon,
                {
                  tintColor:
                      this.state.selectedButton == 'Notification'
                          ? "red"
                          : "grey"
              }
              ]} width={30}  source={require('../../assets/img/bell.png') } />
            </TouchableOpacity >             
          </View>
          <View style={styles.buttonContainer} >
          <TouchableOpacity onPress={ () =>{this._pageMove('Idea')} }>
              <Image style={styles.icon} width={30}  source={require('../../assets/img/user.png') } />
            </TouchableOpacity>             
          </View>
        </View> 

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

  export default withNavigation(FloatButton);