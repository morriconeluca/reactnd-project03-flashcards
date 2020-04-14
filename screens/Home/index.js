import React from 'react';
import {connect} from 'react-redux';

import {Ionicons} from '@expo/vector-icons';

import DeckList from '../DeckList';
import NewDeck from '../NewDeck';

import CPTab from '../../components/CPTab';

const Home = ({loading}) => {
  return (
    <CPTab.Navigator>
      <CPTab.Screen
        name="DeckList"
        component={DeckList}
        options={{
          tabBarLabel: 'Decks',
          tabBarIcon: () => (
            <Ionicons name="ios-list" size={24} color="#212121" />
          ),
        }}
        listeners={{
          tabPress: e => {
            // Prevent pressing tab when something is loading
            loading && e.preventDefault();
          }
        }}
      />
      <CPTab.Screen
        name="NewDeck"
        component={NewDeck}
        options={{
          tabBarLabel: 'New Deck',
          tabBarIcon: () => (
            <Ionicons name="ios-add-circle-outline" size={24} color="#212121" />
          ),
        }}
      />
    </CPTab.Navigator>
  );
};

const mapStateToProps = state => ({
  loading: state.status.loading
});

export default connect(mapStateToProps)(Home);