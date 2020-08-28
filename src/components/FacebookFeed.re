[@react.component]
let make = () => {
  let className =
    [Width(WFull), Overflow(OverflowHidden), Display(Grid)] |> make;
  <iframe
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLyon-Mountain-Trail-104105514311189%2F&tabs=timeline&width=500&height=800&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
    width="500"
    height="800"
    scrolling="no"
  />;
};
