let images: list(Image.image) = [
  {alt: "Sortie du mardi - chaises", src: "entrainements/mardi.jpg"},
  {alt: "Sortie du mardi - pluie", src: "entrainements/mardi2.jpg"},
];
let description = {j| Séances de vitesse, de seuil et de dénivelé sur le secteur Croix-Rousse/Caluire|j};
let rendezVous = {j| => Départ du Parc de la Tête d’Or à 19h15 (Porte des enfants du Rhône)|j};

[@react.component]
let make = () => {
  <EntrainementSection title="Mardi soir" images description rendezVous />;
};
