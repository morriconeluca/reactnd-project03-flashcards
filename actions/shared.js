import {
  getDecks,
  saveDeckTitle,
  deleteDeck,
  addCardToDeck
} from '../utils/api';
import {receiveDecks, createDeck, addCard} from './decks';
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
    dispatch(isLoading());
    const decks = await getDecks();
    if (!(title in decks)) {
      await saveDeckTitle(title);
      dispatch(createDeck(title));
    } else {
      dispatch(throwError('There is a deck with the same title!'));
    }
  }
);

export const handleDeleteDeck = title => (
  async dispatch => {
    dispatch(isLoading());
    const decks = await deleteDeck(title);
    dispatch(receiveDecks(decks));
  }
);

export const handleAddCard = (title, card) => (
  async dispatch => {
    dispatch(isLoading());
    await addCardToDeck(title, card);
    dispatch(addCard(title, card));
  }
);