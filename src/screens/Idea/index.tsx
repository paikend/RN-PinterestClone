import React from 'react';
import { StyleSheet,ScrollView, Dimensions, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import FloatButton from '../../components/Button/FloatButton';
import RecommandScreen from '../../components/HomeView/RecommandScreen';
// import TopSwitch from '../../components/HomeView/TopSwtich';
import FollowingScreen from '../../components/HomeView/FollowingScreen';
import { SafeAreaView, } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import SwitchSelector from "react-native-switch-selector";




export interface IdeaProps{
}
export interface IdeaState{
  index?:number;
  routes?: {key:string, title:string}[];

}

class Idea extends React.Component<IdeaProps, IdeaState> {

    state:IdeaState ={
      index: 0,
      routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      ]
    };
    _updateRoute(newIdx:number):any {
      this.setState({index: newIdx})
    }

  render(){
    return (
      <SafeAreaView style={{backgroundColor:"#000000", flex:1}}> 
                <View style={{ flex: 0.075, justifyContent: 'flex-start', alignItems: 'center'}}>
            <SwitchSelector
                style={{width:'30%', backgroundColor:'#000000', borderColor:'#000000'}}
                value={this.state.index}
                initial={this.state.index}
                textColor={'#EEEEEC'} 
                onPress={(value:number) => { this._updateRoute(value)}}
                selectedColor={'#000000'}
                backgroundColor={'#000000'}
                buttonColor={'#EEEEEC'}
                borderColor={'#000000'}
                height={50}
                fontSize={18}
                // hasPadding
                options={[
                    { label: "보드", value: 0},
                    { label: "핀", value: 1}
                ]}
                />
      </View>
          <ScrollView style={{flex:1}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >

          <TabView
              navigationState={this.state}
              renderScene={SceneMap({
                  first: RecommandScreen,
                  second:FollowingScreen,
              })}
              onIndexChange={index => this.setState({ index })}
              initialLayout={{ width: Dimensions.get('window').width }}
              renderTabBar={() => null}
              useNativeDriver
          />  
          </ScrollView>
          <FloatButton/>
      </SafeAreaView>
    );
  }
  }


const styles = StyleSheet.create({
  scene: {
    justifyContent: 'flex-start',
    // alignItems: 'center',
    flex: 1,
},
});

export default withNavigation(Idea);