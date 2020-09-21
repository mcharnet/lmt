[@react.component]
let make = () => {
  open TW;
  let className = [Width(WFull), Sm(Position(Relative))] |> make;
 let wrapperClass=[Overflow(OverflowHidden)] |> make;

  <div className=wrapperClass>
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLyon-Mountain-Trail-104105514311189&tabs=timeline&height=500&width=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
      height="500"
      className
      style=(
        ReactDOMRe.Style.make(~left="calc(50% - 250px)", ())
      )
      /* style={{ "left": "calc(50% - 250px)" }} */
      scrolling="no"
    />
    </div>
 
};
