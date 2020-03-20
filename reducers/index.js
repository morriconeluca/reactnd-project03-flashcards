import {RECEIVE_DECKS, CREATE_DECK, ADD_CARD} from '../actions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    case CREATE_DECK:
      var {title} = action;
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      };
    case ADD_CARD:
      var {title, card} = action;
      return {
        ...state,
        [title]: {
          title,
          questions: [
            ...state[title].questions,
            card
          ]
        }
      };
    default:
      return state;
  }
};