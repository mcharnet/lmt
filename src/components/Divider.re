open TW;

[@react.component]
let make = (~color=BgBlack, ~width=W32, ~margin=MAuto) => {
  let className =
    [
      Height(H1),
      Width(width),
      BackgroundColor(color),
      Margin(margin),
      Margin(My2),
      BorderRadius(RoundedFull),
    ]
    |> make;

  <div className />;
};
