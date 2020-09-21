'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");
var Text$Lmt = require("./Text.bs.js");
var Theme$Lmt = require("../style/Theme.bs.js");
var Divider$Lmt = require("./Divider.bs.js");

function Avatar(Props) {
  var name = Props.name;
  var role = Props.role;
  var src = Props.src;
  var className = TW.make({
        hd: {
          TAG: /* BorderRadius */47,
          _0: /* RoundedFull */4
        },
        tl: {
          hd: {
            TAG: /* Display */52,
            _0: /* Flex */3
          },
          tl: {
            hd: {
              TAG: /* FlexDirection */50,
              _0: /* FlexCol */2
            },
            tl: {
              hd: {
                TAG: /* AlignItems */39,
                _0: /* ItemsCenter */2
              },
              tl: /* [] */0
            }
          }
        }
      });
  var imgClass = TW.make({
        hd: {
          TAG: /* BorderRadius */47,
          _0: /* RoundedFull */4
        },
        tl: {
          hd: {
            TAG: /* Width */25,
            _0: /* W48 */15
          },
          tl: {
            hd: {
              TAG: /* Height */65,
              _0: /* H48 */15
            },
            tl: {
              hd: {
                TAG: /* ObjectFit */21,
                _0: /* ObjectCover */1
              },
              tl: /* [] */0
            }
          }
        }
      });
  var textContainerClass = TW.make({
        hd: {
          TAG: /* BackgroundColor */33,
          _0: /* BgGray100 */9
        },
        tl: {
          hd: {
            TAG: /* BorderRadius */47,
            _0: /* RoundedFull */4
          },
          tl: {
            hd: {
              TAG: /* Padding */8,
              _0: /* P4 */4
            },
            tl: {
              hd: {
                TAG: /* TextAlign */44,
                _0: /* TextCenter */1
              },
              tl: {
                hd: {
                  TAG: /* Margin */35,
                  _0: /* MinusMt8 */140
                },
                tl: {
                  hd: {
                    TAG: /* Width */25,
                    _0: /* W24 */12
                  },
                  tl: {
                    hd: {
                      TAG: /* Height */65,
                      _0: /* H24 */12
                    },
                    tl: /* [] */0
                  }
                }
              }
            }
          }
        }
      });
  return React.createElement("div", {
              className: className
            }, React.createElement("img", {
                  className: imgClass,
                  alt: name,
                  src: src
                }), React.createElement("div", {
                  className: textContainerClass,
                  style: {
                    boxShadow: "0 -5px 5px -5px #333"
                  }
                }, React.createElement(Text$Lmt.make, {
                      children: name,
                      fontWeight: /* FontSemibold */15
                    }), React.createElement(Divider$Lmt.make, {
                      color: Theme$Lmt.BackgroundColors.primary,
                      width: /* W6 */6
                    }), role !== undefined ? React.createElement(Text$Lmt.make, {
                        children: role,
                        color: /* TextGray900 */33
                      }) : null));
}

var make = Avatar;

exports.make = make;
/* react Not a pure module */
