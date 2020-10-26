import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class ApplicationController extends Controller {
  @tracked record;

  timeout;

  go() {
    this.record = { data: "yep" };
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.record = {};
    }, 2000);
  }

  constructor() {
    super(...arguments);
    this.go();
  }

  reset = () => this.go();

  alertIt = (value) => {
    alert(value ? `yep, preserves ${value}` : "nooooope");
  };
}
