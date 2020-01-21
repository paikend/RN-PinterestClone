import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from "react-native-elements";
import Home from "../screens/Home";
import Start from '../screens/Start';
// import Search from "../screens/Search";
// import Like from "../screens/Favorite";
// import Profile from "../screens/Profile";

// import {colors} from "../utils/theme";
// import Add from "../screens/Add";

export default (createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                
                // tabBarIcon: ({tintColor}) => <Image style={{width: 32, height: 32}}
                //                                     source={require('../assets/img/1.png')}/>
            }
        },
        Start: {
            screen: Start,
            navigationOptions: {
                // tabBarIcon: ({tintColor}) => <Image style={{width: 32, height: 32}}
                //                                     source={require('../assets/images/search.png')}/>
            }
        },
    },
    {
        tabBarOptions: {
            showLabel: false,
            tabStyle: {
                padding: 20
            },
        },
        initialRouteName: 'Home',

    }
));