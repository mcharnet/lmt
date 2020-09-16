open TW;

[@react.component]
let make = (~children) => {
  let className =
    [Padding(Px48), Padding(Py20), BackgroundColor(BgBlack)] |> make;

  <div className> 
    <Logo />
    children 
  </div>;
};
