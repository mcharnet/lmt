'use strict';

var React = require("react");
var EntrainementSection$Lmt = require("../EntrainementSection.bs.js");

var title = "Jeudi soir";

var images = {
  hd: {
    src: "http://lyonmountaintrail.free.fr/wp-content/uploads/2018/01/Capture-d%E2%80%99%C3%A9cran-2018-01-21-%C3%A0-16.24.24.png",
    alt: "Sortie du jeudi - fourvi\xc3\xa8re"
  },
  tl: {
    hd: {
      src: "http://lyonmountaintrail.free.fr/wp-content/uploads/2018/01/Capture-d%E2%80%99%C3%A9cran-2018-01-21-%C3%A0-16.24.24.png",
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
