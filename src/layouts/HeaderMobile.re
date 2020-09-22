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
      Lg(Display(Hidden)),
      Width(WFull),
      BackgroundColor(Theme.BackgroundColors.primary),
      Padding(Px8),
      Padding(Py4),
      TextColor(TextWhite),
      Display(Grid),
      GridFlow(GridFlowCol),
      Gap(Gap12),
      AlignItems(ItemsCenter),
      JustifyContent(JustifyBetween),
      Position(Sticky),
      Placement(Top0),
      BoxShadow(Shadow),
      ZIndex(Z10),
    ]
    |> make;

  let headerLinksClass =
    [
      Padding(P6),
      Display(Grid),
      GridFlow(GridFlowRow),
      Position(Absolute),
      BackgroundColor(Theme.BackgroundColors.primary),
      TextColor(TextWhite),
      Placement(Right0),
      Margin(Mt16),
      Gap(Gap4),
    ]
    |> make;

  let logoTinyClass =
    [Sm(Display(Hidden)), FontSize(Text3xl), ZIndex(Z0)] |> make;
  let logoClass =
    [
      Display(Hidden),
      Sm(Display(InlineFlex)),
      FontSize(Text3xl),
      ZIndex(Z0),
    ]
    |> make;

  let burgerMenuClass =
    [Display(Flex), Lg(Display(Hidden)), ZIndex(Z10), OutlineNone] |> make;
  let svgBurgerMenuClass = [Height(H6), Width(W6)] |> make;
  let buttonClass = [OutlineNone] |> make;
};

[@react.component]
let make = () => {
  let (isVisible, setVisible) = React.useState(_ => false);
  let toggle = _ => setVisible(prevState => !prevState);
  let dropdownRef = UseClickOutside.make(_ => setVisible(_ => false));

  <nav
    ref={ReactDOMRe.Ref.domRef(dropdownRef)} className=Style.headerNavClass>
    <span className=Style.logoTinyClass> {"LMT" |> React.string} </span>
    <a className=Style.logoClass href="/">
      {"LYON MOUNTAIN TRAIL" |> React.string}
    </a>
    <div className=Style.burgerMenuClass>
      <button onClick=toggle className=Style.buttonClass>
        <svg
          className=Style.svgBurgerMenuClass
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <title> {"Menu" |> React.string} </title>
          <path
            fill="#FFFFFF"
            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
          />
        </svg>
      </button>
    </div>
    {switch (isVisible) {
     | true =>
       <div
         className=Style.headerLinksClass
         style={ReactDOMRe.Style.make(~top="2rem", ())}>
         {List.map(
            ({name, href}) => <Link name href onClick=toggle />,
            headerLinks,
          )
          |> Array.of_list
          |> React.array}
       </div>
     | _ => React.null
     }}
  </nav>;
};
