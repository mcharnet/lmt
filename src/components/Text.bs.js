'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");

function $$Text(Props) {
  var children = Props.children;
  var alignOpt = Props.align;
  var fontSizeOpt = Props.fontSize;
  var fontWeightOpt = Props.fontWeight;
  var colorOpt = Props.color;
  var align = alignOpt !== undefined ? alignOpt : /* TextLeft */0;
  var fontSize = fontSizeOpt !== undefined ? fontSizeOpt : /* TextBase */2;
  var fontWeight = fontWeightOpt !== undefined ? fontWeightOpt : /* FontNormal */9;
  var color = colorOpt !== undefined ? colorOpt : /* TextBlack */3;
  var textClass = TW.make({
        hd: {
          TAG: /* LineHeight */61,
          _0: /* LeadingNormal */3
        },
        tl: {
          hd: {
            TAG: /* FontSize */67,
            _0: fontSize
          },
          tl: {
            hd: {
              TAG: /* TextAlign */44,
              _0: align
            },
            tl: {
              hd: {
                TAG: /* FontWeight */15,
                _0: fontWeight
              },
              tl: {
                hd: {
                  TAG: /* TextColor */9,
                  _0: color
                },
                tl: /* [] */0
              }
            }
          }
        }
      });
  return React.createElement("span", {
              className: textClass
            }, children);
}

var make = $$Text;

exports.make = make;
/* react Not a pure module */
