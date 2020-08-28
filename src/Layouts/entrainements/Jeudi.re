open TW;

let title = "Jeudi soir";
let images: list(Image.image) = [
  {
    alt: "Sortie du jeudi - fourvière",
    src: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/18422319_10158662063070471_8625508753852823434_o.jpg?_nc_cat=111&_nc_sid=825194&_nc_ohc=HFVgIW5rUCEAX8GB7Gi&_nc_ht=scontent-cdg2-1.xx&oh=5d298fd2ea23cc57d64c1cdadaa3e835&oe=5F3EA129",
  },
  {
    alt: "Sortie du mardi - pluie",
    src: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/19665141_1409668672457760_5354924915153572430_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=wKLq7lxTwcsAX_nZHae&_nc_ht=scontent-cdt1-1.xx&oh=bc76ada8ebefb3a98d8e1724cdec29f8&oe=5F3D6507",
  },
];
let description = {j| Sortie dénivelé dans le secteur de Fourvière. Terrain de jeu qui regorge de montées secrètes, les jambes chauffent !|j};
let rendezVous = {j| => Départ de Fourvière à 19h15|j};

[@react.component]
let make = () => {
  <EntrainementSection title images description rendezVous />;
};
