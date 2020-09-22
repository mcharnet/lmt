open TW;

[@react.component]
let make = (~name, ~role=?, ~desc=?, ~src) => {
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
      Width(W24), 
      Height(H24)
    ] |> make;

  <div className>
    <img className=imgClass src alt=name />
    <div className=textContainerClass style=(
        ReactDOMRe.Style.make(~boxShadow="0 -5px 5px -5px #333", ())
      )>
    <Text fontWeight=FontSemibold> {React.string(name)} </Text>
    <Divider width=W6 color=Theme.BackgroundColors.primary />
    {switch (role) {
     | Some(role) => <Text color=TextGray900> {React.string(role)} </Text>
     | _ => React.null
     }}
     
     </div>
     {switch (desc) {
       | Some(desc) =>
         <Text align=TextCenter color=TextGray600>
           {React.string(desc)}
         </Text>
       | None => React.null
       }}
  </div>;
};
