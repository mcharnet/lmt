open TW;

[@react.component]
let make = (~title, ~images, ~description, ~rendezVous=?) => {
  <div>
    <Text fontSize=Text4xl> {React.string(title)} </Text>
    <Grid cols=GridCols2 gap=Gap4 padding=P4>
      <Cell col=ColSpan2> <p> {React.string(description)} </p> </Cell>
      {List.map(
         ({alt, src}: Image.image) => {<Image height=H64 alt src />},
         images,
       )
       |> Array.of_list
       |> React.array}
    </Grid>
    {switch (rendezVous) {
     | Some(rendezVous) => <p> {React.string(rendezVous)} </p>
     | None => React.null
     }}
  </div>;
};
