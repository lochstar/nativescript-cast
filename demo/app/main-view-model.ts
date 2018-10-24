import { Observable } from 'tns-core-modules/data/observable';
import { Cast } from 'nativescript-cast';

export class HelloWorldModel extends Observable {
  public message: string;
  private cast: Cast;

  constructor() {
    super();

    this.cast = new Cast();
    this.message = this.cast.getCast();
  }
}
