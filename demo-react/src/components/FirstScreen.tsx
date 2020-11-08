import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { setDebug, TWEEN } from '@nativescript-community/tween';
import { AbsoluteLayout, action } from "@nativescript/core";
import { NSVElement } from "react-nativescript";
import { useState } from "react";

type FirstScreenProps = {
    route: RouteProp<MainStackParamList, "first">,
    navigation: FrameNavigationProp<MainStackParamList, "first">,
}

export function First({ navigation }: FirstScreenProps) {
    const boxRef = React.useRef<NSVElement<AbsoluteLayout>>(null);

    const properties = [
        {"name": "width", "minimum": 50, "maximum": 300},
        {"name": "height", "minimum": 50, "maximum": 300},
        {"name": "rotate", "minimum": 0, "maximum": 360},
        {"name": "scaleX", "minimum": 1, "maximum": 5},
        {"name": "scaleY", "minimum": 1, "maximum": 5},
        {"name": "translateX", "minimum": 0, "maximum": 100},
        {"name": "translateY", "minimum": 0, "maximum": 100},
        {"name": "opacity", "minimum": 1, "maximum": 0},
    ];
    const easings = [
        { "name": "Linear", "in": TWEEN.Easing.Linear.None, "out": TWEEN.Easing.Linear.None },
        { "name": "Quadratic", "in": TWEEN.Easing.Quadratic.In, "out": TWEEN.Easing.Quadratic.Out },
        { "name": "Cubic", "in": TWEEN.Easing.Cubic.In, "out": TWEEN.Easing.Cubic.Out },
        { "name": "Quartic", "in": TWEEN.Easing.Quartic.In, "out": TWEEN.Easing.Quartic.Out },
        { "name": "Quintic", "in": TWEEN.Easing.Quintic.In, "out": TWEEN.Easing.Quintic.Out },
        { "name": "Sinusoidal", "in": TWEEN.Easing.Sinusoidal.In, "out": TWEEN.Easing.Sinusoidal.Out },
        { "name": "Exponential", "in": TWEEN.Easing.Exponential.In, "out": TWEEN.Easing.Exponential.Out },
        { "name": "Circular", "in": TWEEN.Easing.Circular.In, "out": TWEEN.Easing.Circular.Out },
        { "name": "Elastic", "in": TWEEN.Easing.Elastic.In, "out": TWEEN.Easing.Elastic.Out },
        { "name": "Back", "in": TWEEN.Easing.Back.In, "out": TWEEN.Easing.Back.Out },
        { "name": "Bounce", "in": TWEEN.Easing.Bounce.In, "out": TWEEN.Easing.Bounce.Out }
    ];
    let animationDuration = 500;
    let state = false;

    const [startAnimationBtnText, setStartAnimationBtnText] = useState("Start Animation");
    const [selectedProperty, setSelectedProperty] = useState(0);
    const [selectedPropertyText, setSelectedPropertyText] = useState(properties[selectedProperty]['name']);
    const [selectedEasing, setSelectedEasing] = useState(1);
    const [selectedEasingText, setSelectedEasingText] = useState(easings[selectedEasing]['name']);

    const [isBusy, setIsBusy] = useState(false);

    function selectProperty() {
        const propertyNames = properties.map(({name}) => name);

        action({
            message: "Select Propety",
            cancelButtonText: "Cancel",
            actions: propertyNames
        }).then(async result => {
            if (result != "Cancel"){
                const newSelection = properties.findIndex( ({ name }) => name === result );
                if (selectedProperty != newSelection) {
                    await reset();
                    setSelectedProperty(newSelection);
                    setSelectedPropertyText(properties[newSelection]['name']);
                }
            }
        });
    }

    function selectEasing() {
        const easingsNames = easings.map(({name}) => name);

        action({
            message: "Select Easing",
            cancelButtonText: "Cancel",
            actions: easingsNames
        }).then(async result => {
            if (result != "Cancel"){
                const newSelection =easings.findIndex( ({ name }) => name === result );
                if (selectedEasing != newSelection) {
                    setSelectedEasing(newSelection);
                    setSelectedEasingText(easings[newSelection]['name']);
                }
            }
        });
    }

    function startTween() {
        state = !state;
        new TWEEN.Tween({ value: sizeToPercent(boxRef.current!.nativeView[properties[selectedProperty]["name"]], properties[selectedProperty]["minimum"], properties[selectedProperty]["maximum"]) })
            .easing(state ? easings[selectedEasing]["out"] : easings[selectedEasing]["in"] )
            .to({ value: state ? 1 : 0 }, animationDuration)
            .onStart(() => {
            })
            .onComplete(() => {
            })
            .onUpdate(obj => {
                const newValue = percentToSize(obj.value,properties[selectedProperty]["minimum"], properties[selectedProperty]["maximum"]);
                const box = boxRef.current!.nativeView;
                box[properties[selectedProperty]["name"]] = newValue;
            })
            .start();
    }

    async function reset() {
        if (state) {
            setStartAnimationBtnText("Resetting...");
            setIsBusy(true);
            startTween();
            await new Promise(r => setTimeout(r, animationDuration * 2));
            setIsBusy(false);
            setStartAnimationBtnText("Start Animation");
        }
    }

    function sizeToPercent(value, min, max) {
        return (value-min)/(max-min);
    }

    function percentToSize(percent, min, max) {
        return (percent * (max-min)) + min;
    }

    return (
        <gridLayout rows="auto, *">
            <stackLayout backgroundColor="#eeeeee" padding="10" borderBottomWidth="2" borderColor="#e3e3e3">
                <gridLayout columns="*, *" margin="10 0">
                    <button col={0} text="Select Property" onTap={selectProperty} className="whiteButton" />
                    <stackLayout col={1} verticalAlignment="middle">
                        <label text="Selected Property:" fontWeight="bold" />
                        <label text={selectedPropertyText} />
                    </stackLayout>
                </gridLayout>
                <gridLayout columns="*, *" margin="10 0">
                    <button col={0} text="Select Easing" onTap={selectEasing} className="whiteButton"/>
                    <stackLayout col={1} verticalAlignment="middle">
                        <label text="Selected Easing:" fontWeight="bold" />
                        <label text={selectedEasingText} />
                    </stackLayout>
                </gridLayout>
                <button text={startAnimationBtnText} onTap={startTween} isEnabled={!isBusy} className="whiteButton" />
            </stackLayout>
            <absoluteLayout ref={boxRef} row={1} className="box" horizontalAlignment="center" verticalAlignment="middle"></absoluteLayout>
        </gridLayout>
    );
}
