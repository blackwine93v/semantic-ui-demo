import {Divider, Segment, Grid, List} from 'semantic-ui-react';
export default ()=>(
  <Grid>
    <Grid.Row><Divider hidden/></Grid.Row>
    <Grid.Row stretched color="black">
      <Segment padded inverted>
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
  </Grid>
);