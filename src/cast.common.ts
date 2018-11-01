import { CastButton } from './cast';
import { Button } from 'tns-core-modules/ui/button';
import { View, Property, isIOS } from 'tns-core-modules/ui/core/view';
import { ViewBase } from 'tns-core-modules/ui/core/view-base';
import { Visibility } from "tns-core-modules/ui/styling/style-properties";

// TODO: remove textProperty
export const textProperty = new Property<CastButtonBase, string>({ name: 'text', defaultValue: '', affectsLayout: isIOS });

export abstract class CastButtonBase extends Button implements CastButton {
  public static tapEvent = 'tap';
  text: string;

  public static mediaRouterEventEvent = 'mediaRouterEvent';
  public static sessionEventEvent = 'sessionEvent';
  visibility: Visibility;

  public sendEvent(eventName: string, data?: any) {
    this.notify({
      eventName,
      object: this,
      data
    });
  }
}

textProperty.register(CastButtonBase);
