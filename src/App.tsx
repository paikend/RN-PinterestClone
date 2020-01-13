//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import RecommandScreen from './containers/RecommandScreen';
import FollowingScreen from './containers/FollowingScreen';
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
 
const TopTabNavigator = createMaterialTopTabNavigator(
  {
    추천: { screen: RecommandScreen },
    팔로잉: { screen: FollowingScreen },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    // animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#000000',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);

// const BottomTabNavigator = createBottomTabNavigator(
//   {
//     추천: { screen: RecommandScreen },
//     팔로잉: { screen: FollowingScreen },
//   },
//   {
//     tabBarPosition: 'bottom',
//     swipeEnabled: true,
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#FFFFFF',
//       inactiveTintColor: '#F8F8F8',
//       style: {
//         backgroundColor: '#000000',
//       },
//       labelStyle: {
//         textAlign: 'center',
//       },
//       indicatorStyle: {
//         borderBottomColor: '#87B56A',
//         borderBottomWidth: 2,
//       },
//     },
//   }
// );
 
const App = createStackNavigator({
  TopTabNavigator: {
    screen: TopTabNavigator,
    // headerMode: 'none',
    navigationOptions: {
      headerStyle: {      
        height:30,  
        backgroundColor: "#000000"      
      },
      // header:null,
      headerTintColor: '#FFFFFF',
      title: '',
    },
  },
  // BottomTabNavigator:{
  //   screen: BottomTabNavigator,
  //   // headerMode: 'none',
  //   navigationOptions: {
  //     title: '',
  //   },
  // }
});
export default createAppContainer(App);