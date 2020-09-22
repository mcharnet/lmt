open TW;

[@react.component]
let make = (~name, ~role=?, ~src, ~desc=?, ~index=0) => {
  let order =
    switch (index mod 2) {
    | 1 => OrderLast
    | _ => OrderFirst
    };

  let imgClass =
    [
      BorderRadius(RoundedFull),
      Width(WFull),
      Height(HAuto),
      ObjectFit(ObjectCover),
      Order(order),
    ]
    |> make;

  <Grid cols=GridCols3 gap=Gap12>
    <img className=imgClass src alt=name />
    <Column col=ColSpan2>
      <Text fontWeight=FontSemibold> {React.string(name)} </Text>
      <Divider margin=Mx0 width=W6 color=Theme.BackgroundColors.primary />
      {switch (role) {
       | Some(role) => <P color=TextGray900> {React.string(role)} </P>
       | _ => React.null
       }}
      {switch (desc) {
       | Some(desc) =>
         <Text align=TextCenter color=TextGray600>
           {React.string(desc)}
         </Text>
       | None => React.null
       }}
    </Column>
  </Grid>;
};
