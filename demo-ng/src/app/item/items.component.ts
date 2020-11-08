import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { setDebug, TWEEN } from '@nativescript-community/tween';
import { AbsoluteLayout, action } from '@nativescript/core';

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
    boxRef: AbsoluteLayout;
    @ViewChild("box", { static: true }) boxElementRef: ElementRef;

    properties = [
        {"name": "width", "minimum": 50, "maximum": 300},
        {"name": "height", "minimum": 50, "maximum": 300},
        {"name": "rotate", "minimum": 0, "maximum": 360},
        {"name": "scaleX", "minimum": 1, "maximum": 5},
        {"name": "scaleY", "minimum": 1, "maximum": 5},
        {"name": "translateX", "minimum": 0, "maximum": 100},
        {"name": "translateY", "minimum": 0, "maximum": 100},
        {"name": "opacity", "minimum": 1, "maximum": 0},
    ];
    easings = [
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
    animationDuration = 500;
    selectedProperty = 0;
    selectedEasing = 1;
    state = false;
    isBusy = false;
    startAnimationBtnText = "Start Animation";

    constructor() { 
    }

    ngOnInit(): void {
        this.boxRef = this.boxElementRef.nativeElement;
    }

    selectProperty() {
        const propertyNames = this.properties.map(({name}) => name);

        action({
            message: "Select Propety",
            cancelButtonText: "Cancel",
            actions: propertyNames
        }).then(async result => {
            if (result != "Cancel"){
                const newSelection = this.properties.findIndex( ({ name }) => name === result );
                if (this.selectedProperty != newSelection) {
                    await this.reset();
                    this.selectedProperty = newSelection;
                }
            }
        });
    }

    selectEasing() {
        const easingsNames = this.easings.map(({name}) => name);

        action({
            message: "Select Easing",
            cancelButtonText: "Cancel",
            actions: easingsNames
        }).then(async result => {
            if (result != "Cancel"){
                const newSelection = this.easings.findIndex( ({ name }) => name === result );
                if (this.selectedEasing != newSelection) {
                    this.selectedEasing = newSelection;
                }
            }
        });
    } 

    startTween() {
        this.state = !this.state;
        new TWEEN.Tween({ value: this.sizeToPercent(this.boxRef[this.properties[this.selectedProperty]["name"]], this.properties[this.selectedProperty]["minimum"], this.properties[this.selectedProperty]["maximum"]) })
            .easing(this.state ? this.easings[this.selectedEasing]["out"] : this.easings[this.selectedEasing]["in"] )
            .to({ value: this.state ? 1 : 0 }, this.animationDuration)
            .onStart(() => {
            })
            .onComplete(() => {
            })
            .onUpdate(obj => {
                const newValue = this.percentToSize(obj.value, this.properties[this.selectedProperty]["minimum"], this.properties[this.selectedProperty]["maximum"]);
                const box = this.boxRef;
                box[this.properties[this.selectedProperty]["name"]] = newValue;
            })
            .start();
    }

    async reset() {
        if (this.state) {
            this.startAnimationBtnText = "Resetting..."
            this.isBusy = true;
            this.startTween();
            await new Promise(r => setTimeout(r, this.animationDuration * 2));
            this.isBusy = false;
            this.startAnimationBtnText = "Start Animation";
        }
    }

    sizeToPercent(value, min, max) {
        return (value-min)/(max-min);
    }

    percentToSize(percent, min, max) {
        return (percent * (max-min)) + min;
    }
}
