import { EventData } from 'tns-core-modules/data/observable';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout'
import { MediaQueueModal } from './media-queue-model';

export function onLoaded(args: EventData) {
  // console.log(args);
  // const stack = <StackLayout>args.view;

  // @ts-ignore
  args.object.bindingContext = new MediaQueueModal();

  // if (!stack.bindingContext) {
    // stack.bindingContext = new MediaQueueModal();
  // }
}
