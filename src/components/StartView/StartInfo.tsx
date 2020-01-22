

import React, { Component } from 'react';
import { Text, View,  StyleSheet, Linking} from 'react-native';


export default class StartInfo extends Component {
    render() {
      return (
        <View style={{margin:20 }}>
        <Text style={styles.infoText}>계속 진행하면 Pinterest의 <Text style={{fontWeight:"bold"}} onPress={()=>{Linking.openURL("https://ad.bigpearl.io/#tos");}}>서비스약관</Text> 및 <Text style={{fontWeight:"bold"}} onPress={()=>{Linking.openURL("https://ad.bigpearl.io/#privacy");}}>개인정보 보호정책</Text>에 동의한 것으로 간주됩니다.</Text>
        </View>
      );
    }
  }
  

  const styles = StyleSheet.create({
    infoText:{
      // fontWeight:"bold",
      textAlign:"center",
      alignContent:"center",
      fontSize:13,
      color:"#ffffff"
    }
  });
  
//   export default withNavigation(Start);

// render(
//     return (
//         <View style={{margin:20 }}>
//         <Text style={styles.infoText}>계속 진행하면 Pinterest의 <Text style={{fontWeight:"bold"}} onPress={()=>{Linking.openURL("https://ad.bigpearl.io/#tos");}}>서비스약관</Text> 및 <Text style={{fontWeight:"bold"}} onPress={()=>{Linking.openURL("https://ad.bigpearl.io/#privacy");}}>개인정보 보호정책</Text>에 동의한 것으로 간주됩니다.</Text>
//         </View>
//         )
// )  