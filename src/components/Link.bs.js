'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");
var Link = require("next/link");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");

function handleClick(href, $$event) {
  if (!$$event.defaultPrevented) {
    $$event.preventDefault();
    return ReasonReactRouter.push(href);
  }
  
}

function Link$1(Props) {
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
  return React.createElement(Link.default, {
              href: href,
              children: React.createElement("a", {
                    className: linkClass
                  }, name)
            });
}

var make = Link$1;

exports.handleClick = handleClick;
exports.make = make;
/* react Not a pure module */
