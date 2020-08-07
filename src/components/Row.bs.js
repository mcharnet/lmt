'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");

function Row(Props) {
  var children = Props.children;
  var className = TW.make({
        hd: {
          TAG: /* GridFlow */53,
          _0: /* GridFlowRow */0
        },
        tl: /* [] */0
      });
  return React.createElement("div", {
              className: className
            }, children);
}

var make = Row;

exports.make = make;
/* react Not a pure module */
