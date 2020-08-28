open TW;

let images: list(Image.image) = [
  {
    alt: "Sortie du mardi - chaises",
    src: "http://lyonmountaintrail.free.fr/wp-content/uploads/2015/10/Capture-d%E2%80%99%C3%A9cran-2018-01-21-%C3%A0-14.20.23.png",
  },
  {
    alt: "Sortie du mardi - pluie",
    src: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/34559220_10216430112248898_198705317624676352_o.jpg?_nc_cat=103&_nc_sid=b9115d&_nc_ohc=NFAw7LcWHhkAX_0y-V8&_nc_ht=scontent-cdt1-1.xx&oh=abb648344a63d65f10f0dd1de6685148&oe=5F3D1A41",
  },
];
let description = {j| Séances de vitesse, de seuil et de dénivelé sur le secteur Croix-Rousse/Caluire|j};
let rendezVous = {j| => Départ du Parc de la Tête d’Or à 19h15 (Porte des enfants du Rhône)|j};

[@react.component]
let make = () => {
  <EntrainementSection title="Mardi soir" images description rendezVous />;
};
