'use strict';

var React = require("react");
var Layout$Lmt = require("../layouts/Layout.bs.js");
var FacebookFeed$Lmt = require("../components/FacebookFeed.bs.js");

function News(Props) {
  return React.createElement(Layout$Lmt.make, {
              children: React.createElement(FacebookFeed$Lmt.make, {})
            });
}

var make = News;

var $$default = News;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
