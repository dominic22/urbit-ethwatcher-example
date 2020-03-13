import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { api } from "/api";
import { store } from "/store";
import { HeaderBar } from "./lib/header-bar.js";

export class Root extends Component {
  constructor(props) {
    super(props);
    console.log("og props");
    console.log(this.props);

    this.state = store.state;
    store.setStateHandler(this.setState.bind(this));
  }

  handleContractChange(event) {
    this.setState({ contract: event.target.value });
  }

  renderContractsList() {
    const { contracts } = this.state;
    if (!contracts) {
      return (
        <p className="measure center">
          There are no contracts, feel free to add one.
        </p>
      );
    }

    return (
      <div className="flex flex-column flex-row-ns">
        <div className="w-100 w-40-ns pr3-ns order-2 order-1-ns">
          <ul className="list pl0 measure ma0">
            {contracts.map(contract => {
              return (
                <li
                  key={contract}
                  className="lh-copy pl3 pv3 ba bl-0 bt-0 br-0 b--solid b--black-30 bg-white bg-animate hover-bg-light-gray"
                >
                  {contract}
                  <a
                    className="dib f9 pa3 bt bb bl br tc pointer bg-white ml3"
                    onClick={() => {
                      api.action("exampleapp", "json", {
                        "remove-contract": {
                          contract: contract
                        }
                      });
                    }}
                  >
                    remove
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-60-ns">
          <p className="lh-copy measure pt3">
            Content on the right of the list for event logs...
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderBar />
          <Route
            exact
            path="/~exampleapp"
            render={() => {
              return (
                <div className="w-100">
                  <div className="pa4 black-80">
                    <div className="measure">
                      <label htmlFor="name" className="f6 b db mb2">
                        Contract Address{" "}
                        <span className="normal black-60">
                          (beginning like:
                          0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413)
                        </span>
                      </label>
                      <input
                        id="name"
                        className="input-reset ba b--black-20 pa2 mb2 db w-100"
                        type="text"
                        value={this.state.contract}
                        onChange={this.handleContractChange.bind(this)}
                        aria-describedby="name-desc"
                      />
                    </div>
                  </div>
                  <a
                    className="dib f9 pa3 bt bb bl br tc pointer bg-white ml3"
                    onClick={() => {
                      console.log("Send action json");
                      api.action("exampleapp", "json", {
                        "add-contract": {
                          contract: this.state.contract
                        }
                      });
                    }}
                  >
                    Add contract to set
                  </a>
                  <a
                    className="dib f9 pa3 bt bb bl br tc pointer bg-white"
                    onClick={() => {
                      console.log("Send contract action json 2s");
                      api.action("exampleapp", "json", {
                        create: {
                          contract: "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"
                        }
                      });
                    }}
                  >
                    Initial create action
                  </a>
                  {this.renderContractsList()}
                </div>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}
