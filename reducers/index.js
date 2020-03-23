import {combineReducers} from 'redux';

import decks from './decks';
import status from './status';

const reducer = combineReducers({
  decks,
  status
});

export default reducer;