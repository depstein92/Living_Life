import { FETCH_WORD_SPELLED_LIKE } from '../actions/getWordsSpelledLikeAction';

export default function FetchWordsSpelledLike(state=[], action){

  switch(action.type){
    case 'FETCH_WORD_SPELLED_LIKE':
     let newArray = state.concat(action.payload.data);
      return newArray;
    /*[action.payload.data /*...state];*/
    break;
    default:
      return state
  }
    return state;
}
