import {RECEIVE_DECKS} from '../actions/decks';
import {IS_LOADING} from '../actions/status';

const initialStatus = {
  loading: false,
  error: ''
}

export default function status(state = initialStatus, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        loading: false
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};