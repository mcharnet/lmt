'use strict';

var React = require("react");
var Card$Lmt = require("../components/Card.bs.js");
var Grid$Lmt = require("../components/Grid.bs.js");
var Text$Lmt = require("../components/Text.bs.js");
var Image$Lmt = require("../components/Image.bs.js");

var completText = "Victime de notre succès, nous sommes au complet pour le moment et stoppons les adhésions pour la saison 2020-2021";

var rejoindreText = "Envie de nous rejoindre ?";

function Adhesion(Props) {
  return React.createElement(Card$Lmt.make, {
              children: React.createElement(Grid$Lmt.make, {
                    children: null,
                    gap: /* Gap6 */6
                  }, React.createElement(Text$Lmt.make, {
                        children: completText,
                        align: /* TextCenter */1,
                        fontSize: /* Text2xl */5,
                        color: /* TextRed600 */51
                      }), React.createElement(Text$Lmt.make, {
                        children: rejoindreText,
                        align: /* TextCenter */1,
                        fontSize: /* Text2xl */5,
                        color: /* TextBlue600 */186
                      }), React.createElement(Image$Lmt.make, {
                        src: "http://lyonmountaintrail.free.fr/wp-content/uploads/2016/01/Capture-d%E2%80%99%C3%A9cran-2018-01-21-%C3%A0-15.06.37-1.png",
                        alt: "AG"
                      }), React.createElement(Text$Lmt.make, {
                        children: null
                      }, React.createElement("p", undefined, React.createElement(Text$Lmt.make, {
                                children: "La dimension "
                              }), React.createElement(Text$Lmt.make, {
                                children: "montagne ",
                                color: /* TextBlue600 */186
                              }), React.createElement(Text$Lmt.make, {
                                children: "étant importante à LMT, nous cherchons donc des gens qui seront "
                              }), React.createElement(Text$Lmt.make, {
                                children: "enthousiastes ",
                                color: /* TextBlue600 */186
                              }), React.createElement(Text$Lmt.make, {
                                children: "à l‘idée de pratiquer aussi du "
                              }), React.createElement(Text$Lmt.make, {
                                children: "Trail en montagne",
                                color: /* TextBlue600 */186
                              }), React.createElement(Text$Lmt.make, {
                                children: ". Peu importe le niveau même si une  "
                              }), React.createElement(Text$Lmt.make, {
                                children: "expérience en trail et des sports outdoor ",
                                color: /* TextBlue600 */186
                              }), React.createElement(Text$Lmt.make, {
                                children: "st tout de même "
                              }), React.createElement(Text$Lmt.make, {
                                children: "recommandée ",
                                color: /* TextBlue600 */186
                              }), React.createElement(Text$Lmt.make, {
                                children: " par soucis d’homogénéité."
                              })), React.createElement("p", undefined, React.createElement(Text$Lmt.make, {
                                children: "Par ailleurs, Lyon Mountain Trail a vocation à rester à "
                              }), React.createElement(Text$Lmt.make, {
                                children: "taille humaine ",
                                color: /* TextBlue600 */186
                              }), React.createElement(Text$Lmt.make, {
                                children: "pour garder un "
                              }), React.createElement(Text$Lmt.make, {
                                children: "esprit convivial ",
                                color: /* TextBlue600 */186
                              }), React.createElement(Text$Lmt.make, {
                                children: " . Pour cela, le bureau examine chaque candidature."
                              })), React.createElement("p", undefined, React.createElement(Text$Lmt.make, {
                                children: "Vous aimez, comme nous"
                              }), React.createElement(Text$Lmt.make, {
                                children: " pratiquer le trail et les sports outdoor sous quelque forme que ce soit",
                                color: /* TextBlue600 */186
                              }), React.createElement(Text$Lmt.make, {
                                children: "(trail, randonnée, ski alpin et fond, VTT/vélo, Raid multisports) ? Vous êtes motivés pour nous rejoindre et partager ensemble nos passions ?"
                              })), React.createElement("p", undefined, "Nous sommes complets pour la saison 2019/2020 mais n’hésitez pas à nous envoyer un mail de présentation/motivation, des places peuvent se libérer à tout moment : lyonmountaintrail@gmail.com."))),
              title: "Adhésion"
            });
}

var make = Adhesion;

var $$default = Adhesion;

exports.completText = completText;
exports.rejoindreText = rejoindreText;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
