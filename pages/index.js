import Head from 'next/head';
import React from 'react'
import Link from 'next/link';
import Router from 'next/router'
import {Container, Grid} from 'semantic-ui-react'
import Header from '../components/Header.js';
import HomeBanner from '../components/HomeBanner.js';

// TODO: Update <Search> usage after its will be implemented

const Home = () => {
  return (
    <div>
      <Head>
          <link rel="stylesheet" href="static/index.css"></link>
          <title>Homepage</title>
        </Head>
        <Header/>
        <div className="fluid"><HomeBanner/></div>
        
        <Container>
          <Grid>
            <div className="computer only two column row"><Link href="/about" ><a>Abouts</a></Link></div>
            <div>Router: <a onClick={()=>Router.push('/about', '/')}>Abouts</a></div>
          </Grid>
        </Container>

        
     </div>
  )
}

export default Home
