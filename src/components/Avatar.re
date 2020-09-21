open TW;

[@react.component]
let make = (~name, ~role=?, ~src, ~desc=?) => {
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

  <div className>
    <img className=imgClass src alt=name />
    <Text fontWeight=FontSemibold> {React.string(name)} </Text>
    <Divider width=W6 color=Theme.BackgroundColors.primary />
    {switch (role) {
     | Some(role) => <Text color=TextGray900> {React.string(role)} </Text>
     | _ => React.null
     }}
    {switch (desc) {
     | Some(desc) =>
       <Text align=TextCenter color=TextGray600> {React.string(desc)} </Text>
     | None => React.null
     }}
  </div>;
};
