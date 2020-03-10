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
    this.state = {
      contract: "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"
    };
  }

  // handleChange(event) {
  //   this.setState({ ship: event.target.value });
  // }

  handleContractChange(event) {
    this.setState({ contract: event.target.value });
  }

  renderContractsList() {
    return (
      <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns pa3 pa5-ns">
        <ul className="list pl0 measure center">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-white bg-animate hover-bg-light-blue">
            Orange
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-white bg-animate hover-bg-light-blue">
            Apple
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-gray bg-animate  hover-bg-light-blue">
            Peach
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-white bg-animate hover-bg-light-blue">
            Grape
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-white bg-animate hover-bg-light-blue">
            Grapefruit
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-white bg-animate hover-bg-light-blue">
            Kiwi
          </li>
        </ul>
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
                <div className="pa3 w-100">
                  <h1 className="mt0 f2">exampleapp</h1>
                  <p className="lh-copy measure pt3">
                    Welcome to your exampless app!
                  </p>
                  <div className="flex flex-column flex-row-ns">
                    {this.renderContractsList()}
                    <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                      <p className="lh-copy measure pt3">Content on the right of the list for event logs...</p>
                    </div>
                  </div>
                  <div className="pa4 black-80">
                    <div className="measure">
                      <label htmlFor="name" className="f6 b db mb2">
                        Contract Address{" "}
                        <span className="normal black-60">(beginning with 0x)</span>
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
                    className="dib f9 pa3 bt bb bl br tc pointer bg-white"
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
                      console.log("Send action json");
                      api.action("exampleapp", "json", {
                        "remove-contract": {
                          contract: this.state.contract
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
                      api.action("exampleapp", "json", {
                        create: {
                          contract: this.state.contract
                        }
                      });
                    }}
                  >
                    Initial create action
                  </a>
                  {/*<a*/}
                  {/*  className="dib f9 pa3 bt bb bl br tc pointer bg-white"*/}
                  {/*  onClick={() => {*/}
                  {/*    console.log("Send action json");*/}
                  {/*    api.action("exampleapp", "json", {*/}
                  {/*      delete: {*/}
                  {/*        ship: this.state.ship*/}
                  {/*      }*/}
                  {/*    });*/}
                  {/*  }}*/}
                  {/*>*/}
                  {/*  Remove Contract from gall app*/}
                  {/*</a>*/}
                  {/*<p className="white absolute" style={{ top: 150, left: 15 }}>*/}
                  {/*  <input*/}
                  {/*    type="text"*/}
                  {/*    value={this.state.ship}*/}
                  {/*    onChange={this.handleChange.bind(this)}*/}
                  {/*  />*/}
                  {/*</p>*/}
                  {/*<div>Current ship: {this.state.ship}</div>*/}
                </div>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}
