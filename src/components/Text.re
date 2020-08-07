open TW;

type kind =
  | Title;

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
    ]
    |> make;

  <span className=textClass> children </span>;
};
