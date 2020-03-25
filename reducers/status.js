import {RECEIVE_DECKS, CREATE_DECK} from '../actions/decks';
import {IS_LOADING, THROW_ERROR} from '../actions/status';

const initialStatus = {
  loading: false,
  error: ''
}

export default function status(state = initialStatus, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
    case CREATE_DECK:
      return {
        ...state,
        loading: false
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true
      };
    case THROW_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};