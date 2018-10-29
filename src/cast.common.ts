import { CastButton } from './cast';
import { View, Property, isIOS } from 'tns-core-modules/ui/core/view';
import { Visibility } from "tns-core-modules/ui/styling/style-properties";

export const textProperty = new Property<CastButtonBase, string>({ name: 'text', defaultValue: '', affectsLayout: isIOS });
export const mediaRouterCallbackProperty = new Property<CastButtonBase, any>({ name: 'mediaRouterCallback', defaultValue: undefined });

export abstract class CastButtonBase extends View implements CastButton {
  public static tapEvent = 'tap';
  visibility: Visibility;
  mediaRouterCallback: any;
}

textProperty.register(CastButtonBase);
mediaRouterCallbackProperty.register(CastButtonBase);
