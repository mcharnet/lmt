'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");

function Divider(Props) {
  var colorOpt = Props.color;
  var widthOpt = Props.width;
  var marginOpt = Props.margin;
  var color = colorOpt !== undefined ? colorOpt : /* BgBlack */3;
  var width = widthOpt !== undefined ? widthOpt : /* W32 */13;
  var margin = marginOpt !== undefined ? marginOpt : /* MAuto */18;
  var className = TW.make({
        hd: {
          TAG: /* Height */65,
          _0: /* H1 */1
        },
        tl: {
          hd: {
            TAG: /* Width */25,
            _0: width
          },
          tl: {
            hd: {
              TAG: /* BackgroundColor */33,
              _0: color
            },
            tl: {
              hd: {
                TAG: /* Margin */35,
                _0: margin
              },
              tl: {
                hd: {
                  TAG: /* Margin */35,
                  _0: /* My2 */40
                },
                tl: {
                  hd: {
                    TAG: /* BorderRadius */47,
                    _0: /* RoundedFull */4
                  },
                  tl: /* [] */0
                }
              }
            }
          }
        }
      });
  return React.createElement("div", {
              className: className
            });
}

var make = Divider;

exports.make = make;
/* react Not a pure module */
