open TW;

[@react.component]
let make = (~children, ~cols=GridCols1, ~gap=Gap0, ~padding=P0, ~className=?) => {
  let gridClass =
    [Display(Grid), GridCols(cols), Gap(gap), Padding(padding)] |> make;

  let className =
    switch (className) {
    | Some(className) => String.concat(gridClass, [className])
    | _ => gridClass
    };

  <div className> children </div>;
};
