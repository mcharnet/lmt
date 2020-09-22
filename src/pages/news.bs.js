'use strict';

var React = require("react");
var Card$Lmt = require("../components/Card.bs.js");
var FacebookFeed$Lmt = require("../components/FacebookFeed.bs.js");

function News(Props) {
  return React.createElement(Card$Lmt.make, {
              children: React.createElement(FacebookFeed$Lmt.make, {}),
              title: "Nous y étions"
            });
}

var make = News;

var $$default = News;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
