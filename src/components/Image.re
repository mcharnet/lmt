open TW;

type image = {
  src: string,
  alt: string,
};

[@react.component]
let make = (~src, ~alt, ~width=WFull, ~height=HAuto) => {
  let className = [ObjectFit(ObjectCover), Width(width), Height(height)] |> make;

  <img className src alt />;
};
