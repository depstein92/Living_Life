import React, { Component} from 'react';
import DifficultyButtons from './DifficultyButtons';
import Header from './Header';

class DashBoard extends Component{
  // constructor(props){
  //   super(props);
  // }

 render(){
   return(
     <div>
      <Header />
      <h1>DashBoard</h1>
      <DifficultyButtons />
     </div>
   )
 }

}

export default DashBoard;
