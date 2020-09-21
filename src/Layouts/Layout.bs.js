'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");
var Logo$Lmt = require("../components/Logo.bs.js");

function Layout(Props) {
  var children = Props.children;
  var className = TW.make({
        hd: {
          TAG: /* BackgroundColor */33,
          _0: /* BgBlack */3
        },
        tl: {
          hd: {
            TAG: /* Padding */8,
            _0: /* Px6 */44
          },
          tl: {
            hd: {
              TAG: /* Padding */8,
              _0: /* Py2 */21
            },
            tl: {
              hd: {
                TAG: /* Sm */69,
                _0: {
                  TAG: /* Padding */8,
                  _0: /* Px12 */47
                }
              },
              tl: {
                hd: {
                  TAG: /* Sm */69,
                  _0: {
                    TAG: /* Padding */8,
                    _0: /* Py6 */25
                  }
                },
                tl: {
                  hd: {
                    TAG: /* Md */70,
                    _0: {
                      TAG: /* Padding */8,
                      _0: /* Px24 */50
                    }
                  },
                  tl: {
                    hd: {
                      TAG: /* Md */70,
                      _0: {
                        TAG: /* Padding */8,
                        _0: /* Py12 */28
                      }
                    },
                    tl: {
                      hd: {
                        TAG: /* Lg */71,
                        _0: {
                          TAG: /* Padding */8,
                          _0: /* Px32 */51
                        }
                      },
                      tl: {
                        hd: {
                          TAG: /* Lg */71,
                          _0: {
                            TAG: /* Padding */8,
                            _0: /* Py16 */29
                          }
                        },
                        tl: {
                          hd: {
                            TAG: /* Xl */72,
                            _0: {
                              TAG: /* Padding */8,
                              _0: /* Px48 */53
                            }
                          },
                          tl: {
                            hd: {
                              TAG: /* Xl */72,
                              _0: {
                                TAG: /* Padding */8,
                                _0: /* Py20 */30
                              }
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
          }
        }
      });
  return React.createElement("div", {
              className: className
            }, React.createElement(Logo$Lmt.make, {}), children);
}

var make = Layout;

exports.make = make;
/* react Not a pure module */
