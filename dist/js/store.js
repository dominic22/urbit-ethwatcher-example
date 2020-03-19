import { InitialReducer } from "/reducers/initial";
import { ContractsReducer } from "/reducers/contracts";
import { ConfigReducer } from "/reducers/config";
import { LocalReducer } from "/reducers/local";
import { UpdateReducer } from "/reducers/update";

class Store {
  constructor() {
    this.state = {
    };

    this.initialReducer = new InitialReducer();
    this.localReducer = new LocalReducer();
    this.configReducer = new ConfigReducer();
    this.contractsReducer = new ContractsReducer();
    this.updateReducer = new UpdateReducer();
    this.setState = () => {};
  }

  setStateHandler(setState) {
    this.setState = setState;
  }

  handleEvent(data) {
    let json = data.data;
    this.initialReducer.reduce(json, this.state);
    this.configReducer.reduce(json, this.state);
    this.contractsReducer.reduce(json, this.state);
    this.updateReducer.reduce(json, this.state);
    this.localReducer.reduce(json, this.state);

    this.setState(this.state);
  }
  handleStateUpdateEvent(data) {
    let json = data.data;
    this.initialReducer.reduce(json, this.state);
    this.configReducer.reduce(json, this.state);
    this.contractsReducer.reduce(json, this.state);
    this.updateReducer.reduce(json, this.state);
    this.localReducer.reduce(json, this.state);

    this.setState(this.state);
  }
}

export let store = new Store();
window.store = store;
