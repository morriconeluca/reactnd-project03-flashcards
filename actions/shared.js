import {getDecks, saveDeckTitle} from '../utils/api';
import {receiveDecks, createDeck} from './decks';
import {isLoading, throwError} from './status';

export const handleGetDecks = () => (
  async dispatch => {
    dispatch(isLoading());
    const decks = await getDecks();
    dispatch(receiveDecks(decks));
  }
);

export const handleCreateDeck = title => (
  async dispatch => {
    const decks = await getDecks();
    if (!(title in decks)) {
      await saveDeckTitle(title);
      dispatch(createDeck(title));
    } else {
      dispatch(throwError('Error! There is a deck with the same title!'));
    }
  }
);