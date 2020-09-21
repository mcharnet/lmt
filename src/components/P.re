open TW;

[@react.component]
let make =
    (
      ~children,
      ~align=TextLeft,
      ~fontSize=TextBase,
      ~fontWeight=FontNormal,
      ~color=TextBlack,
    ) => {
  let textClass =
    [
      LineHeight(LeadingNormal),
      FontSize(fontSize),
      TextAlign(align),
      FontWeight(fontWeight),
      TextColor(color),
      Margin(Mb2),
      Display(Block),
    ]
    |> make;

  <span className=textClass> children </span>;
};
