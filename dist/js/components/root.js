const _jsxFileName = "/home/do7ze5/urbit/urbit-ethwatcher-example/src/js/components/root.js";import React, { Component } from "react";
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
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
          , React.createElement(HeaderBar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 24}} )
          , React.createElement(Route, {
            exact: true,
            path: "/~exampleapp",
            render: () => {
              return (
                React.createElement('div', { className: "pa3 w-100" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
                  , React.createElement('h1', { className: "mt0 f2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}, "exampleapp")
                  , React.createElement('p', { className: "lh-copy measure pt3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, "Welcome to your exampless appssss!"

                  )
                  , React.createElement('p', { className: "lh-copy measure pt3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "To get started, edit "
                        , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "src/index.js"), " or" , " "
                    , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, "exampleapp.hoon"), " and "  , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, "|commit %home" ), " ", "on your Urbit ship to see your changes."

                  )
                  , React.createElement('a', {
                    className: "dib f9 pa3 bt bb bl br tc pointer bg-white"         ,
                    onClick: () => {
                      console.log("Send action json");
                      api.action("exampleapp", "json", {
                        ship: this.state.ship
                      });
                    }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
                  , "Send Hi to Gall App"

                  )
                  /*<p className="white absolute" style={{ top: 150, left: 15 }}>
                    <input
                      type="text"
                      value={this.state.ship}
                      onChange={this.handleChange.bind(this)}
                    />
                  </p>*/
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}, "Current ship: "  , this.state.ship)
                )
              );
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          )
        )
      )
    );
  }
}
