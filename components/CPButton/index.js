import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import CPTouchable from '../CPTouchable';

const CPButton = ({
  onPress,
  backgroundColor,
  borderColor,
  color,
  loading,
  children}) => {
  return (
    <CPTouchable
      onPress={onPress}
    >
      <View
        style={[styles.button, {
          backgroundColor: backgroundColor || '#2962ff',
          borderColor,
          borderWidth: borderColor && 2
        }]}
      >
        {!loading
          ? <Text
              style={[
                styles.text,
                {color: color || '#fff'}
              ]}
            >
              {children}
            </Text>
          : <ActivityIndicator size="small" color={color || '#fff'}/>
        }
      </View>
    </CPTouchable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 8,
    padding: 16
  },
  text: {
    fontSize: 24
  }
});

export default CPButton;