open TW;

let handleClick = (href, event) =>
  if (!ReactEvent.Mouse.defaultPrevented(event)) {
    ReactEvent.Mouse.preventDefault(event);
    ReasonReactRouter.push(href);
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

  <Next.Link href>
    <a className=linkClass> {React.string(name)} </a>
  </Next.Link>;
};
