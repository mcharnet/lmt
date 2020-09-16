'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");
var Logo$Lmt = require("../components/Logo.bs.js");

function Layout(Props) {
  var children = Props.children;
  var className = TW.make({
        hd: {
          TAG: /* Padding */8,
          _0: /* Px48 */53
        },
        tl: {
          hd: {
            TAG: /* Padding */8,
            _0: /* Py20 */30
          },
          tl: {
            hd: {
              TAG: /* BackgroundColor */33,
              _0: /* BgBlack */3
            },
            tl: /* [] */0
          }
        }
      });
  return React.createElement("div", {
              className: className
            }, React.createElement(Logo$Lmt.make, {}), children);
}

var make = Layout;

exports.make = make;
/* react Not a pure module */
