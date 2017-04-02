import Head from 'next/head';
import {Component} from 'react';
import {Image, Container, Header, Divider} from 'semantic-ui-react';
import elementData from '../db/elements.json';
import colectionData from '../db/colections.json';
import viewsData from '../db/views.json';
import modulesData from '../db/modules.json';
import addonsData from '../db/addons.json';
import ListElement from '../components/ListElement.js';

export default class extends React.Component {
  
  render() {
    return <Container id="usage">
      <Divider hidden/><Divider hidden/><Divider hidden/>
      <Image src="static/images/devices.png"/>
      <Header textAlign="center" as="h1">Usage</Header>

      <ListElement name="Elements" elementData={elementData}/>
      <ListElement name="Colections" elementData={colectionData}/>
      <ListElement name="Views" elementData={viewsData}/>
      <ListElement name="Modules" elementData={modulesData}/>
      <ListElement name="Addons" elementData={addonsData}/>
    </Container>;
  }
}