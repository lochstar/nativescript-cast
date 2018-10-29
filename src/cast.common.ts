import { CastButton } from './cast';
import { View, Property, isIOS } from 'tns-core-modules/ui/core/view';

export const textProperty = new Property<CastButtonBase, string>({ name: 'text', defaultValue: '', affectsLayout: isIOS });
export const mediaRouterCallbackProperty = new Property<CastButtonBase, any>({ name: 'mediaRouterCallback', defaultValue: undefined });

export abstract class CastButtonBase extends View implements CastButton {
  public static tapEvent = 'tap';
  mediaRouterCallback: any;
}

textProperty.register(CastButtonBase);
mediaRouterCallbackProperty.register(CastButtonBase);
