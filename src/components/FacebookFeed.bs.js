'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");

function FacebookFeed(Props) {
  TW.make({
        hd: {
          TAG: /* Width */25,
          _0: /* WFull */46
        },
        tl: {
          hd: {
            TAG: /* Overflow */18,
            _0: /* OverflowHidden */1
          },
          tl: {
            hd: {
              TAG: /* Display */52,
              _0: /* Grid */5
            },
            tl: /* [] */0
          }
        }
      });
  return React.createElement("iframe", {
              height: "800",
              scrolling: "no",
              src: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLyon-Mountain-Trail-104105514311189%2F&tabs=timeline&width=500&height=800&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId",
              width: "500"
            });
}

var make = FacebookFeed;

exports.make = make;
/* react Not a pure module */
