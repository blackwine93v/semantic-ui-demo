import Head from 'next/head';
import MyHeader from '../components/Header.js';
import MyFooter from '../components/Footer.js';
import Home from '../containers/Home.js';

// TODO: Update <Search> usage after its will be implemented

export default () => {
  return (
    <div id="main">
      <Head>
        <title>Semantic UI Demo</title>
      </Head>
      <MyHeader/>
      Install
      <MyFooter/>
    </div>
  )
}