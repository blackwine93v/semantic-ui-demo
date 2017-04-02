import {Component} from 'react';
import {Image, Container, Grid, Header, Divider, Segment, Accordion, Icon, Button, List, Label} from 'semantic-ui-react';


export default class extends Component {

	render(){
			console.log(this.props)
		if(!this.props) return;
		return <Header as="h1">{this.props.name}
                      <Divider hidden/>
		        <Header.Subheader>
		          {this.props.elementData.map((element)=>(
		             <Header as="h3" >
                            <Header.Content id={element.name}>{element.name}</Header.Content>
  		              <Header.Subheader>	
  		                <Segment>
  		                  {element.description}
  		                  <Divider/>
  		                  <Accordion>
  		                  	<Accordion.Title as="h1">{element.props.length?<div><Icon name='dropdown' />Props</div> :null}</Accordion.Title>
  		                  	<Accordion.Content>
  						{element.props.map((prop)=>(
  			                    <List divided selection>
  			                      <List.Item>
  			                        <Label color='red' horizontal>{prop.name}</Label>
  			                        {prop.description}
  			                      </List.Item>
  			                    </List>
  			                  ))}
  		                  	</Accordion.Content>
  		            	     </Accordion>
  		                  
  		                  
  		                  <Button data-tooltip="View more detail at Semantic UI" floated="right" compact color="black" as="a" target="_blank" href={element.link}>See more</Button>
  		                  </Segment>
                              </Header.Subheader>
		              </Header>
		          ))}
		        </Header.Subheader>
		      </Header>
	}

	

}

