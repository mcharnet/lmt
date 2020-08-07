'use strict';

var TW = require("re-tailwind/src/TW.bs.js");
var React = require("react");
var Home$Lmt = require("./pages/Home.bs.js");
var News$Lmt = require("./pages/News.bs.js");
var Route$Lmt = require("./components/Route.bs.js");
var Bureau$Lmt = require("./pages/Bureau.bs.js");
var Header$Lmt = require("./Layouts/Header.bs.js");
var Adhesion$Lmt = require("./pages/Adhesion.bs.js");
var Entrainements$Lmt = require("./pages/Entrainements.bs.js");

var wrapperClass = TW.make({
      hd: {
        TAG: /* BackgroundColor */33,
        _0: /* BgBlack */3
      },
      tl: {
        hd: {
          TAG: /* Height */65,
          _0: /* HFull */20
        },
        tl: /* [] */0
      }
    });

var Style = {
  wrapperClass: wrapperClass
};

function mapUrlToRoute(url) {
  var match = url.path;
  if (!match) {
    return /* Home */0;
  }
  switch (match.hd) {
    case "#/adhesion" :
        if (match.tl) {
          return /* Home */0;
        } else {
          return /* Adhesion */4;
        }
    case "#/bureau" :
        if (match.tl) {
          return /* Home */0;
        } else {
          return /* Bureau */2;
        }
    case "#/entrainements" :
        if (match.tl) {
          return /* Home */0;
        } else {
          return /* Entrainements */1;
        }
    case "#/news" :
        if (match.tl) {
          return /* Home */0;
        } else {
          return /* News */3;
        }
    case "home" :
        match.tl;
        return /* Home */0;
    default:
      return /* Home */0;
  }
}

function App(Props) {
  var route = Route$Lmt.useRoute(undefined);
  var tmp;
  switch (route) {
    case /* Home */0 :
        tmp = React.createElement(Home$Lmt.make, {});
        break;
    case /* News */1 :
        tmp = React.createElement(News$Lmt.make, {});
        break;
    case /* Entrainements */2 :
        tmp = React.createElement(Entrainements$Lmt.make, {});
        break;
    case /* Adhesion */3 :
        tmp = React.createElement(Adhesion$Lmt.make, {});
        break;
    case /* Bureau */4 :
        tmp = React.createElement(Bureau$Lmt.make, {});
        break;
    
  }
  return React.createElement("div", {
              className: wrapperClass
            }, React.createElement(Header$Lmt.make, {}), tmp);
}

var make = App;

var $$default = App;

exports.Style = Style;
exports.mapUrlToRoute = mapUrlToRoute;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* wrapperClass Not a pure module */
