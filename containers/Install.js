import Head from 'next/head';
import {Component} from 'react';
import {Image, Container, Grid, Header, Divider, Segment, Button, Icon} from 'semantic-ui-react';

export default class extends React.Component {
  
  render() {
    const datas = [
    {
      title:"JavaScript",
      descriptions:[
      "Installing Semantic UI React provides the JavaScript for your components. You'll also need to include a stylesheet to provide the styling for your components. This is the typical pattern for component frameworks, such as Semantic UI or Bootstrap.",
      "The method you choose to include the stylesheet in your project will depend on the level of customisation you require."
      ],
      scripts:[
        {
          script:"$ npm install semantic-ui-react --save",
          description:"The Semantic UI React package can be installed via NPM:"
        }
      ]
    },
    {
      title:"CSS",
      descriptions:[
        "Install the full Semantic UI package.",
        "Semantic UI includes Gulp build tools so your project can preserve its own theme changes, allowing you to customise the style variables.",
      ],
      scripts:[
        {
          script:"$ npm install semantic-ui --save-dev",
          description:""
        },
        {
          script:"import '../semantic/dist/semantic.min.css';",
          description:"After building the project with Gulp, you'll need to include the minified CSS file in your index.js file:"
        }
      ]
    },
    {
      title:"CDN Releases",
      descriptions:[],
      scripts:[
        {
          description:"CSS",
          script:'<link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.10/semantic.min.css">'
        },
        {
          description:"JavaScript",
          script:'<script src="https://cdn.jsdelivr.net/semantic-ui/2.2.10/semantic.min.js"></script>'
        }
      ]
    }
  ];
    return <Container id="install">
      <Divider hidden/><Divider hidden/><Divider hidden/>
      <Image src="static/images/devices.png"/>
      <Header textAlign="center" as="h1">Install</Header>

      {datas.map((data)=>(
        <Header as="h2">
        {data.title}
        <Divider hidden/>
        <Header.Subheader>
          {data.descriptions.map((item)=>(<p>{item}</p>))}
          {data.scripts.map((script)=>(<div><p>{script.description}</p><Segment><code>{script.script}</code></Segment><Divider hidden/></div>))}
        </Header.Subheader>
        <Divider/>
      </Header>
      ))}
      <Grid.Row centered padded as={Grid}>
        <Button animated primary as="a" href="https://semantic-ui.com/introduction/advanced-usage.html" target="_blank">
          <Button.Content visible>See more from Semantic-UI</Button.Content>
          <Button.Content hidden>Advanced<Icon name="arrow right"></Icon></Button.Content>
        </Button>
      </Grid.Row>
      
    </Container>;
  }
}