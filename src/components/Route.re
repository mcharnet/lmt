/* module AsyncData = Relude.AsyncData; */

type t =
  | Home
  | News
  | Entrainements
  | Adhesion
  | Bureau;

let useRoute: unit => t =
  () => {
    let url = ReasonReactRouter.useUrl();
    let hash = url.hash |> Js.String.split("/");

    switch (hash) {
    | [|"", "news"|] => News
    | [|"", "entrainements"|] => Entrainements
    | [|"", "bureau"|] => Bureau
    | [|"", "adhesion"|] => Adhesion
    | _ => Home
    };
  };
