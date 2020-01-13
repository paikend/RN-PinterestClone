// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Image from 'react-native-scalable-image';

//import all the components we are going to use.
import FloatButton from '../components/FloatButton';
import { InterfaceDeclaration } from '@babel/types';
// interface P
// interface props {

// }
export default class RecommandScreen extends Component {
  componentDidMount() {
      StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
        <SafeAreaView style={{backgroundColor:"#000000"}}> 
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/1.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/pearl.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/1.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/pearl.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/pearl.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/pearl.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
          <View>
            <Image style={styles.image} width={200}  source={require('../img/1.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/1.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/pearl.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/pearl.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/1.png') } />
            <Text style={styles.text}> 하이하이 </Text>
            </View>
            <View>
            <Image style={styles.image} width={200}  source={require('../img/pearl.png') } />
              <Text style={styles.text}> 하이하이 </Text>
            </View>
          </View>
        </View>
        </ScrollView>
        <FloatButton/>
      </SafeAreaView>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    // justifyContent: 'space-between',
    backgroundColor:'#000000',
    flex: 1,
    flexDirection: 'row'
    // flexDirection: 'row', // 혹은 'column'
  },
  leftContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000000',
  },
  rightContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor:'#000000',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor:'#000000',
    justifyContent: 'center',
  },
  image:{
    borderTopLeftRadius: 50,
    borderBottomLeftRadius:50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  },
  text:{
    color: '#FFFFFF',
    fontSize: 17,
  }
});