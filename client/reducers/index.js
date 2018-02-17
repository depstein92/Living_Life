import { combineReducers } from 'redux';
import FetchWordsSimiliar from './words_Similiar_Reducer';
import FetchWordsSoundLike from './words_SoundLike_Reducer';
import FetchWordsSpelledLike from './words_SpelledLike_Reducer';

const rootReducer = combineReducers({
  similiarWords: FetchWordsSimiliar,
  soundLikeWords: FetchWordsSoundLike,
  spelledLikeWords: FetchWordsSpelledLike
});

export default rootReducer;
