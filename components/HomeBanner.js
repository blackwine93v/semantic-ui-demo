import Head from 'next/head';
import {Container, Grid, Segment, Header} from 'semantic-ui-react';
export default ()=>(
  <div id="homebanner">
    <Head>
      <link rel="stylesheet" href="static/homebanner.css"></link>
    </Head>
    <Grid padded centered columns="10">
      <Segment basic>
        <Header inverted as="h1" textAlign="center" content="Semantic UI Demo"></Header>
      </Segment>
    </Grid>
  </div>
)