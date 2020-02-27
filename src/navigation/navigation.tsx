import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack';

import Start from "../screens/Start";
import Home from "../screens/Home";
import Search from '../screens/Search';
import Notification from '../screens/Nofification'
import Idea from "../screens/Idea";
import Index from '../screens';

// interface typeOption = {
 
// }
const appStack = createStackNavigator({
    Index: {
        screen: Index,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null,
        }),

    },
    Start: {
        screen: Start,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null,
        }),

    },
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null,

        })
    },
    Search: {
        screen: Search,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null,

        })
    },
    Notification: {
        screen: Notification,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null,

        })
    },
    Idea: {
        screen: Idea,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null,

        })
    },
}, {
    navigationOptions: {
        mode: 'modal',
        headerMode: 'none',
        defaultNavigationOptions: {
            cardStack: {
                gesturesEnabled: false,
                },
          cardOverlayEnabled: true,
        // //   ...TransitionPresets.ModalPresentationIOS,
        },

        },
    initialRouteName: 'Home'
});


// @ts-ignore
export default createAppContainer(createSwitchNavigator(
    {
        Index: Index,
        Home: Home,
        Search:Search,
        Notification:Notification,
        Idea:Idea,
        Start: Start,
        App: appStack,
    },
    {
        initialRouteName: 'Index'
    }
));