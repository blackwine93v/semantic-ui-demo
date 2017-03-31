import Head from 'next/head';
import {Container, Grid, Segment, Header, Icon} from 'semantic-ui-react';
export default ()=>(
  <div id="homebanner">
    <Head>
      <link rel="stylesheet" href="static/homebanner.css"></link>
    </Head>
    <Grid padded centered columns="10">
      <Segment basic className="segment-content">
        <Header inverted as="h1" textAlign="center" icon>
          <Icon name="heart"/>
          Semantic UI Demo
          <Header.Subheader content="User Interface is the language of the web"></Header.Subheader>
        </Header>
      </Segment>
      <Header className="huge" icon="angle double down"></Header>
    </Grid>
  </div>
)