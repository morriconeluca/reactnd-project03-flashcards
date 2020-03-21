import React from 'react';
import {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet
} from 'react-native';

const MDButton = ({onPress, backgroundColor, color, children}) => {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
    >
      <View
        style={[styles.button, {
          backgroundColor: backgroundColor || '#2962ff'
        }]}
      >
        <Text
          style={[
            styles.text,
            {color: color || '#fff'}
          ]}
        >
          {children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    marginVertical: 8,
    padding: 16
  },
  text: {
    fontSize: 24,
    textAlign: 'center'
  }
});

export default MDButton;