import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DeckList from '../DeckList';
import NewDeck from '../NewDeck';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DeckList"
        component={DeckList}
        options={{tabBarLabel: 'Deck List'}}
      />
      <Tab.Screen
        name="NewDeck"
        component={NewDeck}
        options={{tabBarLabel: 'New Deck'}}
      />
    </Tab.Navigator>
  );
};

export default Home;