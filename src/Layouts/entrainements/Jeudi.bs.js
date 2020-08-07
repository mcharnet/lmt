'use strict';

var React = require("react");
var EntrainementSection$Lmt = require("../EntrainementSection.bs.js");

var title = "Jeudi soir";

var images = {
  hd: {
    src: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/18422319_10158662063070471_8625508753852823434_o.jpg?_nc_cat=111&_nc_sid=825194&_nc_ohc=HFVgIW5rUCEAX8GB7Gi&_nc_ht=scontent-cdg2-1.xx&oh=5d298fd2ea23cc57d64c1cdadaa3e835&oe=5F3EA129",
    alt: "Sortie du jeudi - fourvi\xc3\xa8re"
  },
  tl: {
    hd: {
      src: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/19665141_1409668672457760_5354924915153572430_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=wKLq7lxTwcsAX_nZHae&_nc_ht=scontent-cdt1-1.xx&oh=bc76ada8ebefb3a98d8e1724cdec29f8&oe=5F3D6507",
      alt: "Sortie du mardi - pluie"
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
