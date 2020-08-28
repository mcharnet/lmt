'use strict';

var React = require("react");
var App$Lmt = require("./common/App.bs.js");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(App$Lmt.make, {}), "root");

ReasonReactRouter.push("");

/*  Not a pure module */
