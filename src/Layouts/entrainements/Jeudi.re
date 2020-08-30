let title = "Jeudi soir";
let images: list(Image.image) = [
  {
    alt: "Sortie du jeudi - fourvière",
    src: "http://lyonmountaintrail.free.fr/wp-content/uploads/2018/01/Capture-d%E2%80%99%C3%A9cran-2018-01-21-%C3%A0-16.24.24.png",
  },
  {
    alt: "Sortie du jeudi - fourviere2",
    src: "http://lyonmountaintrail.free.fr/wp-content/uploads/2018/01/Capture-d%E2%80%99%C3%A9cran-2018-01-21-%C3%A0-16.24.24.png",
  },
];
let description = {j| Sortie dénivelé dans le secteur de Fourvière. Terrain de jeu qui regorge de montées secrètes, les jambes chauffent !|j};
let rendezVous = {j| => Départ de Fourvière à 19h15|j};

[@react.component]
let make = () => {
  <EntrainementSection title images description rendezVous />;
};
