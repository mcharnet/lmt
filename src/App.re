type route =
  | Home
  | Entrainements
  | Bureau
  | News
  | Adhesion;

module Style = {
  open TW;
  let wrapperClass = [BackgroundColor(BgBlack), Height(HFull)] |> make;
};

let mapUrlToRoute = (url: ReasonReact.Router.url) =>
  switch (url.path) {
  | ["home"] => Home
  | ["#/entrainements"] => Entrainements
  | ["#/bureau"] => Bureau
  | ["#/news"] => News
  | ["#/adhesion"] => Adhesion
  | _ => Home
  };

[@react.component]
let make = () => {
  let route = Route.useRoute();

  <div className=Style.wrapperClass>
    <Header />
    {switch (route) {
     | Home => <Home />
     | Entrainements => <Entrainements />
     | Bureau => <Bureau />
     | News => <News />
     | Adhesion => <Adhesion />
     }}
  </div>;
};

let default = make;
