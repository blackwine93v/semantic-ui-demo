import Head from 'next/head';
import {Component} from 'react';
import {Image, Container, Grid, Header, Divider, Segment} from 'semantic-ui-react';

export default class extends React.Component {
  
  render() {
    const datas = [
    {
      title:"Concise HTML",
      descriptions:[
      "Semantic UI treats words and classes as exchangeable concepts.",
      "Classes use syntax from natural languages like noun/modifier relationships, word order, and plurality to link concepts intuitively."
      ]
    },
    {
      title:"Intuitive Javascript",
      descriptions:["Semantic uses simple phrases called behaviors that trigger functionality."]
    },
    {
      title:"Unbelievable Theming",
      descriptions:["Semantic comes equipped with an intuitive inheritance system and high level theming variables that let you have complete design freedom.",
        "Develop your UI once, then deploy with the same code everywhere."
      ]
    },
    {
      title:"Unbelievable Breadth",
      descriptions:["Definitions aren't limited to just buttons on a page. Semantic's components allow several distinct types of definitions: elements, collections, views, modules and behaviors which cover the gamut of interface design."]
    },
    {
      title:"Responsively Designed",
      descriptions:["Semantic is designed completely with em making responsive sizing a breeze.",
      "Design variations built into elements allow you to make the choice how content adjusts for tablet and mobile."
      ]
    },
    {
      title:"Partners with Libraries You Love",
      descriptions:["Semantic has integrations with React, Angular, Meteor, Ember and many other frameworks to help organize your UI layer alongside your application logic."]
    }
  ];
    return <Container id="introduction">
      <Divider hidden/>
      <Image src="static/images/devices.png"/>
      <Header textAlign="center" as="h1">Introduction</Header>

      {datas.map((data)=>(
        <Header as="h2">
        {data.title}
        <Header.Subheader>
          {data.descriptions.map((item)=>(<p>{item}</p>))}
        </Header.Subheader>
        <Divider/>
      </Header>
      ))}
    </Container>;
  }
}