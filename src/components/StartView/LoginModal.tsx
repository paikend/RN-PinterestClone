
import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text, TouchableOpacity, ImageBackground, StatusBar, Modal,TextInput, Alert } from 'react-native';
import { NavigationScreenProp, withNavigation, SafeAreaView,} from 'react-navigation';
import Image from 'react-native-scalable-image';
import { AsyncStorage } from "react-native";


import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const SIGN_IN = gql`
mutation{
  tokenAuth(email:"", password:""){
    token
  }
}
`;



export interface NavigationProps {
    navigation: NavigationScreenProp<any, any>
}
interface ModalProps extends NavigationProps {
}
// AsyncStorage.setItem('token', responseData.data.access_token);

interface ModalState{
  modal?: boolean;
  email?: string;
  password?:string;
  alertMessage?: string;
  
  // {visible:boolean}[];
}
function LoginModal(){
  props:ModalProps = {}
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(ModalProps, count);
    return () => {
      console.log("Clean up");
    };
  }, [count]);

  _Login(){
    useQuery(SIGN_IN)
  }
  return (
    <SafeAreaView style={{backgroundColor:"#000000", flex:1}}> 
      <View style={styles.modalScreen}>
          <View style={{flex:1,}}>      
              <TouchableOpacity style={styles.btnClose} onPress={()=>{this._modalOpen(this.state.modal);}}>
              <Image  source={require('../../assets/img/close.png')} width={17} style={{left:5, tintColor:"#ffffff"}}/>
              </TouchableOpacity>
              <View style={{alignContent:"center", alignSelf:"center", bottom:10}}>
              <Text style={styles.textTobBar}>로그인</Text>
              </View>
          </View>
      <View style={{alignItems:"center", flex:6, top:30}}>
          <TouchableOpacity style={styles.btnTopLoginFacebook}>
          <Text style={styles.btnText}>Facebook으로 계속하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnTopLoginGoogle}>
      <Text style={styles.btnText}>Google로 계속하기</Text>
      </TouchableOpacity>
      <Text style={{color:"#ffffff", margin:25, fontSize:17, fontWeight:"600" }}>또는</Text>

      </View>
        <View style={{alignItems:"flex-start", justifyContent:"flex-start", flex:12, top:50}}>
        <Text style={styles.InputTextText}>이메일</Text>
        <TextInput onChangeText={(text:string) => this._validateEmail(text)} value={this.state.email} style={{ left:10 , width:"100%", height:50, fontSize:27, color:"#ffffff"}} textContentType={"emailAddress"} placeholder={"이메일을 입력하세요"} placeholderTextColor={"gray"} ></TextInput>
        <Text style={{color:'red', fontSize:17, margin:10}}>{this.state.alertMessage}</Text>
        <Text style={styles.InputTextText}>비밀번호</Text>
        <TextInput style={{ left:10 , width:"100%", height:50, fontSize:27, color:"#ffffff"}} onChangeText={(text:string) => this.setState({password:text})} value={this.state.password} secureTextEntry={true} textContentType={"password"} placeholder={"비밀번호를 입력하세요"} placeholderTextColor={"gray"} ></TextInput>
        <TouchableOpacity style={styles.btnLogin} onPress={()=>{this._Login("Index");}}>
        <Text style={styles.btnText}>로그인</Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:"center", flex:10,top:45}}>

          <Text style={{color:"#ffffff", fontSize:17, fontWeight:"600", margin:10 }}>비밀번호를 잊으셨나요?</Text>
          <Text style={{color:"#ffffff", fontSize:17, fontWeight:"600", margin:10 }}>iCloud 키체인 사용하기</Text>

        </View>
      </View>
  </SafeAreaView>

  );
}
// class LoginModal extends React.Component<ModalProps, ModalState> {
//   constructor(props: ModalProps) {
//     super(props)
// }
//   state:ModalState={
//     modal:false,
//     email:'',
//     alertMessage:'',
//     password:''
//   }

//   componentDidMount() {
//     StatusBar.setBarStyle('light-content');
  
//   }
  // _Login(path:any):void{
  //   // if(this.state.email == "paikend@gmail.com" && this.state.password == "admin"){
  //     this.props.navigation.navigate(path);
  //   // }
//   console.log("id and password not mached !")
//   }
//   _modalOpen(isOpen:any):void{
//     this.setState({modal:!isOpen});
//   }
//   _validateEmail(text:string):any{
//     console.log(text);
//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
//     if(reg.test(text) === false)
//     {
//     this.setState({alertMessage:'올바른 이메일 주소가 아닙니다.'})
//     this.setState({email:text})
//     return false;
//       }
//     else {
//       this.setState({email:text})
//       this.setState({alertMessage:''})
//     }
//   }
//   render(){
//     return (
//             <SafeAreaView style={{backgroundColor:"#000000", flex:1}}> 
//             <View style={styles.modalScreen}>
//                 <View style={{flex:1,}}>      
//                     <TouchableOpacity style={styles.btnClose} onPress={()=>{this._modalOpen(this.state.modal);}}>
//                     <Image  source={require('../../assets/img/close.png')} width={17} style={{left:5, tintColor:"#ffffff"}}/>
//                     </TouchableOpacity>
//                     <View style={{alignContent:"center", alignSelf:"center", bottom:10}}>
//                     <Text style={styles.textTobBar}>로그인</Text>
//                     </View>
//                 </View>
//             <View style={{alignItems:"center", flex:6, top:30}}>
//                 <TouchableOpacity style={styles.btnTopLoginFacebook}>
//                 <Text style={styles.btnText}>Facebook으로 계속하기</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.btnTopLoginGoogle}>
//             <Text style={styles.btnText}>Google로 계속하기</Text>
//             </TouchableOpacity>
//             <Text style={{color:"#ffffff", margin:25, fontSize:17, fontWeight:"600" }}>또는</Text>

//             </View>
//             <View style={{alignItems:"flex-start", justifyContent:"flex-start", flex:12, top:50}}>
//             <Text style={styles.InputTextText}>이메일</Text>
//             <TextInput onChangeText={(text:string) => this._validateEmail(text)} value={this.state.email} style={{ left:10 , width:"100%", height:50, fontSize:27, color:"#ffffff"}} textContentType={"emailAddress"} placeholder={"이메일을 입력하세요"} placeholderTextColor={"gray"} ></TextInput>
//             <Text style={{color:'red', fontSize:17, margin:10}}>{this.state.alertMessage}</Text>
//             <Text style={styles.InputTextText}>비밀번호</Text>
//             <TextInput style={{ left:10 , width:"100%", height:50, fontSize:27, color:"#ffffff"}} onChangeText={(text:string) => this.setState({password:text})} value={this.state.password} secureTextEntry={true} textContentType={"password"} placeholder={"비밀번호를 입력하세요"} placeholderTextColor={"gray"} ></TextInput>
//             <TouchableOpacity style={styles.btnLogin} onPress={()=>{this._Login("Index");}}>
//             <Text style={styles.btnText}>로그인</Text>
//             </TouchableOpacity>
//             </View>
//             <View style={{alignItems:"center", flex:10,top:45}}>

//              <Text style={{color:"#ffffff", fontSize:17, fontWeight:"600", margin:10 }}>비밀번호를 잊으셨나요?</Text>
//              <Text style={{color:"#ffffff", fontSize:17, fontWeight:"600", margin:10 }}>iCloud 키체인 사용하기</Text>

//             </View>
//             </View>
//             </SafeAreaView>

//         );
//     }
// }



const styles = StyleSheet.create({
    InputTextText:{
        left:10,
        color:'#ffffff',
        fontSize:17,
    },
    textTobBar:{
      color:'#ffffff',
      fontWeight:"600",
      fontSize:17,
      alignSelf:'center',
      alignItems:"center",
    },
    textModal:{
      color:'#ffffff',
      fontWeight:"bold",
      fontSize:25,
    },
    btnClose:{
      flexDirection:"row",
      alignItems:"flex-start",
      justifyContent: 'flex-start',
      flex:0.1,
      width: 75,
      height:30,
      margin:10,
    },
    
    textClose:{
      color:'#ffffff',
      fontWeight:"bold",
      fontSize:20,
      // flex:0.,
  
    },
    modalScreen:{
      backgroundColor:"#000000",
      flex:1,
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
      fontWeight:"600",
      fontSize:28,
      color:"#ffffff"
    },
    btnText:{
      fontWeight:"600",
      fontSize:17,
      color:"#ffffff"
    },


    btnTopLoginFacebook:{
      backgroundColor:'#415893',
      alignItems:"center",
      justifyContent:"center",
      borderTopLeftRadius: 40,
      borderBottomLeftRadius:40,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      width:'95%',
      height:50,
    //   top:10,
      margin:5
    },
    btnTopLoginGoogle:{
      backgroundColor:'#4285F4',
      alignItems:"center",
      justifyContent:"center",
      borderTopLeftRadius: 40,
      borderBottomLeftRadius:40,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,

      width:'95%',
      height:50,
      margin:5
    },

    btnLogin:{
      backgroundColor:'#383838',
      alignItems:"center",
      justifyContent:"center",
      borderTopLeftRadius: 40,
      borderBottomLeftRadius:40,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      width:'95%',
      height:50,
      top:10,
      margin:5
  
    },
  });

  export default withNavigation(LoginModal)