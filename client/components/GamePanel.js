import React, { Component} from 'react';
import DifficultyButtons from './DifficultyButtons';
import { Container, Form, Message } from 'semantic-ui-react';
import '../styles/main.scss'


class GamePanel extends Component{
  // constructor(props){
  //   super(props);
  // }

 render(){
   return(
     <Container className="containerFromGamePanel">
      <Form className="formFromGamePanel">
       <Form.Group className="formGroupFromGamePanel">
        <Form.Input
        placeholder='Answer'
        className="inputFromGamePanel" />
       </Form.Group>
      </Form>

     </Container>
   )
 }

}

export default GamePanel;
