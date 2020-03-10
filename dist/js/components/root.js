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
      React.createElement('div', { className: "w-100 w-60-ns pr3-ns order-2 order-1-ns pa3 pa5-ns"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
        , React.createElement('ul', { className: "list pl0 measure center"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
          , React.createElement('li', { className: "lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-white bg-animate hover-bg-light-blue"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, "Orange"

          )
          , React.createElement('li', { className: "lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-white bg-animate hover-bg-light-blue"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}, "Apple"

          )
          , React.createElement('li', { className: "lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-gray bg-animate  hover-bg-light-blue"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Peach"

          )
          , React.createElement('li', { className: "lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-white bg-animate hover-bg-light-blue"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}, "Grape"

          )
          , React.createElement('li', { className: "lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-white bg-animate hover-bg-light-blue"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}, "Grapefruit"

          )
          , React.createElement('li', { className: "lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-white bg-animate hover-bg-light-blue"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "Kiwi"

          )
        )
      )
    );
  }

  render() {
    return (
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}
          , React.createElement(HeaderBar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 57}} )
          , React.createElement(Route, {
            exact: true,
            path: "/~exampleapp",
            render: () => {
              return (
                React.createElement('div', { className: "pa3 w-100" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
                  , React.createElement('h1', { className: "mt0 f2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}, "exampleapp")
                  , React.createElement('p', { className: "lh-copy measure pt3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}, "Welcome to your exampless app!"

                  )
                  , React.createElement('div', { className: "flex flex-column flex-row-ns"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}
                    , this.renderContractsList()
                    , React.createElement('div', { className: "pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
                      , React.createElement('p', { className: "lh-copy measure pt3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}, "Content on the right of the list for event logs..."         )
                    )
                  )
                  , React.createElement('div', { className: "pa4 black-80" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}
                    , React.createElement('div', { className: "measure", __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}
                      , React.createElement('label', { htmlFor: "name", className: "f6 b db mb2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}, "Contract Address"
                         , " "
                        , React.createElement('span', { className: "normal black-60" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}, "(beginning with 0x)"  )
                      )
                      , React.createElement('input', {
                        id: "name",
                        className: "input-reset ba b--black-20 pa2 mb2 db w-100"      ,
                        type: "text",
                        value: this.state.contract,
                        onChange: this.handleContractChange.bind(this),
                        'aria-describedby': "name-desc", __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
                      )
                    )
                  )
                  , React.createElement('a', {
                    className: "dib f9 pa3 bt bb bl br tc pointer bg-white"         ,
                    onClick: () => {
                      console.log("Send action json");
                      api.action("exampleapp", "json", {
                        "add-contract": {
                          contract: this.state.contract
                        }
                      });
                    }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}
                  , "Add contract to set"

                  )
                  , React.createElement('a', {
                    className: "dib f9 pa3 bt bb bl br tc pointer bg-white"         ,
                    onClick: () => {
                      console.log("Send action json");
                      api.action("exampleapp", "json", {
                        "remove-contract": {
                          contract: this.state.contract
                        }
                      });
                    }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
                  , "Remove contract from set"

                  )
                  , React.createElement('a', {
                    className: "dib f9 pa3 bt bb bl br tc pointer bg-white"         ,
                    onClick: () => {
                      console.log("Send contract action json 2s");
                      api.action("exampleapp", "json", {
                        create: {
                          contract: this.state.contract
                        }
                      });
                    }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}
                  , "Initial create action"

                  )
                  /*<a*/
                  /*  className="dib f9 pa3 bt bb bl br tc pointer bg-white"*/
                  /*  onClick={() => {*/
                  /*    console.log("Send action json");*/
                  /*    api.action("exampleapp", "json", {*/
                  /*      delete: {*/
                  /*        ship: this.state.ship*/
                  /*      }*/
                  /*    });*/
                  /*  }}*/
                  /*>*/
                  /*  Remove Contract from gall app*/
                  /*</a>*/
                  /*<p className="white absolute" style={{ top: 150, left: 15 }}>*/
                  /*  <input*/
                  /*    type="text"*/
                  /*    value={this.state.ship}*/
                  /*    onChange={this.handleChange.bind(this)}*/
                  /*  />*/
                  /*</p>*/
                  /*<div>Current ship: {this.state.ship}</div>*/
                )
              );
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}
          )
        )
      )
    );
  }
}
