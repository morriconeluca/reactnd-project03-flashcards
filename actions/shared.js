import {getDecks} from '../utils/api';
import {receiveDecks} from './decks';
import {isLoading} from './status';

export const handleGetDecks = () => (
  async dispatch => {
    dispatch(isLoading());
    const decks = await getDecks().then(decks => {
      return decks;
    });
    dispatch(receiveDecks(decks));
  }
);