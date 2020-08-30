'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");
var Link$Lmt = require("./Link.bs.js");
var Text$Lmt = require("./Text.bs.js");
var Divider$Lmt = require("./Divider.bs.js");

var cardClass = TW.make({
      hd: {
        TAG: /* BorderRadius */47,
        _0: /* Rounded */2
      },
      tl: {
        hd: {
          TAG: /* BackgroundColor */33,
          _0: /* BgGray100 */9
        },
        tl: {
          hd: {
            TAG: /* Padding */8,
            _0: /* Px12 */47
          },
          tl: {
            hd: {
              TAG: /* Padding */8,
              _0: /* Py6 */25
            },
            tl: {
              hd: {
                TAG: /* Display */52,
                _0: /* Grid */5
              },
              tl: {
                hd: {
                  TAG: /* Gap */55,
                  _0: /* Gap6 */6
                },
                tl: /* [] */0
              }
            }
          }
        }
      }
    });

var titleClass = TW.make({
      hd: {
        TAG: /* TextAlign */44,
        _0: /* TextCenter */1
      },
      tl: /* [] */0
    });

var Style = {
  cardClass: cardClass,
  titleClass: titleClass
};

function Card(Props) {
  var children = Props.children;
  var title = Props.title;
  var href = Props.href;
  return React.createElement("div", {
              className: cardClass
            }, title !== undefined ? React.createElement("div", {
                    className: titleClass
                  }, href !== undefined ? React.createElement(Link$Lmt.make, {
                          name: title,
                          href: href,
                          fontSize: /* Text4xl */7
                        }) : React.createElement(Text$Lmt.make, {
                          children: title,
                          fontSize: /* Text4xl */7
                        }), React.createElement(Divider$Lmt.make, {
                        color: /* BgBlue700 */189
                      })) : null, React.createElement("div", undefined, children));
}

var make = Card;

exports.Style = Style;
exports.make = make;
/* cardClass Not a pure module */
