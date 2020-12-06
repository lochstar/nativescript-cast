import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from './NavigationParamList';

interface MenuProps {
    route: RouteProp<MainStackParamList, 'menu'>;
    navigation: FrameNavigationProp<MainStackParamList, 'menu'>;
}

export function Menu({ navigation }: MenuProps) {
    const demos = [
        { name: 'Demo 1', component: 'demo1' },
        { name: 'Demo 2', component: 'demo2' },
        { name: 'Development', component: 'development' }
    ];

    function goToDemo(component) {
        navigation.navigate(component);
    }

    if (process.env.NODE_ENV === 'development') {
        setTimeout(() => {
            navigation.navigate('development');
        }, 0);
    }

    return (
        <scrollView>
            <stackLayout>
                {demos.map((demo) => (
                    <button
                        key={demo.name}
                        onTap={() => {
                            goToDemo(demo.component);
                        }}
                    >
                        {demo.name}
                    </button>
                ))}
            </stackLayout>
        </scrollView>
    );
}
