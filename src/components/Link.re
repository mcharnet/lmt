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

  <Next.Link href>
    <a
      style={ReactDOMRe.Style.make(
        ~transition="all 300ms cubic-bezier(0.38, 0.34, 0.4, 0.89)",
        (),
      )}
      className=linkClass
      onClick>
      {React.string(name)}
    </a>
  </Next.Link>;
};
