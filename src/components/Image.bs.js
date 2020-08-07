'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");

function $$Image(Props) {
  var src = Props.src;
  var alt = Props.alt;
  var widthOpt = Props.width;
  var heightOpt = Props.height;
  var width = widthOpt !== undefined ? widthOpt : /* WFull */46;
  var height = heightOpt !== undefined ? heightOpt : /* HAuto */18;
  var className = TW.make({
        hd: {
          TAG: /* ObjectFit */21,
          _0: /* ObjectCover */1
        },
        tl: {
          hd: {
            TAG: /* Width */25,
            _0: width
          },
          tl: {
            hd: {
              TAG: /* Height */65,
              _0: height
            },
            tl: /* [] */0
          }
        }
      });
  return React.createElement("img", {
              className: className,
              alt: alt,
              src: src
            });
}

var make = $$Image;

exports.make = make;
/* react Not a pure module */
