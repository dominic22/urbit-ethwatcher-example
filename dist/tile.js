const _jsxFileName = "/home/do7ze5/urbit/urbit-ethwatcher-example/tile/tile.js";import React, { Component } from "react";
import classnames from "classnames";
import _ from "lodash";

export default class exampleappTile extends Component {
  render() {
    return (
      React.createElement('div', { className: "w-100 h-100 relative"  , style: { background: "#1a1a1a" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 8}}
        , React.createElement('a', { className: "w-100 h-100 db pa2 no-underline"    , href: "/~exampleapp", __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
          , React.createElement('p', {
            className: "gray label-regular b absolute"   ,
            style: { left: 8, top: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
          , "This is the new exampleapp"

          )
          , React.createElement('p', { className: "white absolute" , style: { top: 25, left: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}, "This is sample text for your full app tile."

          )
        )
      )
    );
  }
}

window.exampleappTile = exampleappTile;
