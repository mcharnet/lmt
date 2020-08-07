open TW;

let title = "Le dimanche";
let images: list(Image.image) = [
  {
    alt: "Sortie du dimanche - MDO",
    src: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/89297922_10222341219579398_8481516904345763840_n.jpg?_nc_cat=104&_nc_sid=b9115d&_nc_ohc=d65iK_-VQ0AAX-75JV1&_nc_ht=scontent-cdg2-1.xx&oh=213d08b10cce62f16ab36177b08607b9&oe=5F3DC15B",
  },
  {
    alt: "Sortie du dimanche - MDO2",
    src: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/55708877_10219167752324700_1941679080147517440_n.jpg?_nc_cat=101&_nc_sid=825194&_nc_ohc=pulOBVviw2wAX8WuptV&_nc_ht=scontent-cdt1-1.xx&oh=4496e36d0dc1730f097bf868fbf4a179&oe=5F3EB813",
  },
];
let description = {j|Nous profitons de la proximité et de la richesse des sentiers des Monts d’Or et des Monts du Lyonnais, terrains de jeu idéaux, pour nous adonner à notre passion en pleine nature au cours d’une sortie longue et ludique.|j};

[@react.component]
let make = () => {
  <EntrainementSection title images description />;
};
