import {addCardToDeck} from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const CREATE_DECK = 'CREATE_DECK';
export const ADD_CARD = 'ADD_CARD';

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const createDeck = title => ({
  type: CREATE_DECK,
  title
});

export const addCard = (title, card) => ({
  type: ADD_CARD,
  title,
  card
});

export const handleAddCard = (title, card) => (
  async dispatch => {
    await addCardToDeck(title, card);
    dispatch(addCard(title, card));
  }
);