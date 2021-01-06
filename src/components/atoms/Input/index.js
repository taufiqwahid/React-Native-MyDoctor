import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils/colors';

const Input = ({label}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: colors.text.secondary,
  },

  input: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: colors.input.text.primary,
    marginTop: 6,
    borderWidth: 1,
    padding: 11,
    borderColor: colors.input.secondary,
    borderRadius: 10,
  },
});
