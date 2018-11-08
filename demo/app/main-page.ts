//import * as application from 'tns-core-modules/application';
import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { View } from 'tns-core-modules/ui/core/view';
import { Frame } from 'tns-core-modules/ui/frame';
import { MainViewModel } from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  const page = <pages.Page>args.object;

  if (!page.bindingContext) {
    page.bindingContext = new MainViewModel();
  }
}

export function castLoaded(args: observable.EventData) {
  const cast = <View>args.object;
  console.log('castLoaded');
  //cast.visibility = 'collapsed';

  //const mCastContext = GCKCastContext.sharedInstance();
  //mCastContext.presentCastInstructionsViewControllerOnceWithCastButton(cast.ios);
}

export function castMiniControllerLoaded(args: observable.EventData) {
  const cast = <View>args.object;
  console.log('castMiniControllerLoaded');
  //cast.visibility = 'collapsed';
  //cast.nativeView.inflate();
  //cast.nativeView.setVisibility(android.view.View.VISIBLE);
}

export function layoutLoaded(args: observable.EventData) {
  const layout = <View>args.object;
  console.log('layoutLoaded');

  const mCastContext = GCKCastContext.sharedInstance();
  const miniController = mCastContext.createMiniMediaControlsViewController();
  //miniController.delegate = layout.view;
  //miniController.ios.view.frame = layout;
  layout.ios.addSubview(miniController.view);
}
