'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");

function Cell(Props) {
  var children = Props.children;
  var colOpt = Props.col;
  var col = colOpt !== undefined ? colOpt : /* ColAuto */0;
  var className = TW.make({
        hd: {
          TAG: /* Col */60,
          _0: /* ColSpan2 */2
        },
        tl: {
          hd: {
            TAG: /* Col */60,
            _0: col
          },
          tl: {
            hd: {
              TAG: /* Display */52,
              _0: /* InlineFlex */4
            },
            tl: /* [] */0
          }
        }
      });
  return React.createElement("div", {
              className: className
            }, children);
}

var make = Cell;

exports.make = make;
/* react Not a pure module */
