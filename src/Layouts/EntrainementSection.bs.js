'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Cell$Lmt = require("../components/Cell.bs.js");
var Grid$Lmt = require("../components/Grid.bs.js");
var Text$Lmt = require("../components/Text.bs.js");
var Image$Lmt = require("../components/Image.bs.js");

function EntrainementSection(Props) {
  var title = Props.title;
  var images = Props.images;
  var description = Props.description;
  var rendezVous = Props.rendezVous;
  return React.createElement("div", undefined, React.createElement(Text$Lmt.make, {
                  children: title,
                  fontSize: /* Text4xl */7
                }), React.createElement(Grid$Lmt.make, {
                  children: null,
                  cols: /* GridCols2 */1,
                  gap: /* Gap4 */4,
                  padding: /* P4 */4
                }, React.createElement(Cell$Lmt.make, {
                      children: React.createElement("p", undefined, description),
                      col: /* ColSpan2 */2
                    }), $$Array.of_list(List.map((function (param) {
                            return React.createElement(Image$Lmt.make, {
                                        src: param.src,
                                        alt: param.alt,
                                        height: /* H64 */17
                                      });
                          }), images))), rendezVous !== undefined ? React.createElement("p", undefined, rendezVous) : null);
}

var make = EntrainementSection;

exports.make = make;
/* react Not a pure module */
