let title = "Le Week-end";
let images: list(Image.image) = [
  {alt: "Sortie du WE - MDL", src: "/sorties/mdl.jpg"},
  {alt: "Sortie du WE - MDO", src: "/sorties/mdo2.jpg"},
];
let description = {j|Nous profitons de la proximité et de la richesse des sentiers des Monts d’Or et des Monts du Lyonnais, terrains de jeu idéaux, pour nous adonner à notre passion en pleine nature au cours d’une sortie longue et ludique.|j};

[@react.component]
let make = () => {
   <EntrainementSection title images description />;
}

