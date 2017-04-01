import Head from 'next/head';
import Link from 'next/link';
import {Menu, Header, Container, Icon, Dropdown} from 'semantic-ui-react'

var langOptions = [
  {
    text: 'EN',
    value: 'EN',
    flag:"us"
  },
  {
    text: 'VN',
    value: 'VN',
    flag:"vn"
  },
  {
    text: 'JP',
    value: 'JP',
    flag:"jp"
  }
]

export default ()=>(
	<div id="header">
    <Head>
      <link rel="stylesheet" href="static/css/semantic.min.css"></link>
      <link rel="stylesheet" href="static/css/header.css"></link>
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="static/semantic.min.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <Menu fixed="top" borderless icon>
      <Menu.Item><Link href="/"><a><Icon size="big" name="home"></Icon></a></Link></Menu.Item>
      <Menu.Item position='right'><Dropdown placeholder='EN' fluid selection options={langOptions} /></Menu.Item>
    </Menu>
  </div>
)