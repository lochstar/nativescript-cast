import { Observable } from 'tns-core-modules/data/observable';
import { Cast } from 'nativescript-cast';

export class HelloWorldModel extends Observable {
  public count: number;
  public message: string;
  public castContext: object;

  private cast: Cast;

  constructor() {
    super();

    this.count = 0;
    this.cast = new Cast();
    this.message = this.cast.getVersion();
    this.castContext = this.cast.getCastContext();

    console.dir(this.castContext);
  }

  onTap(args: EventData) {
    this.count++;
    const button = <Button>args.object;
    button.text = `Tapped ${this.count} times`;

    this.cast.setUpCastButton();
  }
}
