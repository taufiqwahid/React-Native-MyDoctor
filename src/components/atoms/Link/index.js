import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts} from '../../../utils';
import {colors} from '../../../utils/colors';

const Link = ({text, size, textAlign, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link(size, textAlign)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (size, textAlign) => ({
    textAlign: textAlign,
    fontFamily: Fonts.primary.normal,
    fontStyle: 'normal',
    fontSize: size,
    textDecorationLine: 'underline',
    color: colors.text.secondary,
  }),
});
