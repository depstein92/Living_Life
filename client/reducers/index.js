import { combineReducers } from 'redux';
import FetchWordsSimiliar from './words_Similiar_Reducer';


const rootReducer = combineReducers({
  similiarWords: FetchWordsSimiliar
});

export default rootReducer;
