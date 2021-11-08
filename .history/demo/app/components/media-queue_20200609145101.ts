import { EventData } from "tns-core-modules/data/observable";

export function onLoaded(args: EventData) {
    console.log('Component Loaded');

    // you could also extend the custom component logic here e.g.:
    // let stack = <StackLayout>args.view;
    // stack.bindingContext = myCustomComponentViewModel;
}
