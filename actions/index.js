import {getDecks,saveDeckTitle, addCardToDeck} from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const CREATE_DECK = 'CREATE_DECK';

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const handleGetDecks = () => (
  async dispatch => {
    const decks = await getDecks().then(decks => {
      return decks;
    });
    dispatch(receiveDecks(decks));
  }
);

export const createDeck = title => ({
  type: CREATE_DECK,
  title
});

export const handleCreateDeck = title => (
  async dispatch => {
    await saveDeckTitle(title);
    dispatch(createDeck(title));
  }
);