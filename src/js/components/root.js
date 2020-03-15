import React, { Component } from 'react';
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
      <BrowserRouter>
        <div>
          <HeaderBar/>
          <Route
            exact
            path="/~exampleapp"
            render={() => {
              return (
                <div className="w-100 absolute h-100-minus-48 flex flex-column ">
                  <div className="flex flex-column flex-row-ns ba bl-0 bt-0 br-0 b--solid b--black-30">
                    <div className="pa4 black-80 w-40-ns pl3">
                      {this.renderInput()}
                    </div>
                    <div className="w-60-ns pa4 pl3">
                      {this.renderActionButtons()}
                    </div>
                  </div>
                  {this.renderContractsList()}
                </div>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }

  renderInput() {
    return (<div className="flex flex-column flex-row-ns">
      <input
        id="name"
        className="input-reset ba b--black-20 pa3 db w-100"
        type="text"
        placeholder="Contract Address"
        value={this.state.contract}
        onChange={this.handleContractChange.bind(this)}
        aria-describedby="name-desc"
      />
      <a
        className="dib f9 pa3 bt bb bl br tc pointer bg-white ml3"
        onClick={() => {
          console.log('Send action json');
          api.action('exampleapp', 'json', {
            'add-contract': {
              contract: this.state.contract
            }
          });
        }}
      >
        add
      </a>
    </div>);
  }

  renderContractsList() {
    const { contracts } = this.state;
    if (!contracts) {
      return (
        <p className="measure center pa5">
          There are no contracts, feel free to add one.
        </p>
      );
    }

    return (
      <div className="flex flex-column flex-row-ns h-100">
        <div className="w-100 w-40-ns pr3-ns order-2 order-1-ns">
          <ul className="list pl0 ma0 ba bl-0 bt-0 bb-0 b--solid b--black-30 h-100">
            {contracts.map(contract => {
              return (
                <li
                  key={contract}
                  className="lh-copy pl3 pv3 ba bl-0 bt-0 br-0 b--solid b--black-30 bg-white bg-animate hover-bg-light-gray flex flex-column flex-row-ns justify-between"
                >
                  <p className="pt3">{contract}</p>
                  <a
                    className="dib f9 pa3 bt bb bl br tc pointer bg-white mr3"
                    onClick={() => {
                      api.action('exampleapp', 'json', {
                        'remove-contract': {
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
        <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-60-ns pt3">
          <p className="lh-copy measure">
            Content on the right of the list for event logs...
          </p>
        </div>
      </div>
    );
  }

  renderActionButtons() {
    return <>
      <a
        className="dib f9 pa3 bt bb bl br tc pointer bg-white"
        onClick={() => {
          console.log('Send contract action json 2s');
          api.action('exampleapp', 'json', {
            create: {
              contract: '0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413'
            }
          });
        }}
      >
        Initial create action
      </a>
    </>
  }
}
