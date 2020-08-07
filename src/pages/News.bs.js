'use strict';

var React = require("react");
var Layout$Lmt = require("../Layouts/Layout.bs.js");
var FacebookFeed$Lmt = require("../components/FacebookFeed.bs.js");

function News(Props) {
  return React.createElement(Layout$Lmt.make, {
              children: React.createElement(FacebookFeed$Lmt.make, {})
            });
}

var make = News;

exports.make = make;
/* react Not a pure module */
