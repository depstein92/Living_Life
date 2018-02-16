import { FETCH_WORD_SIMILIAR_TOO } from '../actions/index.js';

export default function FetchWordsSimiliar(state=[], action){

  switch(action.type){
    case 'FETCH_WORD_SIMILIAR_TOO':
     let newArray = state.concat(action.payload.data);
      return newArray;
    /*[action.payload.data /*...state];*/
    break;
    default:
      return state
  }
    return state;
}
