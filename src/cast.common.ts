import { CastButton } from './cast';
import { View } from 'tns-core-modules/ui/core/view';

export abstract class CastButtonBase extends View implements CastButton {
  public static tapEvent = 'tap';
}
