import React from 'react';
import {NavigationScreenProp, SafeAreaView} from 'react-navigation';
import {
    ScrollView,
    Dimensions,
    StyleSheet
} from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';

import FloatButton from '../../components/Button/FloatButton';
import FamousScreen from '../../components/SearchView/FamousScreen';
import HumanScreen from '../../components/SearchView/HumanScreen';
import ForUserScreen from '../../components/SearchView/ForUserScreen';
// import RecommandScreen from '../../components/SerchView/RecommandScreen'
import TopSwitch from '../../components/SearchView/TopSwtich'
export interface NavigationProps {
    navigation: NavigationScreenProp<any, any>
}

interface SearchProps extends NavigationProps {
}
interface SearchState {
    index?:number;
    routes?: {key:string, title:string}[];
}

export default class Search extends React.Component<SearchProps, SearchState> {
    state:SearchState ={
        index: 0,
        routes: [
      { key: 'first', title: '인기' },
      { key: 'second', title: '회원님을 위한 추천' },
      { key: 'third', title: '사람'},
      ]
    };
    _updateRoute(newIdx:number):any {
      this.setState({index: newIdx})
    }

    render() {
        return (
        <SafeAreaView style={{backgroundColor:"#000000", flex:1}}> 
            <TopSwitch/>
                <TabView 
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FamousScreen,
                        second:ForUserScreen,
                        third: HumanScreen
                    })}
                    onIndexChange={index=> this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    renderTabBar={ (props) => <TabBar 
                        {...props}
                        // renderIcon={this.renderIcon}
                        style={styles.tabStyle}
                        // scrollEnabled={true}
                        
                        // labelStyle={styles.labelStyle}
                        // tabStyle={styles.tabStyle}
                        indicatorStyle={styles.indicatorStyle}
                        />}
                    useNativeDriver
                />  
            <FloatButton/>
        </SafeAreaView>
        );
    }
    
}
const styles = StyleSheet.create({
    tabStyle:{
        // position:"absolute",
        // zIndex: ,
        // top:"50%",
        // position:,
        // backgroundColor:""
        backgroundColor:"#000000"
        // color:"#000000"
    },
    indicatorStyle: {
        backgroundColor:"#ffffff"
        
        // color:"red"
    //   justifyContent: 'flex-start',
      // alignItems: 'center',
    //   flex: 1,
  },
});