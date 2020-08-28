open TW;

let completText = {j|Victime de notre succès, nous sommes au complet pour le moment et stoppons les adhésions pour la saison 2019-2020|j};
let rejoindreText = {j|Envie de nous rejoindre ?|j};

[@react.component]
let make = () => {
  <Layout>
    <Card title={j|Adhésion|j}>
      <Grid gap=Gap6>
        <Text fontSize=Text2xl align=TextCenter color=TextRed600>
          {React.string(completText)}
        </Text>
        <Text fontSize=Text2xl align=TextCenter color=TextBlue600>
          {React.string(rejoindreText)}
        </Text>
        <Image
          alt="AG"
          src="http://lyonmountaintrail.free.fr/wp-content/uploads/2016/01/Capture-d%E2%80%99%C3%A9cran-2018-01-21-%C3%A0-15.06.37-1.png"
        />
        <Text>
          <p>
            <Text> {React.string({j|La dimension |j})} </Text>
            <Text color=TextBlue600> {React.string({j|montagne |j})} </Text>
            <Text>
              {React.string(
                 {j|étant importante à LMT, nous cherchons donc des gens qui seront |j},
               )}
            </Text>
            <Text color=TextBlue600>
              {React.string({j|enthousiastes |j})}
            </Text>
            <Text>
              {React.string({j|à l‘idée de pratiquer aussi du |j})}
            </Text>
            <Text color=TextBlue600>
              {React.string({j|Trail en montagne|j})}
            </Text>
            <Text>
              {React.string({j|. Peu importe le niveau même si une  |j})}
            </Text>
            <Text color=TextBlue600>
              {React.string({j|expérience en trail et des sports outdoor |j})}
            </Text>
            <Text> {React.string({j|st tout de même |j})} </Text>
            <Text color=TextBlue600>
              {React.string({j|recommandée |j})}
            </Text>
            <Text>
              {React.string({j| par soucis d’homogénéité.|j})}
            </Text>
          </p>
          <p>
            <Text>
              {React.string(
                 {j|Par ailleurs, Lyon Mountain Trail a vocation à rester à |j},
               )}
            </Text>
            <Text color=TextBlue600>
              {React.string({j|taille humaine |j})}
            </Text>
            <Text> {React.string({j|pour garder un |j})} </Text>
            <Text color=TextBlue600>
              {React.string({j|esprit convivial |j})}
            </Text>
            <Text>
              {React.string(
                 {j| . Pour cela, le bureau examine chaque candidature.|j},
               )}
            </Text>
          </p>
          <p>
            <Text> {React.string({j|Vous aimez, comme nous|j})} </Text>
            <Text color=TextBlue600>
              {React.string(
                 {j| pratiquer le trail et les sports outdoor sous quelque forme que ce soit|j},
               )}
            </Text>
            <Text>
              {React.string(
                 {j|(trail, randonnée, ski alpin et fond, VTT/vélo, Raid multisports) ? Vous êtes motivés pour nous rejoindre et partager ensemble nos passions ?|j},
               )}
            </Text>
          </p>
          <p>
            {React.string(
               {j|Nous sommes complets pour la saison 2019/2020 mais n’hésitez pas à nous envoyer un mail de présentation/motivation, des places peuvent se libérer à tout moment : lyonmountaintrail@gmail.com.|j},
             )}
          </p>
        </Text>
      </Grid>
    </Card>
  </Layout>;
};

let default = make;
