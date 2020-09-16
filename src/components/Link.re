open TW;

let handleClick = (href, event) =>
  if (!ReactEvent.Mouse.defaultPrevented(event)) {
    ReactEvent.Mouse.preventDefault(event);
    ReasonReactRouter.push(href);
  };

[@react.component]
let make = (~name, ~href, ~fontSize=TextBase, ~onClick=?) => {
  let linkClass =
    [
      Cursor(CursorPointer),
      TextColor(HoverTextGray900),
      FontSize(fontSize),
    ]
    |> make;

  let onClick = ev =>
    switch (onClick) {
    | Some(func) => func(ev)
    | None => ()
    };

  <Next.Link href >
    <a className=linkClass onClick> {React.string(name)} </a>
  </Next.Link>;
};
