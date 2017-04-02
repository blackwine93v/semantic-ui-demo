import Head from 'next/head';
import MyHeader from '../components/Header.js';
import MyFooter from '../components/Footer.js';
import Comparing from '../containers/Comparing.js';

// TODO: Update <Search> usage after its will be implemented

export default () => {
  return (
    <div id="main">
      <Head>
        <title>Semantic UI & Bootstrap</title>
      </Head>
      <MyHeader/>
      <Comparing/>
      <MyFooter/>
    </div>
  )
}