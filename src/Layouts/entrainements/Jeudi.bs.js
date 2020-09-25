'use strict';

var React = require("react");
var EntrainementSection$Lmt = require("../EntrainementSection.bs.js");

var title = "Jeudi soir";

var images = {
  hd: {
    src: "entrainements/mardi3.jpg",
    alt: "Sortie du jeudi - fourvi\xc3\xa8re"
  },
  tl: {
    hd: {
      src: "entrainements/mardi7.jpg",
      alt: "Sortie du jeudi - fourviere2"
    },
    tl: /* [] */0
  }
};

var description = " Sortie dénivelé dans le secteur de Fourvière. Terrain de jeu qui regorge de montées secrètes, les jambes chauffent !";

var rendezVous = " => Départ de Fourvière à 19h15";

function Jeudi(Props) {
  return React.createElement(EntrainementSection$Lmt.make, {
              title: title,
              images: images,
              description: description,
              rendezVous: rendezVous
            });
}

var make = Jeudi;

exports.title = title;
exports.images = images;
exports.description = description;
exports.rendezVous = rendezVous;
exports.make = make;
/* react Not a pure module */
