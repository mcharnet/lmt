open TW;

[@react.component]
let make = () => {
  <Card title={j|Entraînements / Sorties ?|j}>
    <Grid gap=Gap4>
      {React.string(
         {j| Une semaine à Lyon Mountain Trail s’organise de la façon suivante :|j},
       )}
      <Mardi />
      <Divider />
      <Jeudi />
      <Divider />
      <WE />
    </Grid>
  </Card>;
};

let default = make;
