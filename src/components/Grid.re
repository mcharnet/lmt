open TW;

[@react.component]
let make = (~children, ~cols=GridCols1, ~gap=Gap0, ~padding=P0) => {
  let className = [Display(Grid), GridCols(cols), Gap(gap), Padding(padding)] |> make;

  <div className> children </div>;
};
