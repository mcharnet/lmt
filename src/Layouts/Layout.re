open TW;

[@react.component]
let make = (~children) => {
  let className =
    [
      BackgroundColor(BgBlack),
      Padding(Px6),
      Padding(Py2),
      Sm(Padding(Px12)),
      Sm(Padding(Py6)),
      Md(Padding(Px24)),
      Md(Padding(Py12)),
      Lg(Padding(Px32)),
      Lg(Padding(Py16)),
      Xl(Padding(Px48)),
      Xl(Padding(Py20)),
    ]
    |> make;

  <div className> <Logo /> children </div>;
};
