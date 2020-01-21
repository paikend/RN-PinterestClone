import React from 'react';
import { StyleSheet, Linking, View,Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';

import Image from 'react-native-scalable-image';

import { NavigationScreenProp, withNavigation} from 'react-navigation';

export interface NavigationProps {
    navigation: NavigationScreenProp<any, any>
}
interface StartProps extends NavigationProps {
}

interface StartState{

}

class Start extends React.Component<StartProps, StartState> {
  constructor(props: StartProps) {
    super(props)
}

  _updateRoute(newIdx:number):any {
    this.setState({index: newIdx})
  }
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  
  }
  _pageMove(path:string):void{
    this.props.navigation.navigate(path);
  }
  render(){
    return (
      // <SafeAreaView style={{ backgroundColor:"#000000", flex:1}}>
        <ImageBackground source={require('../../assets/img/bg.gif')} style={{width: '100%', height: '100%'}}>
      <View style={styles.scene}>
      <Image style={styles.img}width={200}source={require('../../assets/img/pinterIcon.jpg') } ></Image>
      <Text style={styles.mainText}>Pinterest에 오신 것을 환영합니다</Text>
      
      <TouchableOpacity style={styles.btnLoginEmail}>
        <Text style={styles.btnText}>이메일로 계속하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLoginFacebook}>
        <Text style={styles.btnText}>Facebook으로 계속하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLoginGoogle}>
       <Text style={styles.btnText}>Google로 계속하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogin} onPress={()=>{ this._pageMove('Home')}}>
       <Text style={styles.btnText}>로그인</Text>
      </TouchableOpacity>
      <View style={{margin:20 }}>
        <Text style={styles.infoText}>계속 진행하면 Pinterest의 <Text style={{fontWeight:"bold"}} onPress={()=>{Linking.openURL("https://ad.bigpearl.io/#tos");}}>서비스약관</Text> 및 <Text style={{fontWeight:"bold"}} onPress={()=>{Linking.openURL("https://ad.bigpearl.io/#privacy");}}>개인정보 보호정책</Text>에 동의한 것으로 간주됩니다.</Text>
      </View>
      </View>
      </ImageBackground>
      // </SafeAreaView>
    );
  }
  }


const styles = StyleSheet.create({
  img:{
    borderTopLeftRadius:150,
    borderTopRightRadius:150,
    borderBottomLeftRadius:150,
    borderBottomRightRadius:150,
  },
  scene: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection:"column",
    top:"10%"
  },
  mainText: {
    margin:15,
    fontWeight:"bold",
    fontSize:28,
    color:"#ffffff"
  },
  btnText:{
    fontWeight:"bold",
    fontSize:20,
    color:"#ffffff"
  },
  btnLoginEmail: {
    margin:2.5,
    backgroundColor:'#e40017',
    alignItems:"center",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius:40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    flex:0.15,
    width:'95%',
    height:10,
    fontSize: 20,
    fontWeight: 'bold',
    top:10
  },
  btnLoginFacebook: {
    backgroundColor:'#415893',
    alignItems:"center",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius:40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    flex:0.15,
    width:'95%',
    height:10,
    fontSize: 20,
    fontWeight: 'bold',
    margin:2.5,
    top:10
  },
  btnLoginGoogle: {
    backgroundColor:'#4285F4',
    alignItems:"center",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius:40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    flex:0.15,
    width:'95%',
    height:10,
    fontSize: 20,
    fontWeight: 'bold',
    margin:2.5,
    top:10
  },
  btnLogin:{
    backgroundColor:'#383838',
    alignItems:"center",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius:40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    flex:0.15,
    width:'95%',
    height:10,
    fontSize: 20,
    fontWeight: 'bold',
    top:10,
    margin:20,

  },
  infoText:{
    // fontWeight:"bold",
    textAlign:"center",
    alignContent:"center",
    fontSize:13,
    color:"#ffffff"
  }
});

export default withNavigation(Start);