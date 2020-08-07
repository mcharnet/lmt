open TW;

[@react.component]
let make = (~color=BgBlack, ~width=W32) => {
  let className =
    [Height(H1), Width(width), BackgroundColor(color), Margin(MAuto), Margin(My2), BorderRadius(RoundedFull)]
    |> make;

  <div className />;
};
