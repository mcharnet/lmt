  open TW;
  let handleClick = (href, _event) => {
  ReasonReactRouter.push(href);
};


let handleClick = (href, event) =>
  if (! ReactEvent.Mouse.defaultPrevented(event)) {
    ReactEvent.Mouse.preventDefault(event);
    ReasonReactRouter.push(href)
  };

[@react.component]
let make = (~name, ~href, ~fontSize=TextBase) => {

  let linkClass =
    [
      Cursor(CursorPointer), 
      TextColor(HoverTextGray900),
      FontSize(fontSize),
    ]
    |> make;

  <a className=linkClass onClick={handleClick(href)}> {React.string(name)} </a>;
};
