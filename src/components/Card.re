open TW;
module Style = {
  let cardClass =
    [
      BorderRadius(Rounded),
      BackgroundColor(BgGray100),
      Padding(Px12),
      Padding(Py6),
      Display(Grid),
      Gap(Gap6),
    ]
    |> make;

  let titleClass = [TextAlign(TextCenter)] |> make;
};

[@react.component]
let make = (~children, ~title=?, ~href=?) => {
  <div className=Style.cardClass>
    {switch (title) {
     | Some(title) =>
       <div className=Style.titleClass>
         {switch (href) {
          | Some(href) => <Link href name=title fontSize=Text4xl />
          | _ => <Text fontSize=Text4xl> {React.string(title)} </Text>
          }}
         <Divider color=BgBlue700 />
       </div>
     | _ => React.null
     }}
    <div> children </div>
  </div>;
};
