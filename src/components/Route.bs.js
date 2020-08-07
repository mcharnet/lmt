'use strict';

var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

function useRoute(param) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var hash = url.hash.split("/");
  if (hash.length !== 2) {
    return /* Home */0;
  }
  var match = hash[0];
  if (match !== "") {
    return /* Home */0;
  }
  var match$1 = hash[1];
  switch (match$1) {
    case "adhesion" :
        return /* Adhesion */3;
    case "bureau" :
        return /* Bureau */4;
    case "entrainements" :
        return /* Entrainements */2;
    case "news" :
        return /* News */1;
    default:
      return /* Home */0;
  }
}

exports.useRoute = useRoute;
/* ReasonReactRouter Not a pure module */
