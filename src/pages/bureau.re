open TW;

type member = {
  name: string,
  role: option(string),
  src: string,
  col,
  desc: string,
};
let members = [
  {
    name: "Philippe",
    role: Some({j| Président |j}),
    src: "/bureau/philippe.jpg",
    col: ColSpan2,
    desc: {j|Après plusieurs années sur les courts de tennis, une envie de pratiquer des "sports outdoor" aux sensations plus fortes et plus proches de la nature a fait son chemin. Il découvre le VTT (XC/Marathon) en 2000 qui l’amène également au trail (sur des formats KV/courts/maratrails) quelques années plus tard. Compétiteur dans l’âme, il a à son actif quelques performances sur des courses de renom (Marathon du Mont Blanc / Marathon des Causses Templiers / Sainté-Express / Red Bull Elements / l’Ardéchois / Nivollet-Revard …). Pratique aussi le ski alpin. Son envie de partager sa passion avec les autres l’amène à créer LYON MOUNTAIN TRAIL en 2015|j},
  },
  {
    name: "Xavier",
    role: Some({j| Trésorier |j}),
    src: "/bureau/xavier.jpg",
    col: ColSpan2,
    desc: {j|Après 15 ans d’aviron en compétition, Xavier a naturellement continué le sport avec aujourd’hui pour objectif de se faire plaisir sur de belles courses. Polyvalent, du vélo route au VTT, en passant par le ski de fond, la course d’orientation et les raids multisports, Xavier pratique le trail sur des parcours jusqu’à 45 km. C’est toujours difficile de choisir l’activité du week-end ! Xavier adore également partir en trek pendant les vacances pour découvrir de nouveaux pays comme le Népal, la Patagonie, la Réunion.|j},
  },
  {
    name: "Hugo",
    role: Some({j| Secrétaire |j}),
    src: "/bureau/hugo.jpg",
    col: ColSpan2,
    desc: {j|Après avoir plutôt pratiqué des sports co dans sa jeunesse (foot, volley...), Hugo a découvert le trail et le triathlon en 2012. Même si ce ne sont pas les compétitions qui le motivent, Hugo participe à quelques courses de 20 à 80 km par an pour découvrir de nouveaux sentiers. Hugo est aussi et surtout adepte de voyages plus ou moins longs en itinérance à vélo, à pied et en ski de rando.|j},
  },
  {
    name: "Robin",
    src: "/bureau/robin.jpg",
    col: ColStart2,
    role: None,
    desc: {j|J'ai démarré ma carrière professionnelle 😊 par le VTT. J'étais totalement amoureux de mon vélo (je passais plus de temps à le nettoyer qu'à en faire !!), passion qui a durée 3-4 ans. Lorsque j'ai débuté mes études en école prépa, j'ai ressenti le besoin de faire un sport qui me défoule en un minimum de temps (fallait garder un peu de temps pour les soirées aussi!). Du coup je me suis mis à la course sur route et ai vite essayé dans les chemins! Gros kif! j'en ai presque oublié le vélo! Résultat : depuis 4 ans je suis à fond dans le trail, pourquoi? pour la liberté, le calme, la sensation d'être un aventurier 😊 Je suis plutôt sur des formats courts et < 40km. Au dessus de cette distance je ne trouve pas mon plaisir et je me lasse rapidement. Un jour peut être un ultra!|j},
  },
  {
    name: {j| Benoît |j},
    src: "/bureau/benoit.jpg",
    col: ColStart4,
    role: None,
    desc: {j|Avec ses débuts le VTT lors de ses années collège et son attrait pour les grands espaces, Benoît alterne aujourd'hui entre le vélo, la course à pied et le ski au gré des saisons et des projets. Plutôt attiré par les sorties au long cours, Benoît aime s'engager sur des sorties à la journée ou plus.|j},
  },
];

[@react.component]
let make = () => {
  <Card title="Le bureau">
    <Grid cols=GridCols6 gap=Gap12>
      {List.map(
         ({name, role, src, col, desc}) =>
           <Cell col> <Avatar name ?role src desc /> </Cell>,
         members,
       )
       |> Array.of_list
       |> React.array}
    </Grid>
  </Card>;
};

let default = make;
