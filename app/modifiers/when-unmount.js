import Modifier from "ember-modifier";

export default class Foo extends Modifier {
  willDestroy() {
    this.args.positional[0]();
  }
}
