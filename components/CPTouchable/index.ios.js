import React from 'react';
import {TouchableOpacity} from 'react-native';

const CPTouchable = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      {children}
    </TouchableOpacity>
  );
};

export default CPTouchable;