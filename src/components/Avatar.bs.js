'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var P$Lmt = require("./P.bs.js");
var React = require("react");
var Grid$Lmt = require("./Grid.bs.js");
var Text$Lmt = require("./Text.bs.js");
var Theme$Lmt = require("../style/Theme.bs.js");
var Column$Lmt = require("./Column.bs.js");
var Divider$Lmt = require("./Divider.bs.js");

function Avatar(Props) {
  var name = Props.name;
  var role = Props.role;
  var src = Props.src;
  var desc = Props.desc;
  var indexOpt = Props.index;
  var index = indexOpt !== undefined ? indexOpt : 0;
  var match = index % 2;
  var order = match !== 1 ? /* OrderFirst */0 : /* OrderLast */1;
  var imgClass = TW.make({
        hd: {
          TAG: /* BorderRadius */47,
          _0: /* RoundedFull */4
        },
        tl: {
          hd: {
            TAG: /* Width */25,
            _0: /* WFull */46
          },
          tl: {
            hd: {
              TAG: /* Height */65,
              _0: /* HAuto */18
            },
            tl: {
              hd: {
                TAG: /* ObjectFit */21,
                _0: /* ObjectCover */1
              },
              tl: {
                hd: {
                  TAG: /* Order */30,
                  _0: order
                },
                tl: /* [] */0
              }
            }
          }
        }
      });
  return React.createElement(Grid$Lmt.make, {
              children: null,
              cols: /* GridCols3 */2,
              gap: /* Gap12 */9
            }, React.createElement("img", {
                  className: imgClass,
                  alt: name,
                  src: src
                }), React.createElement(Column$Lmt.make, {
                  children: null,
                  col: /* ColSpan2 */2
                }, React.createElement(Text$Lmt.make, {
                      children: name,
                      fontWeight: /* FontSemibold */15
                    }), React.createElement(Divider$Lmt.make, {
                      color: Theme$Lmt.BackgroundColors.primary,
                      width: /* W6 */6,
                      margin: /* Mx0 */76
                    }), role !== undefined ? React.createElement(P$Lmt.make, {
                        children: role,
                        color: /* TextGray900 */33
                      }) : null, desc !== undefined ? React.createElement(Text$Lmt.make, {
                        children: desc,
                        align: /* TextCenter */1,
                        color: /* TextGray600 */24
                      }) : null));
}

var make = Avatar;

exports.make = make;
/* P-Lmt Not a pure module */
