import React, { Component } from 'react';
import { Button, Form, Segment, Container } from 'semantic-ui-react';
import '../styles/main.scss'
import CardsLanding from './CardsLanding';



class InfoContainer extends Component{
  constructor(props){
    super(props);
  }

  render(){
     return(

    <div>
      <Container textAlign="center" className="infoContainer">
          <h1 className="titleHeader">Increase Word Acuity With WordGenius</h1>
          <div className="paragraph">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <p>nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
            <p>esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident,</p>
            <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </Container>
      <CardsLanding />
    </div>

     )
  }
}

export default InfoContainer;
