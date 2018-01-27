import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import '../styles/main.scss'
//import Anime from 'anime-react';

class CardsLanding extends Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
      <div className="cardsLandingBackground">
       <Card className="cardsLandingLeft">
       <Image src="../assets/elliot.jpg" />
        <Card.Content>
          <Card.Header>
            Kim Epstein
          </Card.Header>
          <Card.Meta>
            <span className="dateJoined">
            Joined in 2017
            </span>
          </Card.Meta>
          <Card.Description className="description">
            Nurse in Carey, NC
          </Card.Description>
          <Card.Description className="description">
            Amateur Lexicographer at Heart!
          </Card.Description>
        </Card.Content>
       </Card>
       <Card className="cardsLandingCenter">
       <Image src="../assets/elliot.jpg" />
        <Card.Content>
          <Card.Header>
            Tristan Bailey
          </Card.Header>
          <Card.Meta>
            <span className="dateJoined">
            Joined in 2018
            </span>
          </Card.Meta>
          <Card.Description className="description">
            Police Officer in NY
          </Card.Description>
          <Card.Description className="description">
            Loves Reading in Spare Time,
            had to join!
          </Card.Description>
        </Card.Content>
       </Card>
       <Card className="cardsLandingRight">
       <Image src="../assets/matthew.jpg" />
        <Card.Content>
          <Card.Header>
            Rick Nilon
          </Card.Header>
          <Card.Meta>
            <span className="dateJoined">
            Joined in 2018
            </span>
          </Card.Meta>
          <Card.Description className="description">
            Full Stack Rails Developer
          </Card.Description>
          <Card.Description className="description">
            I love the puzzles on this site!
          </Card.Description>
        </Card.Content>
       </Card>
     </div>
    )
  }
}

export default CardsLanding;
