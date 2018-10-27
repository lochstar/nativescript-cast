import * as application from 'tns-core-modules/application';
import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
//import {HelloWorldModel} from './main-view-model';

declare const com: any;

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    console.log('pageLoaded');
    // Get the event sender
    let page = <pages.Page>args.object;
    //page.bindingContext = new HelloWorldModel();
}

export function onTap(args) {
    console.log(`Tapped: ${args.object.text}`);
}
