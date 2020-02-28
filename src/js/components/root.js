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
    this.state = { ship: "~zod" };
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
            path="/~ethwatcher"
            render={() => {
              return (
                <div className="pa3 w-100">
                  <h1 className="mt0 f2">ethwatcher</h1>
                  <p className="lh-copy measure pt3">
                    Welcome to your Landscape application.
                  </p>
                  <p className="lh-copy measure pt3">
                    To get started, edit <code>src/index.js</code> or{" "}
                    <code>ethwatcher.hoon</code> and <code>|commit %home</code>{" "}
                    on your Urbit ship to see your changes.
                  </p>
                  <a
                    className="dib f9 pa3 bt bb bl br tc pointer bg-white"
                    onClick={() => {
                      console.log("Send action");
                      api.action("ethwatcher", "watch", {
                        ship: this.state.ship
                      });
                    }}
                  >
                    Send Hi to Gall App
                  </a>
                  <p className="white absolute" style={{ top: 150, left: 15 }}>
                    <input
                      type="text"
                      value={this.state.ship}
                      onChange={this.handleChange.bind(this)}
                    />
                  </p>
                  <div>{this.state.ship}</div>
                  <a
                    className="black no-underline db body-large pt3"
                    href="https://urbit.org/docs"
                  >
                    -> Read the docs
                  </a>
                </div>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}
