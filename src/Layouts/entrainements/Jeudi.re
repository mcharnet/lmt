let title = "Jeudi soir";
let images: list(Image.image) = [
  {alt: "Sortie du jeudi - fourvière", src: "entrainements/mardi3.jpg"},
  {alt: "Sortie du jeudi - fourviere2", src: "entrainements/mardi7.jpg"},
];
let description = {j| Sortie dénivelé dans le secteur de Fourvière. Terrain de jeu qui regorge de montées secrètes, les jambes chauffent !|j};
let rendezVous = {j| => Départ de Fourvière à 19h15|j};

[@react.component]
let make = () => {
  <EntrainementSection title images description rendezVous />;
};
