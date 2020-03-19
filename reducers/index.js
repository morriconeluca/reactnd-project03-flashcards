import {RECEIVE_DECKS, CREATE_DECK} from '../actions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    case CREATE_DECK:
      const {title} = action;
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      };
    default:
      return state;
  }
};