open TW;

[@react.component]
let make = (~children, ~col=ColAuto) => {
  let className = [GridFlow(GridFlowCol), Col(col)] |> make;

  <div className> children </div>;
};
