import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import classnames from "classnames";
import _ from "lodash";
import { api } from "/api";
import { HeaderBar } from "./lib/header-bar.js";

export class Root extends Component {
  constructor(props) {
    super(props);
    console.log("og props");
    console.log(this.props);
    this.state = { ship: "~binbes-rantem" };
  }

  handleChange(event) {
    this.setState({ ship: event.target.value });
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
                <div className="pa3 w-100">
                  <h1 className="mt0 f2">exampleapp</h1>
                  <p className="lh-copy measure pt3">
                    Welcome to your exampless app!
                  </p>
                  <p className="lh-copy measure pt3">
                    To get started, edit <code>src/index.js</code> or{" "}
                    <code>exampleapp.hoon</code> and <code>|commit %home</code>{" "}
                    on your Urbit ship to see your changes.
                  </p>
                  <a
                    className="dib f9 pa3 bt bb bl br tc pointer bg-white"
                    onClick={() => {
                      console.log("Send action json");
                      api.action("exampleapp", "json", {
                        "add-contract": {
                          contract: "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"
                        }
                      });
                    }}
                  >
                    Add contract to set
                  </a>
                  <a
                    className="dib f9 pa3 bt bb bl br tc pointer bg-white"
                    onClick={() => {
                      console.log("Send action json");
                      api.action("exampleapp", "json", {
                        "remove-contract": {
                          contract: "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"
                        }
                      });
                    }}
                  >
                    Remove contract from set
                  </a>
                  <a
                    className="dib f9 pa3 bt bb bl br tc pointer bg-white"
                    onClick={() => {
                      console.log("Send contract action json 2s");
                      // TODO
                      api.action("exampleapp", "json", {
                        create: {
                          contract: "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"
                        }
                      });
                    }}
                  >
                    Send Contract as string to app
                  </a>
                  <a
                    className="dib f9 pa3 bt bb bl br tc pointer bg-white"
                    onClick={() => {
                      console.log("Send action json");
                      // TODO
                      // contract: "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"
                      api.action("exampleapp", "json", {
                        delete: {
                          ship: this.state.ship
                        }
                      });
                    }}
                  >
                    Remove Contract from gall app
                  </a>
                  <p className="white absolute" style={{ top: 150, left: 15 }}>
                    <input
                      type="text"
                      value={this.state.ship}
                      onChange={this.handleChange.bind(this)}
                    />
                  </p>
                  <div>Current ship: {this.state.ship}</div>
                </div>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}
