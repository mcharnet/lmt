ReactDOMRe.renderToElementWithId(<App />, "root");
/* ReasonReact.Router.push calls the pushState browser API which */
/* when given an empty url will push the current url */
ReasonReact.Router.push("");
