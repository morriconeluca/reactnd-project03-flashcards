import React from 'react';
import {TouchableNativeFeedback} from 'react-native';

const CPTouchable = ({onPress, children}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  );
};

export default CPTouchable;