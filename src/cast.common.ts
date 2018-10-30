import { CastButton } from './cast';
import { View, Property, isIOS } from 'tns-core-modules/ui/core/view';
import { Visibility } from "tns-core-modules/ui/styling/style-properties";

// TODO: remove textProperty
export const textProperty = new Property<CastButtonBase, string>({ name: 'text', defaultValue: '', affectsLayout: isIOS });

export abstract class CastButtonBase extends View implements CastButton {
  public static tapEvent = 'tap';
  public static mediaRouterEventEvent = 'mediaRouterEvent';
  public static sessionEventEvent = 'sessionEvent';
  visibility: Visibility;
}

textProperty.register(CastButtonBase);
