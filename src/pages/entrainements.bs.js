'use strict';

var React = require("react");
var WE$Lmt = require("../layouts/entrainements/WE.bs.js");
var Card$Lmt = require("../components/Card.bs.js");
var Grid$Lmt = require("../components/Grid.bs.js");
var Jeudi$Lmt = require("../layouts/entrainements/Jeudi.bs.js");
var Mardi$Lmt = require("../layouts/entrainements/Mardi.bs.js");
var Divider$Lmt = require("../components/Divider.bs.js");

function Entrainements(Props) {
  return React.createElement(Card$Lmt.make, {
              children: React.createElement(Grid$Lmt.make, {
                    children: null,
                    gap: /* Gap4 */4
                  }, " Une semaine à Lyon Mountain Trail s’organise de la façon suivante :", React.createElement(Mardi$Lmt.make, {}), React.createElement(Divider$Lmt.make, {}), React.createElement(Jeudi$Lmt.make, {}), React.createElement(Divider$Lmt.make, {}), React.createElement(WE$Lmt.make, {})),
              title: "Entraînements / Sorties ?"
            });
}

var make = Entrainements;

var $$default = Entrainements;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
