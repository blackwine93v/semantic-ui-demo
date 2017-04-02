import Head from 'next/head';
import {Container, Grid, Segment, Header, Icon, Button} from 'semantic-ui-react';
import {Component} from 'react';
export default class extends Component{
  scrollDown(){
    $("body").animate({scrollTop:350},'300');
  }

  render(){
    return <div id="homebanner">
      <Head>
        <link rel="stylesheet" href="static/css/homebanner.css"></link>
      </Head>
      <Grid padded className="">
        <Grid.Row centered columns="10">
          <Segment basic className="segment-content">
            <Header inverted as="h1" textAlign="center" icon>
              <Icon name="heart"/>
              Semantic UI Demo
              <Header.Subheader content="User Interface is the language of the web"></Header.Subheader>
            </Header>
          </Segment>
        </Grid.Row>
        <Grid.Row centered>
          <Icon onClick={this.scrollDown} size="huge"  name="angle double down"/>
        </Grid.Row>
      </Grid>  
    </div>
  }
}