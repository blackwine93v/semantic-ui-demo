import Head from 'next/head';
import React from 'react'
import Link from 'next/link';
import Router from 'next/router';
import { Dropdown, Icon, Menu, Segment, Button, Form} from 'semantic-ui-react'
import Header from '../components/Header.js';

// TODO: Update <Search> usage after its will be implemented

const MenuExampleAttached = () => {
  return (
    <div>
      <Head>
          <link rel="stylesheet" href="static/semantic.min.css"></link>
          <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
          <script src="static/semantic.min.js"></script>
          <title>About</title>
        </Head>
  		<Header/>
        <div>Link:  <Link href="/index" ><a>Index</a></Link></div>
        <div>Router: <a onClick={()=>Router.push('/index', '/')}>Index</a></div>
    </div>
  )
}

export default MenuExampleAttached
