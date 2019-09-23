import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import ConfigScreen from './screens/ConfigScreen/ConfigScreen';
import MyTripsScreen from './screens/MyTripsScreen/MyTripsScreen';

const homeStack = createBottomTabNavigator(
    {
        HomeScreen,
        ConfigScreen,
        MyTripsScreen
    }
);

const startStack = createStackNavigator(
    {
        HomeScreen
    },
    {
        defaultNavigationOptions: { header: null }
    }
);

const AppNavigator = createSwitchNavigator(
    {
        homeStack
    }
);

export default Routes = createAppContainer(AppNavigator);