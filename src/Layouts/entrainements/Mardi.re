let images: list(Image.image) = [
  {alt: "Sortie du mardi", src: "entrainements/mardi6.jpg"},
  {alt: "Sortie du mardi", src: "entrainements/mardi5.jpg"},
];
let description = {j| Séances de vitesse, de seuil et de dénivelé sur le secteur Croix-Rousse/Caluire|j};
let rendezVous = {j| => Départ du Parc de la Tête d’Or à 19h15 (Porte des enfants du Rhône)|j};

[@react.component]
let make = () => {
  <EntrainementSection title="Mardi soir" images description rendezVous />;
};
