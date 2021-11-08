import { View, Style, Property, CssProperty, EventData } from 'tns-core-modules/ui/core/view';

export declare class CastMiniController extends View {
  static tapEvent: string;
  //static mediaRouterEventEvent: string;
  //static sessionEventEvent: string;

  // Overload 'on' method so that it provides intellisense for 'tap' event.
  //on(event: 'tap', callback: (args: EventData) => void, thisArg?: any);

  // Needed when 'on' method is overriden.
  //on(eventNames: string, callback: (data: any) => void, thisArg?: any);
}
