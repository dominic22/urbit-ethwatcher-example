const _jsxFileName = "/home/do7ze5/urbit/urbit-ethwatcher-example/src/js/components/root.js";import React, { Component } from "react";
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
        React.createElement('p', { className: "measure center" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}, "There are no contracts, feel free to add one."

        )
      );
    }

    return (
      React.createElement('div', { className: "flex flex-column flex-row-ns"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}
        , React.createElement('div', { className: "w-100 w-40-ns pr3-ns order-2 order-1-ns"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
          , React.createElement('ul', { className: "list pl0 measure ma0"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
            , contracts.map(contract => {
              return (
                React.createElement('li', {
                  key: contract,
                  className: "lh-copy pl3 pv3 ba bl-0 bt-0 br-0 b--solid b--black-30 bg-white bg-animate hover-bg-light-gray"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
                
                  , contract
                  , React.createElement('a', {
                    className: "dib f9 pa3 bt bb bl br tc pointer bg-white ml3"          ,
                    onClick: () => {
                      api.action("exampleapp", "json", {
                        "remove-contract": {
                          contract: contract
                        }
                      });
                    }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
                  , "remove"

                  )
                )
              );
            })
          )
        )
        , React.createElement('div', { className: "pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-60-ns"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}
          , React.createElement('p', { className: "lh-copy measure pt3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}, "Content on the right of the list for event logs..."

          )
        )
      )
    );
  }

  render() {
    return (
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}
          , React.createElement(HeaderBar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 72}} )
          , React.createElement(Route, {
            exact: true,
            path: "/~exampleapp",
            render: () => {
              return (
                React.createElement('div', { className: "w-100", __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}
                  , React.createElement('div', { className: "pa4 black-80" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}
                    , React.createElement('div', { className: "measure", __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
                      , React.createElement('label', { htmlFor: "name", className: "f6 b db mb2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}, "Contract Address"
                         , " "
                        , React.createElement('span', { className: "normal black-60" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}, "(beginning like: 0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413)"


                        )
                      )
                      , React.createElement('input', {
                        id: "name",
                        className: "input-reset ba b--black-20 pa2 mb2 db w-100"      ,
                        type: "text",
                        value: this.state.contract,
                        onChange: this.handleContractChange.bind(this),
                        'aria-describedby': "name-desc", __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}
                      )
                    )
                  )
                  , React.createElement('a', {
                    className: "dib f9 pa3 bt bb bl br tc pointer bg-white ml3"          ,
                    onClick: () => {
                      console.log("Send action json");
                      api.action("exampleapp", "json", {
                        "add-contract": {
                          contract: this.state.contract
                        }
                      });
                    }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
                  , "Add contract to set"

                  )
                  , React.createElement('a', {
                    className: "dib f9 pa3 bt bb bl br tc pointer bg-white"         ,
                    onClick: () => {
                      console.log("Send contract action json 2s");
                      api.action("exampleapp", "json", {
                        create: {
                          contract: "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"
                        }
                      });
                    }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}
                  , "Initial create action"

                  )
                  , this.renderContractsList()
                )
              );
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 73}}
          )
        )
      )
    );
  }
}
