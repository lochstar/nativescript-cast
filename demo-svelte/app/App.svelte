<page>
    <actionBar title="Svelte Demo" />
    <gridLayout rows="auto, *">
        <stackLayout backgroundColor="#eeeeee" padding="10" borderBottomWidth="2" borderColor="#e3e3e3">
            <gridLayout columns="*, *" margin="10 0">
                <button col="0" text="Select Property" on:tap="{selectProperty}" />
                <stackLayout col="1" verticalAlignment="center">
                    <label text="Selected Property:" fontWeight="bold" />
                    <label bind:text="{properties[selectedProperty]['name']}" />
                </stackLayout>
            </gridLayout>
            <gridLayout columns="*, *" margin="10 0">
                <button col="0" text="Select Easing" on:tap="{selectEasing}" />
                <stackLayout col="1" verticalAlignment="center">
                    <label text="Selected Easing:" fontWeight="bold" />
                    <label bind:text="{easings[selectedEasing]['name']}" />
                </stackLayout>
            </gridLayout>
            <button bind:text="{startAnimationBtnText}" on:tap="{startTween}" bind:isEnabled="{isNotBusy}" />
        </stackLayout>
        <absoluteLayout row="1" bind:this="{boxRef}" class="box" horizontalAlignment="center" verticalAlignment="center"></absoluteLayout>
    </gridLayout>
</page>

<script lang="typescript">

import { setDebug, TWEEN } from '@nativescript-community/tween';
import { AbsoluteLayout, action } from '@nativescript/core';

let boxRef: AbsoluteLayout;

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
    let selectedProperty = 0;
    let selectedEasing = 1;
    let state = false;
    let isNotBusy = true;
    let startAnimationBtnText = "Start Animation";

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
                    selectedProperty = newSelection;
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
                    selectedEasing = newSelection;
                }
            }
        });
    }

    function startTween() {
        state = !state;
        new TWEEN.Tween({ value: sizeToPercent(boxRef.nativeView[properties[selectedProperty]["name"]], properties[selectedProperty]["minimum"], properties[selectedProperty]["maximum"]) })
            .easing(state ? easings[selectedEasing]["out"] : easings[selectedEasing]["in"] )
            .to({ value: state ? 1 : 0 }, animationDuration)
            .onStart(() => {
            })
            .onComplete(() => {
            })
            .onUpdate(obj => {
                const newValue = percentToSize(obj.value,properties[selectedProperty]["minimum"], properties[selectedProperty]["maximum"]);
                const box = boxRef.nativeView;
                box[properties[selectedProperty]["name"]] = newValue;
            })
            .start();
    }

    async function reset() {
        if (state) {
            startAnimationBtnText = "Resetting..."
            isNotBusy = false;
            startTween();
            await new Promise(r => setTimeout(r, animationDuration * 2));
            isNotBusy = true;
            startAnimationBtnText = "Start Animation";
        }
    }

    function sizeToPercent(value, min, max) {
        return (value-min)/(max-min);
    }

    function percentToSize(percent, min, max) {
        return (percent * (max-min)) + min;
    }
</script>

<style>
    ActionBar {
        background-color: #b52e31;
        color: white;
    }

    Button {
        background-color: #b52e31;
        color: white;
        border-radius: 5;
        height: 40;
    }

    Label {
        font-size: 15;
    }

    .box {
        width: 50;
        height: 50;
        border-radius: 10;
        background-color: #b52e31;
    }

</style>
