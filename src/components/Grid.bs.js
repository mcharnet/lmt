'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");

function Grid(Props) {
  var children = Props.children;
  var colsOpt = Props.cols;
  var gapOpt = Props.gap;
  var paddingOpt = Props.padding;
  var className = Props.className;
  var cols = colsOpt !== undefined ? colsOpt : /* GridCols1 */0;
  var gap = gapOpt !== undefined ? gapOpt : /* Gap0 */0;
  var padding = paddingOpt !== undefined ? paddingOpt : /* P0 */0;
  var gridClass = TW.make({
        hd: {
          TAG: /* Display */52,
          _0: /* Grid */5
        },
        tl: {
          hd: {
            TAG: /* GridCols */58,
            _0: cols
          },
          tl: {
            hd: {
              TAG: /* Gap */55,
              _0: gap
            },
            tl: {
              hd: {
                TAG: /* Padding */8,
                _0: padding
              },
              tl: /* [] */0
            }
          }
        }
      });
  var className$1 = className !== undefined ? $$String.concat(gridClass, {
          hd: className,
          tl: /* [] */0
        }) : gridClass;
  return React.createElement("div", {
              className: className$1
            }, children);
}

var make = Grid;

exports.make = make;
/* react Not a pure module */
