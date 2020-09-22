// This type is based on the getInitialProps return value.
// If you are using getServerSideProps or getStaticProps, you probably
// will never need this
// See https://nextjs.org/docs/advanced-features/custom-app
type pageProps = {.};

module PageComponent = {
  type t = React.component(pageProps);
};

type props = {
  [@bs.as "Component"]
  component: PageComponent.t,
  pageProps,
};

// We are not using `[@react.component]` since we will never
// use <App/> within our Reason code. It's only used within `pages/_app.js`
let make = (props: props): React.element => {
  let {component, pageProps} = props;

  let router = Next.Router.useRouter();

  let content = React.createElement(component, pageProps);

  <div>
    <Next.Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title> "Lyon Mountain Trail"->React.string </title>
    </Next.Head>
    <HeaderMobile />
    <Header />
    {switch (router.route) {
     | "/examples" =>
       <Layout>
         <h1 className="font-bold"> "Examples Section"->React.string </h1>
         <div> content </div>
       </Layout>
     | _ => <Layout> content </Layout>
     }}
  </div>;
};
