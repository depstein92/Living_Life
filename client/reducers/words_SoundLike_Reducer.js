import { FETCH_WORD_SOUND_LIKE } from '../actions/getWordsSoundLikeAction';

export default function FetchWordsSpelledLike(state=[], action){

  switch(action.type){
    case 'FETCH_WORD_SOUND_LIKE':
     let newArray = state.concat(action.payload.data);
      return newArray;
    /*[action.payload.data /*...state];*/
    break;
    default:
      return state
  }
    return state;
}
