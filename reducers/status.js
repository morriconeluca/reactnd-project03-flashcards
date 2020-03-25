import {RECEIVE_DECKS, CREATE_DECK} from '../actions/decks';
import {IS_LOADING, THROW_ERROR, CLEAR_ERROR} from '../actions/status';

const initialStatus = {
  loading: false,
  error: ''
}

export default function status(state = initialStatus, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
    case CREATE_DECK:
    case CLEAR_ERROR:
      return {
        loading: false,
        error: ''
      };
    case IS_LOADING:
      return {
        loading: true,
        error: ''
      };
    case THROW_ERROR:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};