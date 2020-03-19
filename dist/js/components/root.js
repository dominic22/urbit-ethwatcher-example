const _jsxFileName = "/home/do7ze5/urbit/urbit-ethwatcher-example/src/js/components/root.js";import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { api } from '/api';
import { store } from '/store';
import { HeaderBar } from './lib/header-bar.js';

export class Root extends Component {
  constructor(props) {
    super(props);
    this.state = store.state;
    store.setStateHandler(this.setState.bind(this));
  }

  handleContractChange(event) {
    this.setState({ contract: event.target.value });
  }

  render() {
    return (
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
          , React.createElement(HeaderBar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 22}})
          , React.createElement(Route, {
            exact: true,
            path: "/~exampleapp",
            render: () => {
              return (
                React.createElement('div', { className: "w-100 absolute h-100-minus-48 flex flex-column "     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
                  , React.createElement('div', { className: "flex flex-column flex-row-ns ba bl-0 bt-0 br-0 b--solid b--black-30"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
                    , React.createElement('div', { className: "pa4 black-80 w-40-ns pl3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
                      , this.renderInput()
                    )
                    , React.createElement('div', { className: "w-60-ns pa4 pl3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
                      , this.renderActionButtons()
                    )
                  )
                  , this.renderContractsList()
                )
              );
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
          )
        )
      )
    );
  }

  renderInput() {
    return (React.createElement('div', { className: "flex flex-column flex-row-ns"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
      , React.createElement('input', {
        id: "name",
        className: "input-reset ba b--black-20 pa3 db w-100"     ,
        type: "text",
        placeholder: "New Contract Address"  ,
        value: this.state.contract,
        onChange: this.handleContractChange.bind(this),
        'aria-describedby': "name-desc", __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}
      )
      , React.createElement('a', {
        className: "dib f9 pa3 bt bb bl br tc pointer bg-white ml3"          ,
        onClick: () => {
          console.log('Send action json');
          api.action('exampleapp', 'json', {
            'add-contract': {
              contract: this.state.contract
            }
          });
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}
      , "add"

      )
    ));
  }

  renderContractsList() {
    const { contracts } = this.state;
    if (!contracts) {
      return (
        React.createElement('p', { className: "measure center pa5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}, "There are no contracts, feel free to add one."

        )
      );
    }

    return (
      React.createElement('div', { className: "flex flex-column flex-row-ns h-100"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}
        , React.createElement('div', { className: "w-100 w-40-ns pr3-ns order-2 order-1-ns"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
          , React.createElement('ul', { className: "list pl0 ma0 ba bl-0 bt-0 bb-0 b--solid b--black-30 h-100"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
            , contracts.map(contract => {
              return (
                React.createElement('li', {
                  key: contract,
                  className: `lh-copy pl3 pv3 ba bl-0 bt-0 br-0 b--solid b--black-30 bg-animate hover-bg-light-gray pointer ${this.state.selectedContract === contract ? 'bg-black-20' : 'bg-white'}`,
                  onClick: () => this.setState({ selectedContract: contract }), __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}
                
                  , React.createElement('div', { className: "flex flex-column flex-row-ns justify-between "    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
                    , React.createElement('p', { className: "pt3", __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}, contract)
                    , React.createElement('a', {
                      className: "dib f9 pa3 bt bb bl br tc pointer bg-white mr3"          ,
                      onClick: () => {
                        api.action('exampleapp', 'json', {
                          'remove-contract': {
                            contract: contract
                          }
                        });
                      }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
                    , "remove"

                    )
                  )
                )
              );
            })
          )
        )
        , React.createElement('div', { className: "pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-60-ns pt3"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
          , React.createElement('p', { className: "lh-copy measure" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}, "Content on the right of the selected contract for event logs etc."

          )
          , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 119}}, this.state.selectedContract)
        )
      )
    );
  }

  renderActionButtons() {
    return React.createElement(React.Fragment, null
      , React.createElement('a', {
        key: "initial",
        className: "dib f9 pa3 bt bb bl br tc pointer bg-white"         ,
        onClick: () => {
          console.log('Send contract action json 2s');
          api.action('exampleapp', 'json', {
            create: {
              contract: '0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413'
            }
          });
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}}
      , "initial"

      )
      , React.createElement('a', {
        key: "subscribe",
        className: "dib f9 pa3 bt bb bl br tc pointer bg-white"         ,
        onClick: () => {
          console.log('Send subscribe');
          api.action('exampleapp', 'json', {
            subscribe: {
              contract: '0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413'
            }
          });
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 141}}
      , "subscribe"

      )
      , React.createElement('a', {
        key: "unsubscribe",
        className: "dib f9 pa3 bt bb bl br tc pointer bg-white"         ,
        onClick: () => {
          console.log('Send unsubscribe');
          api.action('exampleapp', 'json', {
            unsubscribe: {
              contract: '0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413'
            }
          });
        }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}}
      , "unsubscribe"

      )
    )
  }
}
