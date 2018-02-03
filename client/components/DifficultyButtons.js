import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Segment, Divider } from 'semantic-ui-react'
import '../styles/main.scss'

class DifficultyButtons extends Component{
  // constructor(props){
  //   super(props);
  // }

 render(){
   return(
    <div>
     <Grid columns={3} relaxed>
       <Grid.Column>
       <Link to="/Game" activeClassName="active">
        <Segment raised>
         <h3>Easy Game</h3>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        </Segment>
        </Link>
      </Grid.Column>
       <Divider vertical>Or</Divider>
      <Grid.Column>
        <Segment raised>
         <h3>Medium Game</h3>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        </Segment>
      </Grid.Column>
       <Divider vertical>And</Divider>
       <Grid.Column>
        <Segment raised>
          <h3>Hard Game</h3>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        </Segment>
      </Grid.Column>
     </Grid>
  </div>)
 }

}

export default DifficultyButtons;
