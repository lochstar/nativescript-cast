import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { AbsoluteLayout, action } from "@nativescript/core";
import { NSVElement } from "react-nativescript";
import { useState } from "react";

type FirstScreenProps = {
    route: RouteProp<MainStackParamList, "first">,
    navigation: FrameNavigationProp<MainStackParamList, "first">,
}

export function First({ navigation }: FirstScreenProps) {
    return (
        <stackLayout>
            <label text="Hello World" />
        </stackLayout>
    );
}
