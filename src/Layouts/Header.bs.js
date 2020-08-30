'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Link$Lmt = require("../components/Link.bs.js");
var Logo$Lmt = require("../components/Logo.bs.js");
var Theme$Lmt = require("../style/Theme.bs.js");

var headerLinks = {
  hd: {
    name: " Accueil ",
    href: "/"
  },
  tl: {
    hd: {
      name: " Entraînements / Sorties ",
      href: "/entrainements"
    },
    tl: {
      hd: {
        name: " Qui sommes-nous ? ",
        href: "/bureau"
      },
      tl: {
        hd: {
          name: " Adhésion ",
          href: "/adhesion"
        },
        tl: {
          hd: {
            name: " Nous y étions ",
            href: "/news"
          },
          tl: {
            hd: {
              name: " Médias ",
              href: "/"
            },
            tl: /* [] */0
          }
        }
      }
    }
  }
};

var headerNavClass = TW.make({
      hd: {
        TAG: /* Width */25,
        _0: /* WFull */46
      },
      tl: {
        hd: {
          TAG: /* BackgroundColor */33,
          _0: Theme$Lmt.Colors.primary
        },
        tl: {
          hd: {
            TAG: /* Padding */8,
            _0: /* P8 */7
          },
          tl: {
            hd: {
              TAG: /* TextColor */9,
              _0: /* TextWhite */6
            },
            tl: {
              hd: {
                TAG: /* Display */52,
                _0: /* Grid */5
              },
              tl: {
                hd: {
                  TAG: /* GridFlow */53,
                  _0: /* GridFlowCol */1
                },
                tl: {
                  hd: {
                    TAG: /* Gap */55,
                    _0: /* Gap12 */9
                  },
                  tl: {
                    hd: {
                      TAG: /* AlignItems */39,
                      _0: /* ItemsCenter */2
                    },
                    tl: {
                      hd: {
                        TAG: /* JustifyContent */17,
                        _0: /* JustifyBetween */3
                      },
                      tl: /* [] */0
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

var headerLinksClass = TW.make({
      hd: {
        TAG: /* ZIndex */0,
        _0: /* Z10 */1
      },
      tl: {
        hd: {
          TAG: /* Display */52,
          _0: /* Grid */5
        },
        tl: {
          hd: {
            TAG: /* GridFlow */53,
            _0: /* GridFlowCol */1
          },
          tl: {
            hd: {
              TAG: /* Gap */55,
              _0: /* Gap12 */9
            },
            tl: /* [] */0
          }
        }
      }
    });

var logoClass = TW.make({
      hd: {
        TAG: /* FontSize */67,
        _0: /* Text4xl */7
      },
      tl: {
        hd: {
          TAG: /* ZIndex */0,
          _0: /* Z0 */0
        },
        tl: /* [] */0
      }
    });

var Style = {
  headerNavClass: headerNavClass,
  headerLinksClass: headerLinksClass,
  logoClass: logoClass
};

function Header(Props) {
  return React.createElement("nav", {
              className: headerNavClass
            }, React.createElement("span", {
                  className: logoClass
                }, "LYON MOUNTAIN TRAIL"), React.createElement("div", {
                  className: headerLinksClass
                }, $$Array.of_list(List.map((function (param) {
                            return React.createElement(Link$Lmt.make, {
                                        name: param.name,
                                        href: param.href
                                      });
                          }), headerLinks))), React.createElement(Logo$Lmt.make, {}));
}

var make = Header;

exports.headerLinks = headerLinks;
exports.Style = Style;
exports.make = make;
/* headerNavClass Not a pure module */
