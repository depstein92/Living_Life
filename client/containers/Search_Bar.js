import React, { Component } from 'react';
import { connect } from 'react-redux';
import getWordsSimilar from '../actions/index';
import { bindActionCreators } from 'redux';



class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: '',
      message: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event){
    event.preventDefault();
    this.renderMessage();
  }

  renderMessage(input = this.state.term){

    let wordArr = this.props.similiarWords.map(obj => {
      return obj.word;
    })
    let wordArray = wordArr.includes(input);

    let getWord = (word, callback) => {
        let call = (word) => { callback(word)};
        let a = setTimeout(call, 1000);
       }

    let getValue = getWord(wordArray, () => {

         if(wordArray === undefined){
           this.setState({ message: '...'})
         }
         if(wordArray === true){
           this.setState({ message: "Correct answer" })
         }
         if(wordArray === false){
           this.setState({ message: "Incorrect answer"})
         }

      });
       return getValue;
    }



  componentWillMount(state){
    this.props.getWordsSimilar(this.props.randomWord);
  }


  render(){

    return (
      <div>
      <form onSubmit={this.onFormSubmit}
       className="input-group">
          <input
           style={{
             width: "550px",
             position: "relative",
             left: "270px",
             top: "45px",
           }}
           placeholder="Enter Word relating to question"
           className="form-control"
           value={ this.state.term }
           onChange={this.onInputChange} />
          <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"
           style={{
             position: "relative",
             right: "340px",
             top: "45px"
           }}>
          Submit
          </button>
          </span>
      </form>
      <div style={{
        height: "50px",
        width: "600px",
        borderStyle: "solid",
        textAlign: "center",
        borderRadius: "100px",
        left: "241px",
        position: "relative",
        top: "50px"}}>
        {this.state.message}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){

  return {
    similiarWords: state.similiarWords
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getWordsSimilar: getWordsSimilar }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
