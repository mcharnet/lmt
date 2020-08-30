type link = {
  name: string,
  href: string,
};
let headerLinks = [
  {name: {j| Accueil |j}, href: "/"},
  {name: {j| Entraînements / Sorties |j}, href: "/entrainements"},
  {name: {j| Qui sommes-nous ? |j}, href: "/bureau"},
  {name: {j| Adhésion |j}, href: "/adhesion"},
  {name: {j| Nous y étions |j}, href: "/news"},
  {name: {j| Médias |j}, href: "/"},
];

module Style = {
  open TW;
  let headerNavClass =
    [
      Width(WFull),
      BackgroundColor(Theme.Colors.primary),
      Padding(P8),
      TextColor(TextWhite),
      Display(Grid),
      GridFlow(GridFlowCol),
      Gap(Gap12),
      AlignItems(ItemsCenter),
      JustifyContent(JustifyBetween),
    ]
    |> make;

  let headerLinksClass =
    [ZIndex(Z10), Display(Grid), GridFlow(GridFlowCol), Gap(Gap12)]
    |> make;

  let logoClass = [FontSize(Text4xl), ZIndex(Z0)] |> make;
};

[@react.component]
let make = () => {
  <nav className=Style.headerNavClass>
    <span className=Style.logoClass>
      {"LYON MOUNTAIN TRAIL" |> React.string}
    </span>
    <div className=Style.headerLinksClass>
         {List.map(({name, href}) => <Link name href />, headerLinks)
          |> Array.of_list
          |> React.array}
       </div>
    /* <div>
      <Next.Link href="/"> <a> {ReasonReact.string("Home")} </a> </Next.Link>
      <Next.Link href="/Adhesion">
        <a> {ReasonReact.string("About")} </a>
      </Next.Link>
    </div> */
    <Logo />
  </nav>;
};
