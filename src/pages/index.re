open TW;

[@react.component]
let make = () => {
  <>
    <Card title="Qui sommes-nous ?">
      <p>
        {React.string(
           {j| Lyon Mountain Trail est née de la volonté d’un groupe d’amis désireux de fouler ensemble les chemins et singles de la région Lyonnaise mais aussi de s'évader en montagne dès que possible à la découverte de nouveaux terrains de jeux.|j},
         )}
      </p>
      <p>
        {React.string(
           {j| À Lyon Mountain Trail, nous pratiquons le trail à différents niveaux, où chacun, compétiteur ou non, vit sa passion comme il l'entend, le tout avec des valeurs de partage, d'entraide, de simplicité, de discrétion, d’humilité et de respect de la nature.|j},
         )}
      </p>
      <p>
        {React.string(
           {j| Cette subtile alchimie fait de Lyon Mountain Trail une association vivante et dynamique où chaque adhérent, en fonction de ses compétences et de ses envies peut proposer lui-même en plus des sorties montagne dans les lieux qu’il affectionne, des activités de pleine nature comme par exemple le VTT, le vélo de route, les randonnées en raquettes, le ski de fond ou le ski alpin. |j},
         )}
      </p>
    </Card>
    <Card title={j|Dernières news|j}> <FacebookFeed /> </Card>
    <Card title="Le bureau">
      <Grid cols=GridCols6>
        {List.map(
           ({name, role, src, col}: Bureau.member) =>
             <Cell col> <Avatar name ?role src /> </Cell>,
           Bureau.members,
         )
         |> Array.of_list
         |> React.array}
      </Grid>
    </Card>
  </>;
};

let default = make;

/* TODO
   Créer un loader sympa :
   la premiere fois que tu arrives sur le site, une div noire qui prend toute la place,
   avec une montagne en SVG blanche  qui se dessine puis qui disparait au bout de 1s */
