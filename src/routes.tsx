import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const startStack = createStackNavigator(
    {}, {defaultNavigationOptions: {header: null}}
);

const AppNavigator = createSwitchNavigator({
    startStack
});

export default createAppContainer(AppNavigator);