type link = {
  name: string,
  href: string,
};
let headerLinks = [
  {name: {j| Accueil |j}, href: "/"},
  {name: {j| Entraînements / Sorties |j}, href: "/entrainements"},
  {name: {j| Le bureau |j}, href: "/bureau"},
  {name: {j| Adhésion |j}, href: "/adhesion"},
  {name: {j| News |j}, href: "/news"},
  /* {name: {j| Médias |j}, href: "/"}, */
];

module Style = {
  open TW;
  let headerNavClass =
    [
      Display(Hidden),
      Lg(Display(Flex)),
      Width(WFull),
      BackgroundColor(Theme.BackgroundColors.primary),
      Padding(P8),
      TextColor(TextWhite),
      Display(Grid),
      GridFlow(GridFlowCol),
      Gap(Gap12),
      AlignItems(ItemsCenter),
      JustifyContent(JustifyBetween),
      Position(Sticky),
      Placement(Top0),
      BoxShadow(Shadow),
      ZIndex(Z10)
    ]
    |> make;

    let headerContainerClass =
    [

      Position(Sticky),
      Placement(Top0),
      BoxShadow(Shadow),
      Padding(Pt4),
      Padding(Px2)
    ]
    |> make;

  let headerLinksClass =
    [ZIndex(Z10), Display(Grid), GridFlow(GridFlowCol), Gap(Gap12), AlignItems(ItemsCenter), TextAlign(TextCenter)]
    |> make;

  let logoClass = [FontSize(Text3xl), ZIndex(Z0), Whitespace(WhitespaceNoWrap)] |> make;
};

[@react.component]
let make = () => {
  <>
    <nav className=Style.headerNavClass>
      <span className=Style.logoClass>
        {"LYON MOUNTAIN TRAIL" |> React.string}
      </span>
      <div className=Style.headerLinksClass>
        {List.map(({name, href}) => <Link name href />, headerLinks)
         |> Array.of_list
         |> React.array}
      </div>
    </nav>
  </>;
};
