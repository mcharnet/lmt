'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");

function FacebookFeed(Props) {
  var className = TW.make({
        hd: {
          TAG: /* Width */25,
          _0: /* WFull */46
        },
        tl: {
          hd: {
            TAG: /* Sm */69,
            _0: {
              TAG: /* Position */22,
              _0: /* Relative */3
            }
          },
          tl: /* [] */0
        }
      });
  var wrapperClass = TW.make({
        hd: {
          TAG: /* Overflow */18,
          _0: /* OverflowHidden */1
        },
        tl: /* [] */0
      });
  return React.createElement("div", {
              className: wrapperClass
            }, React.createElement("iframe", {
                  className: className,
                  style: {
                    left: "calc(50% - 250px)"
                  },
                  height: "500",
                  scrolling: "no",
                  src: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLyon-Mountain-Trail-104105514311189&tabs=timeline&height=500&width=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                }));
}

var make = FacebookFeed;

exports.make = make;
/* react Not a pure module */
