'use strict';

var React = require("react");
var Card$Lmt = require("../components/Card.bs.js");
var Grid$Lmt = require("../components/Grid.bs.js");
var Jeudi$Lmt = require("../Layouts/entrainements/Jeudi.bs.js");
var Mardi$Lmt = require("../Layouts/entrainements/Mardi.bs.js");
var Layout$Lmt = require("../Layouts/Layout.bs.js");
var Divider$Lmt = require("../components/Divider.bs.js");
var Dimanche$Lmt = require("../Layouts/entrainements/Dimanche.bs.js");

function Entrainements(Props) {
  return React.createElement(Layout$Lmt.make, {
              children: React.createElement(Card$Lmt.make, {
                    children: React.createElement(Grid$Lmt.make, {
                          children: null,
                          gap: /* Gap4 */4
                        }, " Une semaine à Lyon Mountain Trail s’organise de la façon suivante :", React.createElement(Mardi$Lmt.make, {}), React.createElement(Divider$Lmt.make, {}), React.createElement(Jeudi$Lmt.make, {}), React.createElement(Divider$Lmt.make, {}), React.createElement(Dimanche$Lmt.make, {})),
                    title: "Entraînements / Sorties ?"
                  })
            });
}

var make = Entrainements;

exports.make = make;
/* react Not a pure module */
