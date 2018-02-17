import React, { Component } from 'react';
import SearchWordsSimiliar from './SearchWordsSimiliar';
import SearchWordsSpelledLike from './SearchWordsSoundLike';
import randomWords from 'random-words';

const randomWord = randomWords(1)[0];


class WordsSimiliarSlide extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};

  }

  render(){

    return (
    <div className="game_container">
    <SearchWordsSimiliar randomWord={ randomWord } />
     <div className="interior_game_container"
     style={{
       width: "500px",
       borderStyle: "solid",
       height: "300px",
       position: "relative",
       left: "285px",
       top: "50px",
       borderRadius:"75px"
       }}>
       <div style={{ width: "inherit", textAlign: "center"}}>
       Words that are similiar too: { randomWord }
       </div>

    </div>
   </div>
    )
  }
}

export default WordsSimiliarSlide;
