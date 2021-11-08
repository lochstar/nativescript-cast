import { EventData } from 'tns-core-modules/data/observable';
import { MediaQueueModal } from './media-queue-model';

export function onLoaded(args: EventData) {
  const stack = <StackLayout>args.view;

  if (!stack.bindingContext) {
    stack.bindingContext = new MediaQueueModal();
  }
}
