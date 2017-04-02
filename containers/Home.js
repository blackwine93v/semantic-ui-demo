import Head from 'next/head';
import React from 'react'
import Link from 'next/link';
import Router from 'next/router'
import {Container, Grid, Header, List, Icon, Image, Divider, Button} from 'semantic-ui-react'
import HomeBanner from '../components/HomeBanner.js';

// TODO: Update <Search> usage after its will be implemented

const Home = () => {
  return (
    <div id="home">
      <Head>
        <link rel="stylesheet" href="static/css/home.css"></link>
      </Head>
      <div><HomeBanner/></div>
      <Container>
        <Divider hidden/>
        <Image fluid src="static/images/devices.png"/>
        <Header as="h2" textAlign="center">
          Design Beautiful Websites Quicker
          <Header.Subheader>
            Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.
          </Header.Subheader>
        </Header>
        <Grid>
          {/*<div className="computer only two column row"><Link href="/about" ><a>Absoaaauts</a></Link></div>
          <div>Router: <a onClick={()=>Router.push('/about', '/')}>Abouts</a></div>*/}
          
          <Grid.Row  className="getstarted-contain">
            <Container text>
              <Header as="h1">Getting Started</Header> 
                <List relaxed animated verticalAlign='middle'>
                  <List.Item>
                    <Icon size="huge" name="wpforms" />
                    <List.Content>
                      <List.Header data-tooltip="HTML, JavaScript, Intergrations, themes,.."><Link href="/introduction"><a>Introduction</a></Link></List.Header>
                    </List.Content>
                  </List.Item>
                  <Divider/>
                  <List.Item>
                    <Icon  size="huge" name="setting" />
                    <List.Content>
                      <List.Header data-tooltip="How to Intergrate with React?"><Link href="/install"><a>Install</a></Link></List.Header>
                    </List.Content>
                  </List.Item>
                  <Divider/>
                  <List.Item>
                    <Icon  size="huge" name="book" />
                    <List.Content>
                      <List.Header data-tooltip="How to use Semantic UI?"><Link href="/usage"><a>Usage</a></Link></List.Header>
                    </List.Content>
                  </List.Item>
                  <Divider/>
                  <List.Item>
                    <Icon  size="huge" name="flag" />
                    <List.Content>
                      <List.Header data-tooltip="Do you prefer Semantic UI or Bootstrap?"><Link href="/comparing"><a>Semantic UI & Bootstrap</a></Link></List.Header>
                    </List.Content>
                  </List.Item>
                </List>
            </Container>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default Home;
