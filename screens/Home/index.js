import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DeckList from '../DeckList';
import NewDeck from '../NewDeck';

const Tab = createMaterialTopTabNavigator();

const Home = ({loading}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DeckList"
        component={DeckList}
        options={{tabBarLabel: 'Decks'}}
        listeners={{
          tabPress: e => {
            // Prevent pressing tab when something is loading
            loading && e.preventDefault();
          }
        }}
      />
      <Tab.Screen
        name="NewDeck"
        component={NewDeck}
        options={{tabBarLabel: 'New Deck'}}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => ({
  loading: state.status.loading
});

export default connect(mapStateToProps)(Home);