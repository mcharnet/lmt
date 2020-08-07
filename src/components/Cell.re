open TW;

[@react.component]
let make = (~children, ~col=ColAuto) => {
  let className = [Col(ColSpan2), Col(col)] |> make;

  <div className> children </div>;
};
