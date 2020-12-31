import * as React from 'react';
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from 'react-nativescript-navigation';
import { Menu } from './Menu';
import { demos } from './linked-components/install';

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
            {demos.map((demo) => (
                <StackNavigator.Screen key={demo.path} name={demo.path} component={demo.component} />
            ))}
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
