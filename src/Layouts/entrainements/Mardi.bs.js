'use strict';

var React = require("react");
var EntrainementSection$Lmt = require("../EntrainementSection.bs.js");

var images = {
  hd: {
    src: "entrainements/mardi6.jpg",
    alt: "Sortie du mardi"
  },
  tl: {
    hd: {
      src: "entrainements/mardi5.jpg",
      alt: "Sortie du mardi"
    },
    tl: /* [] */0
  }
};

var description = " Séances de vitesse, de seuil et de dénivelé sur le secteur Croix-Rousse/Caluire";

var rendezVous = " => Départ du Parc de la Tête d’Or à 19h15 (Porte des enfants du Rhône)";

function Mardi(Props) {
  return React.createElement(EntrainementSection$Lmt.make, {
              title: "Mardi soir",
              images: images,
              description: description,
              rendezVous: rendezVous
            });
}

var make = Mardi;

exports.images = images;
exports.description = description;
exports.rendezVous = rendezVous;
exports.make = make;
/* react Not a pure module */
