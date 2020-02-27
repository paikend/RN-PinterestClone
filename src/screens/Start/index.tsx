import React from 'react';
import { StyleSheet, View,Text, TouchableOpacity, ImageBackground, StatusBar, Modal,TextInput } from 'react-native';
import Image from 'react-native-scalable-image';
import { NavigationScreenProp, withNavigation, SafeAreaView,} from 'react-navigation';
import StartInfo from '../../components/StartView/StartInfo';
// import LoginModal from '../../components/StartView/LoginModal';

export interface NavigationProps {
    navigation: NavigationScreenProp<any, any>
}
interface StartProps extends NavigationProps {
}

interface StartState{
  modal?: boolean;
  // {visible:boolean}[];
}

class Start extends React.Component<StartProps, StartState> {
  constructor(props: StartProps) {
    super(props)
}
  state:StartState={
    modal:false
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content');

  }
  _pageMove(path:any):void{
    this.props.navigation.navigate(path);
  }
  _modalOpen(isOpen:any):void{
    this.setState({modal:!isOpen});
  }
  render(){
    return (
      
      <ImageBackground source={require('../../assets/img/bg.gif')} style={{width: '100%', height: '100%'}}>
      <View style={styles.scene}>
      <Image style={styles.img}width={200}source={require('../../assets/img/pinterIcon.jpg') } ></Image>
      <Text style={styles.mainText}>Pinterest에 오신 것을 환영합니다</Text>
      <TouchableOpacity style={styles.btnLoginEmail} onPress={()=>{}}>
        <Text style={styles.btnText}>이메일로 계속하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLoginFacebook}>
        <Text style={styles.btnText}>Facebook으로 계속하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLoginGoogle}>
       <Text style={styles.btnText}>Google로 계속하기</Text>
      </TouchableOpacity>



      
      <Modal animationType = {"slide"} transparent = {false} visible = {this.state.modal}>
          {/* <LoginModal/> */}
      </Modal>




      <TouchableOpacity style={styles.btnLogin} onPress={()=>{this._modalOpen(this.state.modal);}}>
       <Text style={styles.btnText}>로그인</Text>
      </TouchableOpacity>
      <StartInfo/>
      </View>
      </ImageBackground>
    );
  }
  }


const styles = StyleSheet.create({
  textTobBar:{
    color:'#ffffff',
    fontWeight:"bold",
    fontSize:15,
    alignSelf:'center',
    alignItems:"center",
    margin:5
  },
  textModal:{
    color:'#ffffff',
    fontWeight:"bold",
    fontSize:25,
  },
  btnClose:{
    // margin:2.5,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: 'center',
    flex:0.1,
    width: 75,
    height:30,
    margin:10,
  },
  
  textClose:{
    color:'#ffffff',
    fontWeight:"bold",
    fontSize:25,
    // flex:0.,

  },
  modalScreen:{
    backgroundColor:"#000000",
    flex:1,
  },
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
    height:15,
    fontSize: 20,
    margin:2.5,
    top:10
  },
  btnTopLoginFacebook:{
    backgroundColor:'#415893',
    alignItems:"center",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius:40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    flex:0.10,
    width:'85%',
    height:15,
    fontSize: 20,
    margin:2.5,
    top:10
  },
  btnTopLoginGoogle:{
    backgroundColor:'#4285F4',
    alignItems:"center",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius:40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    // flex:0.10,
    width:'85%',
    height:30,
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
});

export default withNavigation(Start);