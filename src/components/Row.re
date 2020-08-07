open TW;

[@react.component]
let make = (~children) => {
  let className = [GridFlow(GridFlowRow)] |> make;

  <div className> children </div>;
};
