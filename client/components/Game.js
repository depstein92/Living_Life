import React, { Component} from 'react';
import DifficultyButtons from './DifficultyButtons';
import Header from './Header';
import GamePanel from './GamePanel';

class Game extends Component{
  // constructor(props){
  //   super(props);
  // }

 render(){
   return(
     <div>
      <Header />
      <GamePanel />
     </div>
   )
 }

}

export default Game;
