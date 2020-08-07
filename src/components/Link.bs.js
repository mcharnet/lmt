'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

function handleClick(href, $$event) {
  if (!$$event.defaultPrevented) {
    $$event.preventDefault();
    return ReasonReactRouter.push(href);
  }
  
}

function Link(Props) {
  var name = Props.name;
  var href = Props.href;
  var fontSizeOpt = Props.fontSize;
  var fontSize = fontSizeOpt !== undefined ? fontSizeOpt : /* TextBase */2;
  var linkClass = TW.make({
        hd: {
          TAG: /* Cursor */13,
          _0: /* CursorPointer */2
        },
        tl: {
          hd: {
            TAG: /* TextColor */9,
            _0: /* HoverTextGray900 */34
          },
          tl: {
            hd: {
              TAG: /* FontSize */67,
              _0: fontSize
            },
            tl: /* [] */0
          }
        }
      });
  return React.createElement("a", {
              className: linkClass,
              onClick: (function (param) {
                  return handleClick(href, param);
                })
            }, name);
}

var make = Link;

exports.handleClick = handleClick;
exports.make = make;
/* react Not a pure module */
