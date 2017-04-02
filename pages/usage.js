import Head from 'next/head';
import MyHeader from '../components/Header.js';
import MyFooter from '../components/Footer.js';
import Usage from '../containers/Usage.js';

// TODO: Update <Search> usage after its will be implemented

export default () => {
  return (
    <div id="main">
      <Head>
        <title>Usage</title>
      </Head>
      <MyHeader/>
      <Usage/>
      <MyFooter/>
    </div>
  )
}