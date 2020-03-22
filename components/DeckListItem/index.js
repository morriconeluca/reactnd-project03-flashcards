import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const DeckListItem = ({deck}) => {
  const {title, questions} = deck;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Deck', {title});
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <View style={styles.flex}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>{`${questions.length} cards`}</Text>
      </View>
      <MaterialIcons name="arrow-forward" size={32} color="#212121"/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  details: {
    color: '#9e9e9e'
  },
  flex: {
    flex: 1
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 16
  },
  title: {
    color: '#212121',
    fontSize: 24
  }
});

const mapStateToProps = (state, {id}) => ({
  deck: state[id]
});

export default connect(mapStateToProps)(DeckListItem);