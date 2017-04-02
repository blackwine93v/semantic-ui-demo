import Head from 'next/head';
import {Component} from 'react';
import {Image, Container, Header, Divider, Grid, Button, Segment} from 'semantic-ui-react';


export default class extends React.Component {
  
  render() {
    return <div  id="usage">
    <Divider hidden/><Divider hidden/><Divider hidden/>
    <Container as={Grid} >
      <Grid.Row centered divided >
        <Button.Group size='large' fluid>
          <Button basic color="green">Bootstrap</Button>
          <Button.Or text="and"/>
          <Button basic color="purple">Semantic UI</Button>
        </Button.Group>
      </Grid.Row>
      <Grid.Row>
        <Grid.Row as={Header}>FRAMEWORK COMPONENTS</Grid.Row>
        <Grid.Row>
          <Grid columns="2" stackable >
            <Grid.Column>
              <Button  color="green" attached="top" content="Bootstrap"/>
              <Segment attached>
                Bootstrap has CSS, JavaScript, and font (or icon sets) files. Font components are not necessary and may be replaced with a set of icons, like Font Awesome.
                <Image src="static/images/bootstrap-str.png"/>
                <b>Pros of this structure:</b> Simpler structure: less time to start or include a stand-alone solution<br/>
                <p>As of July 30, 2016, Bootstrap has moved to using LESS configuration of components, which means that you can now select components you need rather than having to include all of them in your package, which can adversely affect your app’s load time</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Button  color="purple" attached="top" content="Semantic UI"/>
              <Segment attached>
                <p>The structure of Semantic UI components is much more difficult than Bootstrap, as is the installation process. While Bootstrap provides only one basic theme, Semantic UI includes more than 20+ themes in its basic package, in addition to CSS, JS, and fonts files. It also includes Composer, Bower, and Gulp config files.</p>
                <Image src="static/images/pasted-image-0-2.png"/>
              </Segment>
            </Grid.Column>  
          </Grid>
        </Grid.Row>
      </Grid.Row>

      <Grid.Row>
        <Grid.Row as={Header}>SPEED OF CODING</Grid.Row>
        <Grid.Row>
          <Grid columns="2" stackable >
            <Grid.Column>
              <Button  color="green" attached="top" content="Bootstrap"/>
              <Segment attached>
                This popular front-end framework has some classes with names that are easily misunderstood, but you’ll quickly get used to them. Here’s a regular string that can be found inside any source code of a Bootstrap-based project:
                <Segment as="h5"><code>{'<button class="ui-btn-right ui-btn ui-btn-b ui-btn-inline ui-mini ui-corner-all ui-btn-icon-right ui-icon-check">Save</button>'}</code></Segment>
                <p>As you can see, the names of CSS classes are very friendly for humans to read.</p>
                <p>Bootstrap is more friendly for a junior or new front-end developer. Most features can be used without even a basic knowledge of JavaScript.</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Button  color="purple" attached="top" content="Semantic UI"/>
              <Segment attached>
                <p>Semantic-UI’s CSS manages to be even more user-friendly than Bootstrap, with CSS that’s easier for developers to read by resembling a more semantic language—hence its name. Here are a few samples:</p>
                <Segment><code>{'<div class="ui stackable inverted divided equal height stackable grid">'}</code></Segment>
                <p>JavaScript is a necessary skill to have if you want to develop website interfaces using Semantic UI. (This will be difficult for junior developers; any mid- and senior-level front-end developers should be well versed in JS).</p>
                <p>Almost all features of Semantic UI will not work without JS scripts: modal window, dropdown, sliders etc.</p>
              </Segment>
            </Grid.Column>  
          </Grid>
        </Grid.Row>
      </Grid.Row>

      <Grid.Row>
        <Grid.Row as={Header}>DESIGN AND VISUAL EFFECTS</Grid.Row>
        <Grid.Row>
          <Grid columns="2" stackable >
            <Grid.Column>
              <Button  color="green" attached="top" content="Bootstrap"/>
              <Segment attached>
                <p>Honestly, design is not the most advanced aspect of Bootstrap. The newest version, Bootstrap 4 (which is still in alpha version as of August 1, 2016), will try to solve this issue, but right now, standard elements of Bootstrap are not its strongest suit.</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Button  color="purple" attached="top" content="Semantic UI"/>
              <Segment attached>
                <p>This framework contains several themes. You can even imitate a Bootstrap design or make a full copy of a GitHub design</p>
              </Segment>
            </Grid.Column>  
          </Grid>
        </Grid.Row>
      </Grid.Row>

      <Grid.Row>
        <Grid.Row as={Header}>CONCLUSION</Grid.Row>
        <Grid.Row>
          I love both frameworks. Over the last few years, they’ve both made a huge step up in terms of features and technological compatibility (Gulp, Bower, Composer, NPM, etc.). While the design features of Bootstrap aren’t as strong as Semantic UI’s, Bootstrap doesn’t require JS skills. On the other hand, Semantic UI looks more modern, but you definitely need to know JS. If you’re a junior front-end developer, you’ll like Bootstrap; if you’re an advanced developer, you’ll most likely prefer Semantic UI.
        </Grid.Row>
      </Grid.Row>
    </Container>
    </div>
  }
}