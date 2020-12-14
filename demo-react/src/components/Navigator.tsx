import * as React from 'react';
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from 'react-nativescript-navigation';
import { Menu } from './Menu';
import { Demo1 } from './linked-components/Demo1';
import { Demo2 } from './linked-components/Demo2';
import { Development } from './linked-components/Development';

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="React Demo"
            screenOptions={{
                headerShown: true
            }}
        >
            <StackNavigator.Screen name="React Demo" component={Menu} />
            <StackNavigator.Screen name="demo1" component={Demo1} />
            <StackNavigator.Screen name="demo2" component={Demo2} />
            <StackNavigator.Screen name="development" component={Development} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
