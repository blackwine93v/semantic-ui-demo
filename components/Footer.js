import {Divider, Segment, Grid, List, Container} from 'semantic-ui-react';
export default ()=>(
  <Divider id="footer" as={Grid} clearing hidden>
    <Grid.Row><Divider hidden/></Grid.Row>
    <Grid.Row  stretched color="black">
      <Segment  as={Container}  padded inverted>
        <List inverted items={
          [
            {content:"About", href:"#"},
            {content:"Contact", href:"#"},
            {content:"Semantic UI", href:"#"},
            {content:"Semantic UI React", href:"#"},
            {content:"Github", href:"#"}
          ]
        } />
      </Segment>
    </Grid.Row>
  </Divider>
);