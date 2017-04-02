import Head from 'next/head';
import MyHeader from '../components/Header.js';
import MyFooter from '../components/Footer.js';
import Introduction from '../containers/Introduction.js';


export default () => {
  return (
    <div id="main">
      <Head>
        <title>Introduction</title>
      </Head>
      <MyHeader/>
      <Introduction/>
      <MyFooter/>
    </div>
  )
}