import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.textInput}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#fff',
    borderColor: '#bdbdbd',
    borderRadius: 4,
    borderWidth: 1,
    color: '#212121',
    fontSize: 24,
    marginVertical: 8,
    padding: 16,
    textAlign: 'center'
  }
});

export default Input;