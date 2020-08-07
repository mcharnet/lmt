'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Card$Lmt = require("../components/Card.bs.js");
var Cell$Lmt = require("../components/Cell.bs.js");
var Grid$Lmt = require("../components/Grid.bs.js");
var Avatar$Lmt = require("../components/Avatar.bs.js");
var Bureau$Lmt = require("./Bureau.bs.js");
var Layout$Lmt = require("../Layouts/Layout.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var FacebookFeed$Lmt = require("../components/FacebookFeed.bs.js");

function Home(Props) {
  return React.createElement(Layout$Lmt.make, {
              children: null
            }, React.createElement(Card$Lmt.make, {
                  children: null,
                  title: "Qui sommes-nous ?"
                }, React.createElement("p", undefined, " Lyon Mountain Trail est née de la volonté d’un groupe d’amis désireux de fouler ensemble les chemins et singles de la région Lyonnaise mais aussi de s\'évader en montagne dès que possible à la découverte de nouveaux terrains de jeux."), React.createElement("p", undefined, " À Lyon Mountain Trail, nous pratiquons le trail à différents niveaux, où chacun, compétiteur ou non, vit sa passion comme il l\'entend, le tout avec des valeurs de partage, d\'entraide, de simplicité, de discrétion, d’humilité et de respect de la nature."), React.createElement("p", undefined, " Cette subtile alchimie fait de Lyon Mountain Trail une association vivante et dynamique où chaque adhérent, en fonction de ses compétences et de ses envies peut proposer lui-même en plus des sorties montagne dans les lieux qu’il affectionne, des activités de pleine nature comme par exemple le VTT, le vélo de route, les randonnées en raquettes, le ski de fond ou le ski alpin. ")), React.createElement(Card$Lmt.make, {
                  children: React.createElement(FacebookFeed$Lmt.make, {}),
                  title: "Dernières news"
                }), React.createElement(Card$Lmt.make, {
                  children: React.createElement(Grid$Lmt.make, {
                        children: $$Array.of_list(List.map((function (param) {
                                    var tmp = {
                                      name: param.name,
                                      src: param.src
                                    };
                                    if (param.role !== undefined) {
                                      tmp.role = Caml_option.valFromOption(param.role);
                                    }
                                    return React.createElement(Cell$Lmt.make, {
                                                children: React.createElement(Avatar$Lmt.make, tmp),
                                                col: param.col
                                              });
                                  }), Bureau$Lmt.members)),
                        cols: /* GridCols6 */5
                      }),
                  title: "Le bureau"
                }));
}

var make = Home;

exports.make = make;
/* react Not a pure module */
