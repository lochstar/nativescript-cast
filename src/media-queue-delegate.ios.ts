import { CastButton } from './cast.ios';
// import { CastEvent } from './cast.types';

export class MediaQueueDelegate extends NSObject implements GCKMediaQueueDelegate {
  public static ObjCProtocols = [GCKMediaQueueDelegate];
  public owner: CastButton;

  constructor() {
    super();

    // necessary when extending TypeScript constructors
    return global.__native(this);
  }

  mediaQueueDidReloadItems(queue: GCKMediaQueue): void {
    console.info('mediaQueueDidReloadItems');
    // console.log(queue);
  }
  didInsertItemsInRange(queue: GCKMediaQueue, range: NSRange): void {
    console.info('didInsertItemsInRange');
    // console.log(queue);
    console.log(range);
  }
  didUpdateItemsAtIndexes(queue: GCKMediaQueue, indexes: NSArray<number> | number[]): void {
    console.info('didUpdateItemsAtIndexes');
    // console.log(queue);
    console.log(indexes);
  }
  didRemoveItemsAtIndexes(queue: GCKMediaQueue, indexes: NSArray<number> | number[]): void {
    console.info('didRemoveItemsAtIndexes');
    // console.log(queue);
    console.log(indexes);
  }
  mediaQueueWillChange(queue: GCKMediaQueue): void {
    /*
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.mediaQueueWillChange,
      ios: this.owner.nativeView
    });
    */
  }
  mediaQueueDidChange(queue: GCKMediaQueue) {
    /*
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.mediaQueueChanged,
      ios: this.owner.nativeView
    });
    */
  }
}
