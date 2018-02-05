import React, { Component} from 'react';
import DifficultyButtons from './DifficultyButtons';
import { Container, Form, Message } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/main.scss';
import randomLetter from 'random-letter';
import randomWords from 'random-words';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


class GamePanel extends Component{

  // constructor(props){
  //   super(props);
  //   this.state = { content: ''};
  // }
  // onSubmit(, likes) {
  //     this.props.mutate({
  //       variables: { id },
  //       optimisticResponse: {
  //         __typename: 'Mutation',
  //         likeLyric: {
  //           id,
  //           __typename: 'LyricType',
  //           likes: likes + 1
  //         }
  //       }
  //     });
  //   }

 render(){

const arrOfNum = Array.from({length: 5}, () => Math.floor(Math.random() * 5));
const arrOfWords = Array.from({length: 13}, () => randomWords());
const arrOfLet = Array.from({length: 2}, () => randomLetter());

const uniqueNumArr = arrOfNum.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
});



const questionArr = [
  <span>`words with a meaning similar to ${arrOfWords[0]}`</span>,
  <span>`words that sound like ${arrOfWords[3]}`</span>,
  <span>`words that are spelled similarly to ${arrOfWords[4]}`</span>,
  <span>`words that rhyme with ${arrOfWords[5]}`</span>,
  <span>`adjectives that are often used to describe ${arrOfWords[8]}`</span>,
  <span>`nouns that are often described by the adjective ${arrOfWords[11]}`</span>,
  <span>`words that are triggered by (strongly associated with) the word ${arrOfWords[12]}`</span>
];

   return(
     <div className="carouselFrame">
     <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={12}
        totalSlides={3}>
      <Slider>
         <Slide index={0}>
           <Form className="formFromGamePanel">
            <Form.Group className="formGroupFromGamePanel">
              <Form.Input
               placeholder='Answer'
               className="inputFromGamePanel" />
            </Form.Group>
           </Form>
           <li className="question">{questionArr[uniqueNumArr[1]]}</li>
         </Slide>
         <Slide index={1}>
         <Form className="formFromGamePanel">
          <Form.Group className="formGroupFromGamePanel">
            <Form.Input
             placeholder='Answer'
             className="inputFromGamePanel" />
          </Form.Group>
         </Form>
         <li className="question">{questionArr[uniqueNumArr[0]]}</li>
         </Slide>
         <Slide index={2}>
         <Form className="formFromGamePanel">
          <Form.Group className="formGroupFromGamePanel">
            <Form.Input
             placeholder='Answer'
             className="inputFromGamePanel" />
          </Form.Group>
         </Form>
         <li className="question">{questionArr[uniqueNumArr[2]]}</li>
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
