import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from './NavigationParamList';

import { demos } from './linked-components/install';
interface MenuProps {
    route: RouteProp<MainStackParamList, 'menu'>;
    navigation: FrameNavigationProp<MainStackParamList, 'menu'>;
}

export function Menu({ navigation }: MenuProps) {
    function goToDemo(component) {
        navigation.navigate(component);
    }

    if (process.env.NODE_ENV === 'development') {
        const Development = demos.find(({ name }) => name === 'Development');
        if (Development) {
            setTimeout(() => {
                navigation.navigate('development');
            }, 0);
        }
    }

    return (
        <scrollView>
            <stackLayout>
                {demos.map((demo) => (
                    <button
                        key={demo.name}
                        onTap={() => {
                            goToDemo(demo.path);
                        }}
                    >
                        {demo.name}
                    </button>
                ))}
            </stackLayout>
        </scrollView>
    );
}
