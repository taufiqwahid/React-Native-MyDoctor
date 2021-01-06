import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';

const Link = ({text, size, textAlign}) => {
  return (
    <View>
      <Text style={styles.link(size, textAlign)}>{text}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (size, textAlign) => ({
    textAlign: textAlign,
    fontFamily: 'Nunito-Regular',
    fontStyle: 'normal',
    fontSize: size,
    textDecorationLine: 'underline',
    color: colors.text.secondary,
  }),
});
