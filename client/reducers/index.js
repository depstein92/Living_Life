import { combineReducers } from 'redux';
import FetchWordsSimiliar from './words_Similiar_Reducer';
import FetchWordsSpelledLike from './words_SoundLike_Reducer';

const rootReducer = combineReducers({
  similiarWords: FetchWordsSimiliar,
  soundLikeWords: FetchWordsSpelledLike
});

export default rootReducer;
