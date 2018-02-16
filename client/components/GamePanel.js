import React, { Component} from 'react';
import DifficultyButtons from './DifficultyButtons';
import { Container, Form, Message } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/main.scss';
import randomLetter from 'random-letter';
import randomWords from 'random-words';
import GameSlide from '../containers/Game_Slide';



class GamePanel extends Component{

  // constructor(props){
  //   super(props);
  //   this.state = { content: ''};
  // }

// const questionArr = [
//   <span>`words with a meaning similar to ${arrOfWords[0]}`</span>,
//   <span>`words that sound like ${arrOfWords[3]}`</span>,
//   <span>`words that are spelled similarly to ${arrOfWords[4]}`</span>,
//   <span>`words that rhyme with ${arrOfWords[5]}`</span>,
//   <span>`adjectives that are often used to describe ${arrOfWords[6]}`</span>,
//   <span>`nouns that are often described by the adjective ${arrOfWords[7]}`</span>,
//   <span>`words that are triggered by (strongly associated with) the word ${arrOfWords[8]}`</span>
// ];
render(){
   return(
     <div className="carouselFrame">
     <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={12}
        totalSlides={3}>
      <Slider>
         <Slide index={0}>
           <GameSlide />
         </Slide>
         <Slide index={1}>
           <GameSlide />
         </Slide>
         <Slide index={2}>
           <GameSlide />
         </Slide>
       </Slider>
       <ButtonBack className="backButtonCarousel">
        Back
       </ButtonBack>
       <ButtonNext className="forwardButtonCarousel">
       Next
       </ButtonNext>
      </CarouselProvider>
      </div>
   )
 }

}

export default GamePanel;
