import Head from 'next/head';
import {Segment, Menu, Header, Container} from 'semantic-ui-react'

export default ()=>(
	<div id="header">
    <Head>
      <link rel="stylesheet" href="static/semantic.min.css"></link>
      <link rel="stylesheet" href="static/header.css"></link>
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="static/semantic.min.js"></script>
    </Head>

   {/*} <Container>
      <Menu className="">
        <Menu.Header><Header inverted>Menu</Header></Menu.Header>
      </Menu>
    </Container>*/}
    
  </div>
)