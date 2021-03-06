import { api } from "/api";
import { store } from "/store";

import urbitOb from "urbit-ob";

export class Subscription {
  start() {
    if (api.authTokens) {
      this.initializeexampleapp();
    } else {
      console.error("~~~ ERROR: Must set api.authTokens before operation ~~~");
    }
  }

  initializeexampleapp() {
    api.bind(
      "/primary",
      "PUT",
      api.authTokens.ship,
      "exampleapp",
      this.handleEvent.bind(this),
      this.handleError.bind(this)
    );
    api.bind(
      "/state/update",
      "PUT",
      api.authTokens.ship,
      "exampleapp",
      this.handleStateUpdateEvent.bind(this),
      this.handleError.bind(this)
    );
  }

  handleStateUpdateEvent(diff) {
    store.handleStateUpdateEvent(diff);
  }
  handleEvent(diff) {
    store.handleEvent(diff);
  }

  handleError(err) {
    console.error(err);
    api.bind(
      "/primary",
      "PUT",
      api.authTokens.ship,
      "exampleapp",
      this.handleEvent.bind(this),
      this.handleError.bind(this)
    );
  }
}

export let subscription = new Subscription();
