open TW;

[@react.component]
let make = (~name, ~role=?, ~src) => {
  let className =
    [
      BorderRadius(RoundedFull),
      Display(Flex),
      FlexDirection(FlexCol),
      AlignItems(ItemsCenter),
    ]
    |> make;
  let imgClass =
    [
      BorderRadius(RoundedFull),
      Width(W48),
      Height(H48),
      ObjectFit(ObjectCover),
    ]
    |> make;

    let textContainerClass = [
      BackgroundColor(BgGray100),
      BorderRadius(RoundedFull),
      Padding(P4),
      TextAlign(TextCenter),
      Margin(MinusMt8),
    ] |> make;

  <div className>
    <img className=imgClass src alt=name />
    <div className=textContainerClass>
    <Text fontWeight=FontSemibold> {React.string(name)} </Text>
    <Divider width=W6 color=Theme.BackgroundColors.primary />
    {switch (role) {
     | Some(role) => <Text color=TextGray900> {React.string(role)} </Text>
     | _ => React.null
     }}
     </div>
  </div>;
};
